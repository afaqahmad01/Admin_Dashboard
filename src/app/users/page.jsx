import React from "react";
import Layout from "../(layout)/layout";
import Link from "next/link";

const Users = () => {
  const users = [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
      posts: 3,
      status: "Active",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
      posts: 5,
      status: "Blocked",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@example.com",
      posts: 2,
      status: "Active",
    },
  ];
  return (
    <Layout>
      <div className={`bg-gray-100 h-[calc(100vh-10vh)]`}>
        <h2 className="text-2xl font-bold mb-10 pt-10 pl-9 ">Users</h2>
        <div className="bg-white p-4 rounded-lg w-[90vw] lg:w-[80vw] md:w-[70vw] shadow-lg  mx-auto ">
          <div className="overflow-y-auto ">
            <table className="min-w-full bg-white ">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">#</th>
                  <th className="border border-gray-300 p-2">Username</th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Posts</th>
                  <th className="border border-gray-300 p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">
                      <Link
                        href={`/user/${user.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {user.username}
                      </Link>
                    </td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                    <td className="border border-gray-300 p-2">{user.posts}</td>
                    <td
                      className={`border border-gray-300 p-2 ${
                        user.status === "Blocked"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {user.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
