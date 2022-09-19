import { Camera } from "react-feather";

const Account = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] mt-10">
      <section>
        <h1 className="subheader text-gray-700">Account Details</h1>
        <div className="w-[130px] h-[130px] mt-10 rounded-full relative bg-gray-100">
          <Camera className="absolute bottom-[5px] right-[5px] cursor-pointer text-primary hover:text-darkPrimary" />
        </div>
      </section>

      <section>
        <form className="w-full max-w-[800px]">
          <div className="mt-4">
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input type="text" className="input-field mt-1" />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input type="email" className="input-field mt-1" />
          </div>

          <div className="mt-4">
            <label htmlFor="contact" className="text-gray-700">
              Contact
            </label>
            <input type="text" className="input-field mt-1" />
          </div>
          <div className="mt-4">
            <label htmlFor="address" className="text-gray-700">
              Address
            </label>
            <input type="text" className="input-field mt-1" />
          </div>

          <div className="mt-6">
            <button className="primary-btn">Save Changes</button>
          </div>
        </form>
      </section>

      <section className="mt-10">
        <h1 className="subheader text-gray-700">Change Password</h1>
        <p className="text-[14px] mt-1 text-gray-500">
          Enter your current password along with the new one to update it.
        </p>

        <form className="w-full max-w-[800px]">
          <div className="mt-8">
            <label htmlFor="current-password" className="text-gray-700">
              Current Password
            </label>
            <input type="password" className="input-field mt-1" />
          </div>
          <div className="mt-4">
            <label htmlFor="new-password" className="text-gray-700">
              New Password
            </label>
            <input type="password" className="input-field mt-1" />
          </div>

          <div className="mt-4">
            <label htmlFor="confirm-password" className="text-gray-700">
              Confirm Password
            </label>
            <input type="password" className="input-field mt-1" />
          </div>

          <div className="mt-6">
            <button className="outline-btn">Save Changes</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Account;
