import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] mt-10">
      <div className="flex justify-center">
        <form className="w-full max-w-[550px] p-6 rounded-md shadow">
          <p className="subheader text-center text-gray-700">Login</p>
          <p className="text-[14px] mt-1 text-center text-gray-500">
            Enter your credentials to login
          </p>

          <div className="mt-5">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input type="email" className="input-field mt-1" />
          </div>

          <div className="mt-5">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input type="password" className="input-field mt-1" />
          </div>

          <div className="flex justify-center mt-5">
            <button className="primary-btn px-10" type="submit">
              Login
            </button>
          </div>

          <div className="mt-5">
            <p className="text-[14px] mt-1 text-center text-gray-500">
              If you don't have an account?.
              <Link to="/register" className="text-medium text-gray-800">
                {" "}
                Register now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
