import React from "react";
import Layout from "../(layout)/layout";
import UserDetails from "./UserDetails";

const Users = () => {
  const style = "mb-10 pt-10 pl-9";
  return (
    <Layout>
      <div className={`bg-gray-100 h-[calc(100vh-10vh)]`}>
        <UserDetails style={style} />
      </div>
    </Layout>
  );
};

export default Users;
