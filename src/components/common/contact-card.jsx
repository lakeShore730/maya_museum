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
              className="input-field"
            />
            <textarea
              rows="3"
              className="input-field mt-5"
              placeholder="Your message"
            ></textarea>
            <button className="mt-5 w-full bg-primary py-2 text-white font-semibold hover:bg-darkPrimary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center mt-5 gap-5">
        <Facebook
          size={30}
          className="rounded-full p-[5px] cursor-pointer border-[1px] border-gray-200 text-primary hover:text-darkPrimary"
        />
        <Twitter
          size={30}
          className="rounded-full p-[5px] cursor-pointer border-[1px] border-gray-200 text-primary hover:text-darkPrimary"
        />
        <Instagram
          size={30}
          className="rounded-full p-[5px] cursor-pointer border-[1px] border-gray-200 text-primary hover:text-darkPrimary"
        />
      </div>

      <ContactInfo className="mt-16" />
    </div>
  );
};

export default ContactCard;
