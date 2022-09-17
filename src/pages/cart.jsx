import { Trash2 } from "react-feather";
import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh-150px)] lg:min-h-[calc(100vh-350px)] mt-10">
      <div className="block lg:flex gap-10">
        <div className="grow overflow-auto">
          <div className="pb-6 w-full min-w-[500px]">
            <div className="py-2 px-2 text-[14px] font-[600] text-gray-700 bg-gray-50">
              <div className="flex gap-5">
                <p className="grow">PRODUCT</p>
                <p className="flex-none min-w-[100px]">PRICE</p>
                <p className="flex-none min-w-[60px]">REMOVE</p>
              </div>
            </div>

            <div className="py-4 px-2 text-gray-700">
              <div className="flex items-center gap-5">
                <div className="grow">
                  <div className="flex gap-2">
                    <img
                      src={painting1}
                      className="w-[50px] h-[60px] object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-600">
                        Hustify Painting
                      </p>
                      <p className="text-[14px] mt-1 text-gray-500">
                        2021-10-11
                      </p>
                    </div>
                  </div>
                </div>
                <p className="flex-none min-w-[100px] font-semibold text-gray-700">
                  $200
                </p>

                <div className="flex-none min-w-[60px]">
                  <Trash2 size={18} className="ml-4 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="py-4 px-2 border-t-[1px] text-gray-700">
              <div className="flex items-center gap-5">
                <div className="grow">
                  <div className="flex gap-2">
                    <img
                      src={painting2}
                      className="w-[50px] h-[60px] object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-600">
                        Hustify Painting
                      </p>
                      <p className="text-[14px] mt-1 text-gray-500">
                        2021-10-11
                      </p>
                    </div>
                  </div>
                </div>
                <p className="flex-none min-w-[100px] font-semibold text-gray-700">
                  $200
                </p>
                <div className="flex-none min-w-[60px]">
                  <Trash2 size={18} className="ml-4 text-gray-600" />
                </div>
              </div>
            </div>
            <div className="py-4 px-2 border-t-[1px] text-gray-700">
              <div className="flex items-center gap-5">
                <div className="grow">
                  <div className="flex gap-2">
                    <img
                      src={painting2}
                      className="w-[50px] h-[60px] object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-600">
                        Hustify Painting
                      </p>
                      <p className="text-[14px] mt-1 text-gray-500">
                        2021-10-11
                      </p>
                    </div>
                  </div>
                </div>
                <p className="flex-none min-w-[100px] font-semibold text-gray-700">
                  $200
                </p>
                <div className="flex-none min-w-[60px]">
                  <Trash2 size={18} className="ml-4 text-gray-600" />
                </div>
              </div>
            </div>
            <div className="py-4 px-2 border-t-[1px] text-gray-700">
              <div className="flex items-center gap-5">
                <div className="grow">
                  <div className="flex gap-2">
                    <img
                      src={painting1}
                      className="w-[50px] h-[60px] object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-600">
                        Hustify Painting
                      </p>
                      <p className="text-[14px] mt-1 text-gray-500">
                        2021-10-11
                      </p>
                    </div>
                  </div>
                </div>
                <p className="flex-none min-w-[100px] font-semibold text-gray-700">
                  $200
                </p>
                <div className="flex-none min-w-[60px]">
                  <Trash2 size={18} className="ml-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[400px] float-right lg:float-none mt-16 lg:mt-0 clear-both">
          <div className="w-full shadow">
            <div className="p-6">
              <div>
                <label htmlFor="contact" className="text-gray-500">
                  Contact <span className="text-red-700">*</span>
                  <input type="text" className="input-field mt-2" />
                </label>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="text-gray-500">
                  Email
                  <input type="email" className="input-field mt-2" />
                </label>
              </div>

              <div className="mt-4">
                <label htmlFor="address" className="text-gray-500">
                  Address <span className="text-red-700">*</span>
                  <input type="text" className="input-field mt-2" />
                </label>
              </div>
            </div>

            <div className="border-t-[1px] p-6">
              <div className="flex justify-between">
                <p className="text-gray-700">Total Amount: </p>
                <p className="font-semibold text-gray-700">$300</p>
              </div>

              <button className="py-2 w-full mt-6 text-white bg-primary hover:bg-darkPrimary">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
