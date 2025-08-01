import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import NotFound from "./pages/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import ContactEmails from "./pages/contactEmails";
import { ToastContainer } from 'react-toastify';
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./middleware/auth.middleware"; 
import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader";

function ProtectedRoute() {
  const [auth, setAuth] = useState<null | boolean>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const result = await isAuthenticated();
      if (mounted) setAuth(!!result);
    })();
    return () => { mounted = false; };
  }, []);

  if (auth === null) {
    return <Loader />;
  }
  return auth ? <Outlet /> : <Navigate to="/signin" replace />;
}


  

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ToastContainer
          theme="dark"
          style={{ zIndex: 999999 }}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/email-data" element={<ContactEmails />} />
            </Route>
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
