import React, { useContext } from "react";
import context from "../context/context";

export default function Table() {
  const { users, setUsers } = useContext(context);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Fullname
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={`${user.name}-${index}`}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.fullname}</td>
              <td className="px-6 py-4">{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
