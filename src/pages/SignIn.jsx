import Button from "../components/Button";
import Planet from "../assets/signin/planet.png";
import flake1 from "../assets/home/flakes-1.png";
import flake2 from "../assets/home/flakes-2.png";
import flake3 from "../assets/home/flakes-3.png";

const SignIn = () => {
  return (
    <section className="flex flex-col-reverse sm:items-center justify-between  sm:flex-row sm:px-10 sm:h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-evenly gap-10 h-full sm:ml-20">
        <div className="flex flex-col items-center gap-5 border-black p-5 rounded-md card-shadow sm:border-2">
          <h2 className="text-5xl font-semibold mb-8">Sign In</h2>
          <input
            type="email"
            required
            className="border-2 border-black rounded-md h-12 w-96 p-3"
            placeholder="E-Mail"
          />
          <input
            type="password"
            required
            className="border-2 border-black rounded-md h-12 w-96 p-3"
            placeholder="Password"
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
      <div className="flex items-center justify-between">
        <img
          src={flake1}
          className="hidden sm:block h-18 w-24 relative bottom-10 left-28 rotate-45"
        />
        <img src={Planet} alt="Planet" className="size-full sm:size-[800px]" />
        <img
          src={flake2}
          className="hidden sm:block h-18 w-24 relative top-42 right-36 rotate-12"
        />
        <img
          src={flake3}
          className="hidden sm:block h-18 w-24 relative right-96 top-56"
        />
      </div>
    </section>
  );
};

export default SignIn;
