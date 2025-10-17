import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollToTop from "./components/ScrollToTop";
import { JobProvider } from "./context/JobContext";


const queryClient = new QueryClient();


const App = () => {

useEffect(() => {
  console.log("Shortcut effect mounted");

  const handleKeyDown = async (e: KeyboardEvent) => {
    console.log("Key pressed:", e.key, e.ctrlKey, e.shiftKey);

    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "u") {
      e.preventDefault();
      try {
        // const response = await fetch('http://localhost:3000/api/admin/url');
       const response = await fetch('https://ud-u86f.onrender.com/api/admin/url');
       const data = await response.json();
        if (data.adminUrl) {
          window.open(data.adminUrl, "_blank");
        } else {
          console.error('Admin URL not received');
        }
      } catch (error) {
        console.error('Failed to fetch admin URL:', error);
      }
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, []);



  return(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SmoothScrollProvider>
        <BrowserRouter>
          <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route
                path="/careers"
                element={
                  <JobProvider>
                    <Careers />
                  </JobProvider>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </SmoothScrollProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

};


export default App;
