import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
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

      <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What{"'"}s Different About Listed?
          </h2>

          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <h5 className="text-lg font-bold">Anisha</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Listed has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <h5 className="text-lg font-bold">Rahul</h5>
              <p className="text-sm text-darkGrayishBlue">
                “There is no more cross-channel confusion and everyone is much
                more focused.”
              </p>
            </div>

            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <h5 className="text-lg font-bold">Avinash</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Listed has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>

          <div className="my-16">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Dashboard
            </a>
          </div>
        </div>
      </section>
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
