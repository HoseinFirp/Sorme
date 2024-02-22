import axios from "axios";
import { useContext, useEffect } from "react";
import { useUser } from "../Slicers/userSlice";
import { UserContext } from "../App";

function Table() {
  const user = useUser();
  const { path } = useContext(UserContext);

  useEffect(() => {
    const req = async () => {
      try {
        const data = await axios.get(
          `https://keykavoos-sorme.liara.run/Order/All-Order`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    if (path === "admin") {
      req();
    }
  }, [user.token, path]);


// useEffect(()=>{
//   const reqUser = async () => {
//     try {
//       const data = await axios.get(
//         `https://keykavoos-sorme.liara.run/Order/All-Order`,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );
//       console.log(data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
// },[])

  return (
    <div className="overflow-x-auto lg:scale-110 md:scale-75 scale-50 bg-pink-300 bg-opacity-20  p-5 rounded-lg">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-pink-300 font-bold text-lg">Order</th>
            <th className="text-pink-300 font-bold text-lg">Date</th>
            <th className="text-pink-300 font-bold text-lg">Condition</th>
            <th className="text-pink-300 font-bold text-lg">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="font-bold text-pink-300">1</th>
            <td className="text-gray-500 font-bold">Cy Ganderton</td>
            <td className="text-gray-500 font-bold">
              Quality Control Specialist
            </td>
            <td className="text-gray-500 font-bold">Blue</td>
            <td className="text-gray-700 font-extrabold">60 $</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th className="font-bold text-pink-300">2</th>
            <td className="text-gray-500 font-bold">Hart Hagerty</td>
            <td className="text-gray-500 font-bold">
              Desktop Support Technician
            </td>
            <td className="text-gray-500 font-bold">Purple</td>
            <td className="text-gray-700 font-extrabold">60 $</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th className="font-bold text-pink-300">3</th>
            <td className="text-gray-500 font-bold">Brice Swyre</td>
            <td className="text-gray-500 font-bold">Tax Accountant</td>
            <td className="text-gray-500 font-bold">Red</td>
            <td className="text-gray-700 font-extrabold">60 $</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
