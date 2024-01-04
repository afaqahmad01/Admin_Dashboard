import React from "react";
import Layout from "../(layout)/layout";

const Profile = () => {
  const adminDetails = {
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator",
    joinedSince: "Joined on January 1, 2022",
  };

  return (
    <Layout>
      <div className="bg-gray-100 h-[calc(100vh-10vh)]">
        <main className="flex-1 ">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-10 pt-2">Profile Page</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold mb-2">Admin Details</h2>
              <p>
                <strong>Name:</strong> {adminDetails.name}
              </p>
              <p>
                <strong>Email:</strong> {adminDetails.email}
              </p>
              <p>
                <strong>Role:</strong> {adminDetails.role}
              </p>
              <p>
                <strong>{adminDetails.joinedSince}</strong>
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Profile;
