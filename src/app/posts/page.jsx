"use client";
import Layout from "../(layout)/layout";
import PostDetails from "./PostDetails";
import React, { useState } from "react";
import NewPost from "./NewPost";

const Posts = () => {
  const [imageURLs, setImageURLs] = useState([]);

  const handleFileSelected = (url) => {
    // Add the new URL to the existing array
    setImageURLs((prevImageURLs) => [...prevImageURLs, url]);
  };

  const style = "mb-10 pt-10 pl-9";

  return (
    <>
      <Layout>
        <div className="bg-gray-100 h-[calc(100vh-10vh)]">
          <div className="absolute right-10">
            <NewPost onFileSelected={handleFileSelected} />
          </div>
          <PostDetails style={style} imageURLs={imageURLs} />
        </div>
      </Layout>
    </>
  );
};

export default Posts;
