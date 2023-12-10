import { useContext, useState } from "react";
import context from "../context/context";
import { Link } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState();
  const [fullname, setFullname] = useState();
  const [date, setDate] = useState();
  const { users, setUsers } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([
      {
        name: name,
        fullname: fullname,
        date: date,
      },
      ...users,
    ]);

    setName("");
    setFullname("");
    setDate("");
  };

  return (
    <div className="w-full max-w-xs">
      <h1 className="font-lg block text-gray-700 font-bold p-5 m-3">
        Please Complete the form below
      </h1>
      <form className="bg-gray-100 shadow-md rounded px-8 pb-10 pt-6">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          required
          placeholder="name"
          className="w-full shadow appearance-none border rounded w-ful m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          required
          placeholder="fullname"
          className="shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
          className="shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        />
        <Link
          to="/createtable"
          className="bg-blue-500 font-bold hover:bg-blue-700 px-4 py-2 m-3 rounded text-white "
        >
          Results
        </Link>
      </form>
    </div>
  );
}
