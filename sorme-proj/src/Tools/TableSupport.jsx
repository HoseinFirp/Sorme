import { useContext, useEffect, useState } from "react";
import { useUser } from "../Slicers/userSlice";
import axios from "axios";
import { UserContext } from "../App";
import { LoaderDots1 } from "./Loaders/LoaderDots";

function TableSupport() {
  const [supports, setSupports] = useState([]);
  const [mergedArray, setMergedArray] = useState([]);
  const [supportsUserProfile, setSupportsUserProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  const { path, setActiveTickets, setSupport } = useContext(UserContext);
  const user = useUser();

  useEffect(() => {
    setSupportsUserProfile(user.data.Support);
  }, [supportsUserProfile, user.data.Support]);

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
        const dataUsers = await axios.get(
          `https://keykavoos-sorme.liara.run/Admin/getsupport_user`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setSupports(data);
        setSupport(data);
        setLoading(false);
        let mergedArray1 = supports.concat(dataUsers.data);
        setMergedArray(mergedArray1);
        setActiveTickets(mergedArray1.length);
      } catch (error) {
        setLoading(false);

        console.log(error.response.data);
      }
    };

    if (path === "admin") {
      req();
    }
  }, [user.token, path, setActiveTickets, setSupport, supports.length]);

  return (
    <div className="overflow-x-auto bg-white p-5 pt-0 pb-5 max-h-72 min-w-96   rounded-lg">
      <table className="w-full table-fixed ">
        <thead className="sticky top-0 bg-white z-10">
          <tr>
            <th className="text-pink-300 font-bold text-left text-lg w-1/4 py-3">
              Title
            </th>
            <th className="text-pink-300 font-bold text-lg w-1/4 py-3">Date</th>
            <th className="text-pink-300 font-bold text-lg text-center w-1/4 py-3">
              Condition
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <LoaderDots1 />
          ) : (
            mergedArray
              .sort(
                (a, b) =>
                  new Date(b.createdAt.slice(0, 10)) -
                  new Date(a.createdAt.slice(0, 10))
              )
              .map((data) => (
                <tr className="cursor-pointer" key={data._id}>
                  <td className="text-gray-500 flex gap-2 justify-between font-bold py-4">
                    {data.Support.map((data) => (
                      <p key={data._id}>{data.name}</p>
                    ))}
                    <p className="text-gray-400">
                      {data.position ? `(${data.position})` : null}
                    </p>
                  </td>
                  <td className="text-gray-500 text-center font-bold py-4">
                    {data.createdAt.slice(0, 10)}
                  </td>
                  <td className="text-gray-700 font-extrabold text-center py-4">
                    active
                  </td>
                </tr>
              ))
          )}
          {path === "user" &&
            supportsUserProfile.map((data) => (
              <tr className="cursor-pointer border-b-2" key={data._id}>
                <td className="text-gray-500 font-bold py-4">
                  <p key={data._id}>{data.message}</p>
                </td>
                <td className="text-gray-500 text-center font-bold py-4"></td>
                <td className="text-gray-700 font-extrabold text-center py-4">
                  active
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSupport;
