import Phone from "../assets/contactus/phone.png";
import Message from "../assets/contactus/message.png";
import Location from "../assets/contactus/location.png";
import Button from "../components/Button";

const ContactUs = () => {
  return (
    <section className="px-5 flex flex-col justify-around gap-10 sm:h-screen ">
      <div className="flex flex-col items-center justify-between gap-3">
        <h2 className="text-4xl font-semibold">Get in Touch!</h2>
        <h5 className="text-xl font-normal">Contact us for more info & demo</h5>
      </div>
      <div className="flex flex-col items-center justify-around gap-5 sm:justify-around sm:flex-row ">
        <div className="flex flex-row justify-between gap-5 sm:flex-col items-center sm:gap-3">
          <img src={Message} alt="Message" className="w-18 h-12 sm:h-16" />
          <p className="font-normal">abc@gmail.com</p>
        </div>
        <div className="flex flex-row justify-between gap-5 sm:flex-col items-center sm:gap-3">
          <img src={Phone} alt="Phone" className="w-14 h-12 sm:w-18 sm:h-16" />
          <p className="font-normal">123-456-709-0</p>
        </div>
        <div className="flex flex-row justify-between gap-16 sm:flex-col items-center sm:gap-3">
          <img src={Location} alt="Location" className="w-14 h-12 sm:w-18 sm:h-16" />
          <p className="font-normal">Abc,Def</p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-evenly gap-10">
        <div className="gap-5 flex flex-col items-center justify-evenly sm:h-full">
          <input
            type="text"
            required
            className="border-2 rounded-md h-16 w-84 border-black p-3"
            placeholder="Your Name"
          />
          <input
            type="email"
            required
            className="border-2 rounded-md h-16 w-84 border-black p-3"
            placeholder="Your Email"
          />
        </div>
        <textarea
          className="h-48 w-full border-2 border-black rounded-md p-3 resize-none sm:w-[500px]"
          placeholder="Your Message Here..."
        ></textarea>
      </div>
      <Button label="Submit" className="mx-auto w-full sm:w-28" />
    </section>
  );
};

export default ContactUs;
