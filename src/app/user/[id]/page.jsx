"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosAlarm } from "react-icons/io";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Layout from "@/app/(layout)/layout";

const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "user1",
      age: 25,
      gender: "Male",
      status: "Active",
      posts: [
        {
          id: 1,
          title: "Post 1",
          content: "Content for Post 1",
          likes: 20,
          postLink: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2X_u9Ca0-KMZ9JqYZp6lYd5cCvli0b8h1LnjhQyXRGfCn_cCL1GeZlq34a3ulITrfrM&usqp=CAU",
            "https://i.pinimg.com/736x/b9/92/53/b9925374893c2528579291644dc17313.jpg",
          ],
          postType: "Image",
          comments: ["awesome", "cool", "heavy"],
          date: Date(),
        },
        {
          id: 2,
          title: "Post 2",
          content: "Content for Post 2",
          likes: 20,
          postLink: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2X_u9Ca0-KMZ9JqYZp6lYd5cCvli0b8h1LnjhQyXRGfCn_cCL1GeZlq34a3ulITrfrM&usqp=CAU",
            "https://i.pinimg.com/736x/b9/92/53/b9925374893c2528579291644dc17313.jpg",
          ],
          postType: "Image",
          comments: ["awesome", "cool", "heavy"],
          date: Date(),
        },
        {
          id: 3,
          title: "Post 3",
          content: "Content for Post 3",
          likes: 20,
          postLink: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2X_u9Ca0-KMZ9JqYZp6lYd5cCvli0b8h1LnjhQyXRGfCn_cCL1GeZlq34a3ulITrfrM&usqp=CAU",
            "https://i.pinimg.com/736x/b9/92/53/b9925374893c2528579291644dc17313.jpg",
          ],
          postType: "Image",
          comments: ["awesome", "cool", "heavy"],
          date: Date(),
        },
      ],
    },
    {
      id: 2,
      username: "user2",
      age: 30,
      gender: "Female",
      status: "Blocked",
      posts: [
        {
          id: 4,
          title: "Post 4",
          content: "Content for Post 4",
          likes: 20,
          postLink: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2X_u9Ca0-KMZ9JqYZp6lYd5cCvli0b8h1LnjhQyXRGfCn_cCL1GeZlq34a3ulITrfrM&usqp=CAU",
            "https://i.pinimg.com/736x/b9/92/53/b9925374893c2528579291644dc17313.jpg",
          ],
          postType: "Image",
          comments: ["awesome", "cool", "heavy"],
          date: Date(),
        },
        {
          id: 5,
          title: "Post 5",
          content: "Content for Post 5",
          likes: 20,
          postLink: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2X_u9Ca0-KMZ9JqYZp6lYd5cCvli0b8h1LnjhQyXRGfCn_cCL1GeZlq34a3ulITrfrM&usqp=CAU",
            "https://i.pinimg.com/736x/b9/92/53/b9925374893c2528579291644dc17313.jpg",
          ],
          postType: "Image",
          comments: ["awesome", "cool", "heavy"],
          date: Date(),
        },
      ],
    },
    {
      id: 3,
      username: "user3",
      age: 19,
      gender: "Male",
      status: "Active",
      posts: [
        {
          id: 6,
          title: "Post 6",
          content: "Content for Post 6",
          likes: 20,
          postLink: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd-mchfk8QwVmNE4zW9gMRYoeXPyPi31Hbw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2X_u9Ca0-KMZ9JqYZp6lYd5cCvli0b8h1LnjhQyXRGfCn_cCL1GeZlq34a3ulITrfrM&usqp=CAU",
            "https://i.pinimg.com/736x/b9/92/53/b9925374893c2528579291644dc17313.jpg",
          ],
          postType: "Image",

          comments: ["awesome", "cool", "heavy"],
          date: ["8:00 a.m", "5:30 p.m"],
        },
        {
          id: 7,
          title: "Post 7",
          content: "Content for Post 7",
          likes: 20,
          postLink: [
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          ],
          postType: "Video",
          comments: ["awesome", "cool", "heavy"],
          date: Date(),
        },
      ],
    },
  ]);

  const location = usePathname();
  const userId = parseInt(location.split("/").pop(), 10);

  const [selectedUser, setSelectedUser] = useState(
    users.find((user) => user.id === userId)
  );
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);

  const [statusChangeMessage, setStatusChangeMessage] = useState(null);

  const handleToggleStatusWithMessage = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id
        ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
        : user
    );

    setUsers(updatedUsers);
    setSelectedUser((prevUser) => ({
      ...prevUser,
      status: prevUser.status === "Active" ? "Blocked" : "Active",
    }));

    setStatusChangeMessage(
      `User is now ${selectedUser.status === "Active" ? "Blocked" : "Active"}`
    );

    setTimeout(() => {
      setStatusChangeMessage(null);
    }, 500);
  };

  const handleClose = () => {
    setSelectedPost(null);
    setOpen(false);
  };

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

  const handleClickOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
    setCurrentPhotoIndex(0); // Reset the index when opening a new post
    setCurrentVideoIndex(0); // Reset the index when opening a new post
  };
  const handleStatusChangeDialogClose = () => {
    setStatusChangeMessage(null);
  };
  const handleRemovePost = (postId) => {
    // Remove post from selected user's posts array
    const updatedUsers = users.map((user) => ({
      ...user,
      posts: user.posts.filter((post) => post.id !== postId),
    }));

    // Find the selected post
    const removedPost = selectedUser.posts.find((post) => post.id === postId);

    // Remove the post from the user account
    const updatedSelectedUser = {
      ...selectedUser,
      posts: selectedUser.posts.filter((post) => post.id !== postId),
    };

    setUsers(updatedUsers);
    setSelectedUser(updatedSelectedUser);
    setSelectedPost(null);
    setOpen(false);
  };

  return (
    <Layout>
      <div className="flex h-[90vh]  bg-gray-100">
        <main className="flex-1 ">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Details</h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold mb-2">User Information</h2>
              <div className="flex justify-between">
                <div>
                  <p>
                    <strong>UserId:</strong> {selectedUser.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedUser.username}
                  </p>
                  <p>
                    <strong>Age:</strong> {selectedUser.age}
                  </p>
                  <p>
                    <strong>Gender:</strong> {selectedUser.gender}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedUser.status}
                  </p>
                  <p>
                    <strong>Number of Posts:</strong>{" "}
                    {selectedUser.posts.length}
                  </p>
                </div>
                {/* Block/Unblock Button */}
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor:
                      selectedUser.status === "Active" ? "red" : "green",
                    color: "white",
                  }}
                  className="w-28 h-16"
                  onClick={handleToggleStatusWithMessage}
                >
                  {selectedUser.status === "Active" ? "Block" : "Unblock"}
                </Button>
              </div>

              {/* Status Change Message */}
              {statusChangeMessage && (
                <Dialog
                  open={Boolean(statusChangeMessage)}
                  onClose={handleStatusChangeDialogClose}
                  fullWidth
                  maxWidth="sm"
                >
                  <DialogTitle>Status Change</DialogTitle>
                  <DialogContent>
                    <div>{statusChangeMessage}</div>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            {/* User Posts */}
            <div className="bg-white p-4 rounded-lg shadow-md overflow-y-auto max-h-[245px]">
              <h2 className="text-xl font-bold mb-4">User Posts</h2>
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
                  {selectedUser.posts.map((post, index) => (
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
                        {post.comments.join(",")}
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
                        {selectedPost.comments.join(",")}
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
        </main>
      </div>
    </Layout>
  );
};

export default User;
