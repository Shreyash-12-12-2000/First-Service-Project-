import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Megaphone,
  Users,
  Headphones,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { servicesData } from "@/data/servicesData";

const Home = () => {

  const services = servicesData.slice(0, 6);

  const stats = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: CheckCircle, value: "500+", label: "Projects Completed" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

const testimonials = [
  {
    id: 1,
    name: "Rishabh Soni",
    designation: "CEO, ARPN Fintech PVT Ltd",
    feedback:
      "The team at this company transformed our IT infrastructure, leading to significant efficiency gains.",
    image:
      "profile1.jpg",
  },
  {
    id: 2,
    name: "Anunay Vishwakarma",
    designation: "Marketing Director, Creative Agency",
    feedback:
      "Their digital marketing strategies have significantly increased our online presence and customer engagement.",
    image:
      "profile3.jpg",
  },
  {
    id: 3,
    name: "Tanushree Kedar",
    designation: "HR Manager, GROHERE",
    feedback:
      "Exceptional HR services that helped us find the right talent quickly and efficiently.",
    image:
      "profile5.png",
  },
  {
    id: 4,
    name: "Nhikhil Tete",
    designation: "Product Manager, Pocketvender",
    feedback:
      "From UX to deployment, the team delivered a sleek and scalable SaaS product right on schedule.",
    image:
      "profile6.png",
  },
  {
    id: 5,
    name: "Sparsh Meshram",
    designation: "Founder, GROHERE",
    feedback:
      "Their fintech expertise helped us create a secure and intuitive mobile experience for our users.",
    image:
      "profile7.png",
  },
  {
    id: 6,
    name: "Abhishek Sahani",
    designation: "Operations Lead, VCT",
    feedback:
      "Workflow automation improved our team productivity by 30%. Highly efficient and collaborative process.",
    image:
      "profile8.png",
  },
  {
    id: 7,
    name: "Shreyash Chaple",
    designation: "CTO, SecureLayer",
    feedback:
      "We now have robust cloud security thanks to their seamless DevSecOps integration and constant support.",
    image:
      "profile4.png",
  },
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/10 pt-16">
      <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
>
    <source src="bg7.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div
    className="absolute inset-0"
    style={{
      width: '600px',
      height: '600px',
      backgroundImage: 'url("UmbrellAdesk 3.png")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: 0.2,
      pointerEvents: 'none',
      zIndex: 0,
      marginLeft: 500,
      marginTop: 100,
    }}
  />
       
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Professional Business
              <span className="text-accent block">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering businesses with comprehensive IT services, digital
              marketing, HR solutions, and advanced automation to drive growth
              and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary-foreground bg-primary hover:bg-primary hover:text-primary-foreground "
              > 
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full"
          />
        </div> */}
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business solutions designed to accelerate your
              growth and optimize your operations for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-[#e5e5e5] py-20">
        <h2 className="text-3xl font-bold text-center text-[#14213d] mb-10">
          What Our Clients Say
        </h2>
        <TestimonialSlider testimonials={testimonials} />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join hundreds of successful businesses that trust us with their
              growth. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-accent-foreground hover:bg-primary-foreground hover:text-accent"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
