import "../App.css";
import Navbar from "../components/home/navbar";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import Testimonials from "../components/home/testimonials";
import CTA from "../components/home/cta";
import Footer from "../components/home/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
