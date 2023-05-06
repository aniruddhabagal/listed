import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import logoWhite from "./assets/logo-white.svg";
import facebook from "./assets/icon-facebook.svg";
import youtube from "./assets/icon-youtube.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";
import instagram from "./assets/icon-instagram.svg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />

      <section id="cta" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>

          <div>
            <a
              href="#"
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >
              Dashboard
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>

            <div>
              <img src={logoWhite} className="h-15 w-28" alt="" />
            </div>

            <div className="flex justify-center space-x-4">
              <a href="#">
                <img src={facebook} alt="" className="h-8" />
              </a>

              <a href="#">
                <img src={youtube} alt="" className="h-8" />
              </a>

              <a href="#">
                <img src={twitter} alt="" className="h-8" />
              </a>

              <a href="#">
                <img src={pinterest} alt="" className="h-8" />
              </a>

              <a href="#">
                <img src={instagram} alt="" className="h-8" />
              </a>
            </div>
          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
