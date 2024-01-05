import Layout from "../(layout)/layout";
import UserDetails from "../users/UserDetails";
import PostDetails from "../posts/PostDetails";
import "../globals.css";
const Dashboard = () => {
  const userStyle = "pl-7 mb-3";
  const tableStyle = "max-h-[180px] no-scrollbar";
  const postStyle = " pt-3 pl-7 mb-3";

  return (
    <Layout>
      <div className=" bg-gray-100 h-[calc(100vh-9vh)] -ml-2 -mt-2">
        <main className="flex-1 p-4">
          <div className="flex flex-col gap-3">
            <UserDetails style={userStyle} tableStyle={tableStyle} />
            <PostDetails style={postStyle} tableStyle={tableStyle} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
