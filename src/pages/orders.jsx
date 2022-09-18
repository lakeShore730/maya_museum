import { Trash2 } from "react-feather";
import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";

const Orders = () => {
  return (
    <div className="min-h-[calc(100vh-150px)] lg:min-h-[calc(100vh-350px)] mt-10">
      <p className="text-[18px] font-medium text-gray-700">Your Order</p>

      <div className="mt-8 overflow-auto">
        <table className="w-full min-w-[500px]">
          <thead className="text-[14px] text-left font-[600] text-gray-700 bg-gray-50">
            <tr>
              <th className="p-2">PRODUCT</th>
              <th className="p-2">PRICE</th>
              <th className="p-2">STATUS</th>
              <th className="p-2">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>
                <div className="p-2 flex items-center gap-2">
                  <img
                    src={painting1}
                    alt="product-1"
                    className="w-[50px] h-[60px] object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-600">
                      Hustify Painting
                    </p>
                    <p className="text-[14px] mt-1 text-gray-500">2021-10-11</p>
                  </div>
                </div>
              </td>
              <td className="p-2 font-medium text-gray-700">$200</td>
              <td className="p-2 text-gray-700">pending</td>
              <td className="p-2">
                <Trash2
                  size={18}
                  className="ml-[10px] cursor-pointer text-gray-700"
                />
              </td>
            </tr>

            <tr className="border-t-[1px]">
              <td>
                <div className="p-2 flex items-center gap-2">
                  <img
                    src={painting2}
                    alt="product-1"
                    className="w-[50px] h-[60px] object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-600">
                      Hustify Painting
                    </p>
                    <p className="text-[14px] mt-1 text-gray-500">2021-10-11</p>
                  </div>
                </div>
              </td>
              <td className="p-2 font-medium text-gray-700">$200</td>
              <td className="p-2 text-gray-700">pending</td>
              <td className="p-2">
                <Trash2
                  size={18}
                  className="ml-[10px] cursor-pointer text-gray-700"
                />
              </td>
            </tr>

            <tr className="border-t-[1px]">
              <td>
                <div className="p-2 flex items-center gap-2">
                  <img
                    src={painting1}
                    alt="product-1"
                    className="w-[50px] h-[60px] object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-600">
                      Hustify Painting
                    </p>
                    <p className="text-[14px] mt-1 text-gray-500">2021-10-11</p>
                  </div>
                </div>
              </td>
              <td className="p-2 font-medium text-gray-700">$200</td>
              <td className="p-2 text-gray-700">pending</td>
              <td className="p-2">
                <Trash2
                  size={18}
                  className="ml-[10px] cursor-pointer text-gray-700"
                />
              </td>
            </tr>

            <tr className="border-t-[1px]">
              <td>
                <div className="p-2 flex items-center gap-2">
                  <img
                    src={painting2}
                    alt="product-1"
                    className="w-[50px] h-[60px] object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-600">
                      Hustify Painting
                    </p>
                    <p className="text-[14px] mt-1 text-gray-500">2021-10-11</p>
                  </div>
                </div>
              </td>
              <td className="p-2 font-medium text-gray-700">$200</td>
              <td className="p-2 text-gray-700">Badge</td>
              <td className="p-2">
                <Trash2
                  size={18}
                  className="ml-[10px] cursor-pointer text-gray-700"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
