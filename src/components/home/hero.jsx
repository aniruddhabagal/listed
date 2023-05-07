import illustrationIntro from "./assets/illustration-intro.svg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Listed makes it simple for Creators to manage links and plan
              day-to-day tasks while keeping the larger goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight cursor-pointer"
                onClick={navigateToLogin}
              >
                Dashboard
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={illustrationIntro} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
