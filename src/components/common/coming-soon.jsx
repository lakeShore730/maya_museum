import buddhaStatue from "../../assets/images/buddha.png";

const ComingSoon = (props) => {
  const { message = "Coming Soon" } = props;

  return (
    <div className="h-auto min-h-[calc(100vh-350px)] flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <img src={buddhaStatue} alt="buddha-statue" className="w-[100px]" />
        </div>
        <p className="text-center text-gray-500 font-medium text-xl mt-8">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
