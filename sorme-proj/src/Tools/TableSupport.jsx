function TableSupport() {
  return (
    <div className="overflow-x-auto bg-white p-5  rounded-lg">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-pink-300 font-bold text-lg min-w-36">Title</th>
            <th className="text-pink-300 font-bold text-lg min-w-24">Date</th>
            <th className="text-pink-300 font-bold text-lg max-w-32">
              Condition
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="font-bold text-pink-300">1</th>
            <td className="text-gray-500 font-bold ">Cy Ganderton</td>
            <td className="text-gray-500 font-bold">2022/02/10</td>

            <td className="text-gray-700 font-extrabold text-center ">
              active
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th className="font-bold text-pink-300">2</th>
            <td className="text-gray-500 font-bold">Hart Hagerty</td>
            <td className="text-gray-500 font-bold">2022/02/10</td>
            <td className="text-gray-700 font-extrabold text-center">active</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th className="font-bold text-pink-300">3</th>
            <td className="text-gray-500 font-bold">Brice Swyre</td>
            <td className="text-gray-500 font-bold">2022/02/10</td>{" "}
            <td className="text-gray-700 font-extrabold text-center">active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableSupport;
