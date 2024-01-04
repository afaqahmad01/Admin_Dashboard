"use client";
import Layout from "../(layout)/layout";
import React, { useState, useEffect, useRef } from "react";
import { IoIosAlarm } from "react-icons/io";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dashboard = () => {
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

  const adminPosts = [
    {
      id: 1,
      title: "Post 1",
      content: "Content for Post 1",
      likes: 20,
      postLink: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
      ],
      postType: "Image",
      comments: ["awesome", "cool", "heavy"],
      postTag: "Motivational",
      date: ["9:30 a.m.", "5:30 p.m."],
    },
    {
      id: 2,
      title: "Post 6",
      content: "Content for Post 6",
      likes: 20,
      postLink: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2X_u9Ca0-KMZ9JqYZp6lYd5cCvli0b8h1LnjhQyXRGfCn_cCL1GeZlq34a3ulITrfrM&usqp=CAU",
        "https://i.pinimg.com/736x/b9/92/53/b9925374893c2528579291644dc17313.jpg",
      ],
      postType: "Image",
      postTag: "Happy",
      comments: ["awesome", "cool", "heavy", "good", "excellent"],
      date: ["8:00 a.m", "5:30 p.m"],
    },
    {
      id: 3,
      title: "Post 7",
      content: "Content for Post 7",
      likes: 20,
      postLink: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
      postType: "Video",
      postTag: "Inspirational",
      comments: ["awesome", "cool", "heavy"],
      date: Date(),
    },
  ];

  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleClickNextPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex + 1) % selectedPost.postLink.length
    );
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Pause the video when the component unmounts or a new video is loaded
      return () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      };
    }
  }, []);

  const handleClickNextVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setCurrentVideoIndex(
      (prevIndex) => (prevIndex + 1) % selectedPost.postLink.length
    );
  };

  const [updatedAdminPosts, setUpdatedAdminPosts] = useState(adminPosts);

  const handleClickOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
    setCurrentPhotoIndex(0);
    setCurrentVideoIndex(0);
  };

  const handleRemovePost = (postId) => {
    setUpdatedAdminPosts(
      updatedAdminPosts.filter((post) => post.id !== postId)
    );
    setSelectedPost(null);
    setOpen(false);
  };
  const handleClose = () => {
    setSelectedPost(null);
    setOpen(false);
  };

  return (
    <Layout>
      <div className=" bg-gray-100 h-[calc(100vh-9vh)] -ml-2 -mt-2">
        <main className="flex-1 p-4">
          <div className="">
            <div className="grid grid-rows-2 gap-8">
              <div className="bg-white !overflow-x-auto p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Users</h2>
                <table className="min-w-full bg-white border border-gray-300">
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
                        <td className="border border-gray-300 p-2">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 p-2">
                          <Link
                            href={`/user/${user.id}`}
                            className="text-blue-500 hover:underline"
                          >
                            {user.username}
                          </Link>
                        </td>
                        <td className="border border-gray-300 p-2">
                          {user.email}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {user.posts}
                        </td>
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
              <div className="bg-white p-6 rounded-lg shadow-md overflow-auto max-h-96">
                <h2 className="text-xl font-bold mb-4">Admin Posts</h2>
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">#</th>
                      <th className="border border-gray-300 p-2">Post Type</th>
                      <th className="border border-gray-300 p-2">Post Tag</th>
                      <th className="border border-gray-300 p-2">
                        Uploaded Since
                      </th>
                      <th className="border border-gray-300 p-2">Likes</th>
                      <th className="border border-gray-300 p-2">Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updatedAdminPosts.map((post, index) => (
                      <tr
                        key={post.id}
                        onClick={() => handleClickOpen(post)}
                        className="cursor-pointer hover:bg-gray-100"
                      >
                        <td className="border border-gray-300 p-2">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {post.postType}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {post.postTag}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {post.uploadedSince}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {post.likes}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {post.comments.length}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Post Pop-up Dialog */}
              <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle id="responsive-dialog-title">
                  Post Details
                </DialogTitle>
                <DialogContent>
                  {selectedPost && (
                    <div className="flex">
                      <div className="w-96 overflow-x-auto flex-none whitespace-nowrap">
                        {selectedPost.postType === "Image" &&
                          selectedPost.postLink.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Post ${index + 1}`}
                              className={`mb-4 w-96 h-[600px] border border-black inline-block ${
                                index === currentPhotoIndex ? "" : "hidden"
                              }`}
                            />
                          ))}

                        {selectedPost.postType === "Video" &&
                          selectedPost.postLink.map((video, index1) => (
                            <video
                              key={index1}
                              ref={videoRef}
                              src={video}
                              alt={`Post ${index1 + 1}`}
                              className={`mb-4 w-96 h-[600px] border border-black inline-block ${
                                index1 === currentVideoIndex ? "" : "hidden"
                              }`}
                              controls
                            />
                          ))}
                      </div>

                      <div className="ml-5">
                        <div className="mb-4">
                          {selectedPost.postType === "Image" &&
                            selectedPost.postLink.length > 1 && (
                              <Button
                                variant="outlined"
                                color="primary"
                                className="w-full"
                                onClick={handleClickNextPhoto}
                              >
                                Next Photo
                              </Button>
                            )}
                          {selectedPost.postType === "Video" &&
                            selectedPost.postLink.length > 1 && (
                              <Button
                                variant="outlined"
                                color="primary"
                                className="w-full"
                                onClick={handleClickNextVideo}
                              >
                                Next Video
                              </Button>
                            )}
                        </div>
                        <Button
                          variant="contained"
                          color="secondary"
                          className="w-full"
                          onClick={() => handleRemovePost(selectedPost.id)}
                        >
                          Remove Post
                        </Button>
                        <span className="flex justify-end">
                          <Tooltip
                            title={`Reminder added on ${selectedPost.date}`}
                            arrow
                          >
                            <span
                              className="cursor-pointer hover:underline mt-10"
                              style={{ fontSize: "24px" }}
                            >
                              <IoIosAlarm />
                            </span>
                          </Tooltip>
                        </span>
                        <p>{selectedPost.content}</p>
                        <p>
                          <strong>Likes:</strong> {selectedPost.likes}
                        </p>
                        <p>
                          <strong>Comments:</strong>{" "}
                          {selectedPost.comments.join(`\n`)}
                        </p>
                      </div>
                    </div>
                  )}
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
