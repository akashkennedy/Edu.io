import Button from "../components/Button";
import Planet from "../assets/signin/planet.png";
import flake1 from "../assets/home/flakes-1.png";
import flake2 from "../assets/home/flakes-2.png";
import flake3 from "../assets/home/flakes-3.png";

const SignIn = () => {
  return (
    <section className="flex items-center justify-between px-10 h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-evenly gap-10 h-full pt-20">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-5xl font-semibold mb-8">Sign In</h2>
          <input
            type="text"
            required
            className="block border-2 border-black rounded-md h-12 w-96 p-3"
            placeholder="E-Mail"
          />
          <input
            type="email"
            required
            className="block  border-2 border-black rounded-md h-12 w-96 p-3"
            placeholder="password"
          />
          <Button label="Continue" className="w-full" />
          <div>
            <p className="font-normal">Don't have an Account?</p>
            <a href="#">
              <span className="block font-bold text-center underline">
                Sign Up
              </span>
            </a>
          </div>
        </div>
      </div>
      <img
        src={flake1}
        alt=""
        className="h-18 w-24 relative bottom-10 left-28 rotate-45"
      />
      <img src={Planet} alt="Planet" className="h-[800px] w-[800px]" />
      <img
        src={flake2}
        alt=""
        className="h-18 w-24 relative top-42 right-32 rotate-12"
      />
      <img src={flake3} alt="" className="h-18 w-24 relative top-60 right-96" />
    </section>
  );
};

export default SignIn;
