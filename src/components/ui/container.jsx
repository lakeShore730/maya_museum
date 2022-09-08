import cn from "classnames";

const Container = (props) => {
  const { className = "", children, ...others } = props;

  return (
    <div
      className={cn(
        "px-4 md:px-5 lg:px-10 w-full max-w-[1150px] mx-auto",
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
};

export default Container;
