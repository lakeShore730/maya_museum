const Footer = () => {
  const date = new Date();

  return (
    <div className="mt-16">
      <p className="p-2 text-center text-gray-600 text-sm">
        {" "}
        © {date.getFullYear()} by Lake Shore
      </p>
    </div>
  );
};

export default Footer;
