import cn from "classnames";

const ContactInfo = (props) => {
  const { className = "" } = props;
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="w-[100%] max-w-[300px] text-center text-gray-700 text-lg">
        <p>lakeshore@gmail.com</p>
        <p className="mt-5">Phone Number: 9779897678</p>
        <p className="mt-5">
          Mailing Address: 1720 Forest Park Blvd Fort Wayne, IN 46805
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
