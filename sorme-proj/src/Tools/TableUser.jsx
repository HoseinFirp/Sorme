function TableUser() {
  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block  align-middle">
          <div className="overflow-hidden border bg-pink-100 bg-opacity-70 rounded-lg">
            <table className="min-w-full divide-y divide-pink-300">
              <thead className="bg-pink-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    User Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
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
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 flex justify-center hover:text-red-700" href="#">
                      X
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 flex justify-center hover:text-red-700 " href="#">
                      X
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 flex justify-center hover:text-red-700" href="#">
                      X
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a className="text-red-500 flex justify-center hover:text-red-700" href="#">
                      X
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableUser;
