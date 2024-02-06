function TableFinancial() {
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
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Order
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 min-w-32 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    User Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    #2546
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Tom Hardy
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    - $60
                  </td>
                  
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    #2546
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Tom Hardy
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    - $60
                  </td>
                  
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    #2546
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Tom Hardy
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    - $60
                  </td>
                  
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    #2546
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Tom Hardy
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    2022/02/01
                  </td><td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    - $60
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

export default TableFinancial;
