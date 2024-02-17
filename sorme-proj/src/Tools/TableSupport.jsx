import { useContext, useEffect, useState } from "react";
import { useUser } from "../Slicers/userSlice";
import axios from "axios";
import { UserContext } from "../App";
import LoaderDots from "./Loaders/LoaderDots";

function TableSupport() {
  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(false);

  const { path, setActiveTickets, setSupport } = useContext(UserContext);
  const user = useUser();

  useEffect(() => {
    const req = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `https://keykavoos-sorme.liara.run/Admin/get-support`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setSupports(data);
        setSupport(data);
        setActiveTickets(supports.length);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(error.response.data);
      }
    };

    if (path === "admin") {
      req();
    }
  }, [user.token, path, setActiveTickets, setSupport, supports.length]);
  console.log(supports);

  return (
    <div className="overflow-x-auto bg-white p-5 max-h-96  rou,nded-lg">
      <table className="table ">
        <thead>
          <tr>
            <th></th>
            <th className="text-pink-300 font-bold text-lg min-w-28">Title</th>
            <th className="text-pink-300 font-bold text-lg min-w-28">Date</th>
            <th className="text-pink-300 font-bold text-lg ">Condition</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div className="mt-5  ">
              <LoaderDots />
            </div>
          ) : (
            supports.map((data) => (
              <tr className="cursor-pointer" key={data._id}>
                <th className="font-bold text-pink-300">1</th>
                <td className="text-gray-500 font-bold ">
                  {data.Support.map((data) => (
                    <p key={data._id}>{data.name}</p>
                  ))}
                </td>
                <td className="text-gray-500 font-bold">
                  {data.createdAt.slice(0, 10)}
                </td>
                <td className="text-gray-700 font-extrabold text-center ">
                  active
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableSupport;
