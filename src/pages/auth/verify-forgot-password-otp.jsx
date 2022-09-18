const VerifyForgotPasswordOtp = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] mt-10">
      <div className="flex justify-center">
        <form className="w-full max-w-[550px] p-6 rounded-md shadow">
          <p className="subheader text-center text-gray-700">
            OTP Verification
          </p>
          <p className="text-[14px] mt-1 text-center text-gray-500">
            Enter the forgot password OTP to reset your password.
          </p>

          <div className="mt-5">
            <label htmlFor="otp" className="text-gray-700">
              OTP
            </label>
            <input type="text" className="input-field mt-1" />
          </div>

          <div className="mt-5 flex justify-center">
            <button className="primary-btn px-10" type="submit">
              Continue
            </button>
          </div>

          <div className="mt-5">
            <p className="text-[14px] mt-1 text-center text-gray-500">
              If you have not got the OTP?.
              <span className="text-medium text-gray-800"> Resend OTP</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyForgotPasswordOtp;
