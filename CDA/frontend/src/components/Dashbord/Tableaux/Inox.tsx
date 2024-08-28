const Inox = () => {
  const dataTable = [
    {
      name: "Annual Report",
      file: "PDF",
      category: "Property",
      author: "Diana Matthews",
      status: "Send",
    },
    {
      name: "Business Plan",
      file: "WORD",
      category: "Cryptocurrency",
      author: "Philip James",
      status: "Send",
    },
    {
      name: "Marketing Tool",
      file: "PDF",
      category: "Content Creator",
      author: "Amanda Ross",
      status: "Pending",
    },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Document</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                File
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataTable.map((data, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.file}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.author}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    data.status === "Send" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inox;
