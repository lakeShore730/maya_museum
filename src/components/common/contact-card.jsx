import cn from "classnames";
import { Facebook, Instagram, Twitter } from "react-feather";
import ContactInfo from "./contact-info";

const ContactCard = (props) => {
  const { className = "" } = props;

  return (
    <div className={cn(className)}>
      <div className="flex justify-center w-100">
        <div className="w-[100%] max-w-[650px] border-2 border-gray-400 p-5">
          <h1 className="text-gray-600">Join us through mail</h1>
          <h1 className="text-gray-600">Never miss any painting</h1>

          <form className="mt-5">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-1 border border-gray-500 outline-none text-gray-700"
            />
            <textarea
              rows="3"
              className="p-1 mt-5 w-full border border-gray-500 outline-none text-gray-700"
              placeholder="Your message"
            ></textarea>
            <button className="mt-5 w-full bg-primary py-2 text-white font-semibold hover:bg-emerald-800">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center mt-5 gap-5">
        <Facebook
          size={30}
          className="text-white bg-primary rounded-full p-[5px] cursor-pointer hover:bg-emerald-800"
        />
        <Twitter
          size={30}
          className="text-white bg-primary rounded-full p-[5px] cursor-pointer hover:bg-emerald-800"
        />
        <Instagram
          size={30}
          className="text-white bg-primary rounded-full p-[5px] cursor-pointer hover:bg-emerald-800"
        />
      </div>

      <ContactInfo className="mt-16" />
    </div>
  );
};

export default ContactCard;
