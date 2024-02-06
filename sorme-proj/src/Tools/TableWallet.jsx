function TableWallet() {
  return (
    <div className="overflow-x-auto bg-white p-5 rounded-lg">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-pink-300 min-w-32 font-bold text-lg">Order</th>
            <th className="text-pink-300 font-bold text-lg">Date</th>
            <th className="text-pink-300 font-bold text-lg ">Total</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="font-bold text-pink-300">1</th>
            <td className="text-gray-500 font-bold">Cy Ganderton</td>
            <td className="text-gray-500 font-bold">
              2024/02/05
            </td>

            <td className="text-gray-700 font-extrabold text-center">60 $</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th className="font-bold text-pink-300">2</th>
            <td className="text-gray-500 font-bold">Hart Hagerty</td>
            <td className="text-gray-500 font-bold">
              2022/04/02
            </td>
            <td className="text-gray-700 font-extrabold text-center">60 $</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th className="font-bold text-pink-300">3</th>
            <td className="text-gray-500 font-bold">Brice Swyre</td>
            <td className="text-gray-500 font-bold">
              2020/09/02
            </td>
            <td className="text-gray-700 font-extrabold text-center">60 $</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableWallet;
