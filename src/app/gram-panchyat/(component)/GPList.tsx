"use client";
import { useState } from "react";

const data = [
  {
    siNo: 1,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "	Ambedkar Nagar",
    gpLgCode: 104024,
    pradhan: "Paresh Das",
  },
  {
    siNo: 2,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Betcherra",
    gpLgCode: 104025,
    pradhan: "Radharani Dhar",
  },
  {
    siNo: 3,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Dudpur",
    gpLgCode: 104026,
    pradhan: "Sima Das Majumder",
  },
  {
    siNo: 4,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Purba Kanchanbari",
    gpLgCode: 104028,
    pradhan: "Swapna Paul Deb",
  },
  {
    siNo: 5,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Purba Ratacherra",
    gpLgCode: 104027,
    pradhan: "Manika Malakar",
  },
  {
    siNo: 6,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Fatikroy",
    gpLgCode: 104029,
    pradhan: "Sumita Datta Kar",
  },
  {
    siNo: 7,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Gakulnagar",
    gpLgCode: 104030,
    pradhan: "Bina Das",
  },
  {
    siNo: 8,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Ganganagar",
    gpLgCode: 104031,
    pradhan: "Jogendra Debbarma",
  },
  {
    siNo: 9,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Jagannathpur",
    gpLgCode: 104032,
    pradhan: "Dayananda Das",
  },
  {
    siNo: 10,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Kanchanbari",
    gpLgCode: 104033,
    pradhan: "Sheli Bhattacharjee(Chowdhury)",
  },
  {
    siNo: 11,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Krishnanagar",
    gpLgCode: 104034,
    pradhan: "Sikha Paul",
  },
  {
    siNo: 12,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Laljuri",
    gpLgCode: 104035,
    pradhan: "Babul Das",
  },
  {
    siNo: 13,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Masauli",
    gpLgCode: 104036,
    pradhan: "Sankar Deb",
  },
  {
    siNo: 14,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Radhanagar",
    gpLgCode: 104037,
    pradhan: "Subrata Debnath",
  },
  {
    siNo: 15,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Rajnagar",
    gpLgCode: 261229,
    pradhan: "Pritam Biswas",
  },
  {
    siNo: 16,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Ratiabari",
    gpLgCode: 261231,
    pradhan: "Jayanti Das",
  },
  {
    siNo: 17,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Saidarpar",
    gpLgCode: 104038,
    pradhan: "--",
  },
  {
    siNo: 18,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Sonaimuri",
    gpLgCode: 104039,
    pradhan: "Mira Malakar",
  },
  {
    siNo: 19,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Sukanta Nagar",
    gpLgCode: 104040,
    pradhan: "Mina Rani Das",
  },
  {
    siNo: 20,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Taraninagar",
    gpLgCode: 104041,
    pradhan: "Rajib Deb",
  },
  {
    siNo: 21,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Ujan Dudpur",
    gpLgCode: 104042,
    pradhan: "Sankha Jyoti Das",
  },
  {
    siNo: 22,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Vidyasagar",
    gpLgCode: 261228,
    pradhan: "Kanu Malakar",
  },
  {
    siNo: 23,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Paschim Kanchanbari",
    gpLgCode: 261230,
    pradhan: "Jayanti Das",
  },
  {
    siNo: 24,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "West Masauli",
    gpLgCode: 104043,
    pradhan: "Subrata Ghosh",
  },
  {
    siNo: 25,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Paschim Ratacherra",
    gpLgCode: 104044,
    pradhan: "Shefali Sen(Dey)",
  },
  {
    siNo: 26,
    district: "Unkoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 2888,
    gramPanchayat: "Sripur",
    gpLgCode: 123456,
    pradhan: "Malasree Sinha",
  },
];

const GPList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((item) => {
    return (
      item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gramPanchayat.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">List of Gram Panchayats</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Block or Gram Panchayat"
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="w-full text-left table-auto">
        <thead>
          <tr>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">SI No</th>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of District
            </th>
            {/* <th className="bg-gray-200 text-gray-700 px-4 py-3">
              District LGD Code
            </th> */}
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of Block
            </th>
            {/* <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Block LGD Code
            </th> */}
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of Gram Panchayats
            </th>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">GP LGD Code</th>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of Pradhan
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.siNo}>
              <td className="border px-4 py-2">{item.siNo}</td>
              <td className="border px-4 py-2">{item.district}</td>
              {/* <td className="border px-4 py-2">{item.districtLgCode}</td> */}
              <td className="border px-4 py-2">{item.block}</td>
              {/* <td className="border px-4 py-2">{item.blockLgCode}</td> */}
              <td className="border px-4 py-2">{item.gramPanchayat}</td>
              <td className="border px-4 py-2">{item.gpLgCode}</td>
              <td className="border px-4 py-2">{item.pradhan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GPList;
