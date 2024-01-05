import Layout from "../(layout)/layout";
import PostDetails from "./PostDetails";

const Posts = () => {
  const style = "mb-10 pt-10 pl-9";

  return (
    <>
      <Layout>
        <div className="bg-gray-100 h-[calc(100vh-10vh)]">
          <PostDetails style={style} />
        </div>
      </Layout>
    </>
  );
};

export default Posts;
