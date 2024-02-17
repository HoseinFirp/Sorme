import { useEffect, useState } from "react";
import { useUser } from "../Slicers/userSlice";
import Swal from "sweetalert2";
import axios from "axios";

function TableUser() {
  const user = useUser();
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);

  const reqDelete = async (_id) => {
    try {
      const data = await axios.delete(
        `https://keykavoos-sorme.liara.run/Admin/delete_user/${_id}`,
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

  useEffect(() => {
    const req = async () => {
      try {
        const { data } = await axios.get(
          `https://keykavoos-sorme.liara.run/Admin/get-user`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    req();
  }, [flag,user.token]);

  function sureDelete(_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        reqDelete(_id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <div className="flex flex-col scale-75 lg:scale-110 xl:scale-125">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block  align-middle">
          <div className="overflow-hidden border bg-pink-100 bg-opacity-70 rounded-lg">
            <table className="min-w-full divide-y divide-pink-300">
              <thead className="bg-pink-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs min-w-32 font-bold text-left text-gray-500 uppercase "
                  >
                    User Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs min-w-36 font-bold text-left text-gray-500 uppercase "
                  >
                    Registery Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Remove
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {users.map((data) => (
                  <tr key={data._id}>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800 whitespace-nowrap">
                      {data.username}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {data.createdAt.slice(0, 10)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {data.email}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500   flex justify-center hover:text-red-700">
                        <button
                          onClick={() => {
                            sureDelete(data._id);
                            setFlag(!flag);
                          }}
                          className="cursor-pointer px-2"
                        >
                          X
                        </button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableUser;
