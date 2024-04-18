import Phone from "../assets/contactus/phone.png";
import Message from "../assets/contactus/message.png";
import Location from "../assets/contactus/location.png";
import Button from "../components/Button";

const ContactUs = () => {
  return (
    <section className="h-screen px-10 flex flex-col gap-16">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold my-3">Get in Touch!</h2>
        <h5 className="text-xl font-normal">Contact us for more info & demo</h5>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-center gap-3 justify-between">
          <img src={Message} alt="Message" className="w-18 h-16" />
          <p className="font-normal">abc@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-3 justify-between">
          <img src={Phone} alt="Phone" className="w-18 h-16" />
          <p className="font-normal">123-456-709-0</p>
        </div>
        <div className="flex flex-col items-center gap-3 justify-between">
          <img src={Location} alt="Location" className="w-18 h-16" />
          <p className="font-normal">Abc,Def</p>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center justify-evenly h-full">
          <input
            type="text"
            required
            className="border-2 block rounded-md h-16 w-84 border-black p-3"
            placeholder="Your Name"
          />
          <input
            type="email"
            required
            className="border-2 block rounded-md h-16 w-84 border-black p-3"
            placeholder="Your Email"
          />
        </div>
        <textarea
          cols="30"
          rows="8"
          className="border-2 border-black rounded-md p-3"
          placeholder="Your Message Here..."
        ></textarea>
      </div>
      <Button label="Submit" className="m-auto w-40" />
    </section>
  );
};

export default ContactUs;
