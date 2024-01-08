"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosAlarm } from "react-icons/io";
import "../globals.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
} from "@mui/material";
import Link from "next/link";

const PostDetails = ({ style, tableStyle, imageURLs, onAddImage }) => {
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
      comments: [
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Nabeel", date: "17 December 2023", comment: "cool" },
        { userName: "Shahbaz", date: "1 week before", comment: "heavy" },
      ],
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
      comments: [
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },

        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Arqum", date: "10:00 a.m", comment: "good" },
        { userName: "Faisal", date: "10:00 a.m", comment: "excellent" },
        { userName: "Nabeel", date: "17 December 2023", comment: "cool" },
        { userName: "Shahbaz", date: "1 week before", comment: "heavy" },
      ],
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
      comments: [
        { userName: "Afaq", date: "10:00 a.m", comment: "awesome" },
        { userName: "Nabeel", date: "17 December 2023", comment: "cool" },
        { userName: "Shahbaz", date: "1 week before", comment: "heavy" },
      ],
      date: Date(),
    },
  ];
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [updatedAdminPosts, setUpdatedAdminPosts] = useState(adminPosts);
  const [showAddButton, setShowAddButton] = useState(true);

  const handleClickNextPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex + 1) % selectedPost.postLink.length
    );
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
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

  const handleAddImage = () => {
    const newPost = {
      id: updatedAdminPosts.length + 1,
      title: `New Post ${updatedAdminPosts.length + 1}`,
      content: "Content for the new post",
      likes: 0,
      postLink: imageURLs,
      postType: "Image",
      postTag: "New Tag",
      comments: [],
      date: Date(),
    };

    setUpdatedAdminPosts([...updatedAdminPosts, newPost]);
  };

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
    <>
      {/* <div className=" mt-5 absolute right-48 top-20">
        {showAddButton && (
          <Button
            variant="contained"
            color="primary"
            className="bg-[#1565C0] mt-2 p-3"
            onClick={handleAddImage}
          >
            Add Images to Admin Posts
          </Button>
        )}
      </div> */}
      <h2 className={`text-2xl font-bold  ${style}`}>Admin Posts</h2>
      <div className="bg-white p-6 w-[90vw] lg:w-[80vw] md:w-[70vw]  mx-auto rounded-lg shadow-md overflow-y-auto max-h-96 no-scrollbar">
        <div className={`overflow-y-auto ${tableStyle} `}>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">#</th>
                <th className="border border-gray-300 p-2">Post Type</th>
                <th className="border border-gray-300 p-2">Post Tag</th>
                <th className="border border-gray-300 p-2">Uploaded Since</th>
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
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">
                    {post.postType}
                  </td>
                  <td className="border border-gray-300 p-2">{post.postTag}</td>
                  <td className="border border-gray-300 p-2">
                    {post.uploadedSince}
                  </td>
                  <td className="border border-gray-300 p-2">{post.likes}</td>
                  <td className="border border-gray-300 p-2">
                    {post.comments.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Post Pop-up Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        className="!overflow-hidden"
      >
        <DialogTitle id="responsive-dialog-title">Post Details</DialogTitle>
        <DialogContent>
          {selectedPost && (
            <div className="flex">
              <div className="flex-none block overflow-hidden whitespace-nowrap">
                {selectedPost.postType === "Image" &&
                  selectedPost.postLink.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Post ${index + 1}`}
                      className={`mb-4 w-[25vw] !h-[370px] border fixed  border-black inline-block ${
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
                      className={`mb-4 w-[25vw] !h-[370px] fixed inline-block ${
                        index1 === currentVideoIndex ? "" : "hidden"
                      }`}
                      controls
                    />
                  ))}
              </div>

              <div className="ml-[23rem]">
                <span className="absolute right-10 ">
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

                <div className="mb-4 fixed">
                  {selectedPost.postType === "Image" &&
                    selectedPost.postLink.length > 1 && (
                      <Button
                        variant="outlined"
                        color="primary"
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
                        onClick={handleClickNextVideo}
                      >
                        Next Video
                      </Button>
                    )}
                </div>
                <div className="fixed !mt-12">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="bg-[#7b1fa2]"
                    onClick={() => handleRemovePost(selectedPost.id)}
                  >
                    Remove Post
                  </Button>
                </div>
                <div className="mt-24">
                  <p className="fixed">{selectedPost.content}</p>
                  <p className="fixed mt-8">
                    <strong>Likes:</strong> {selectedPost.likes}
                  </p>
                  <p className="pt-14 fixed">
                    <strong className="">Comments:</strong>{" "}
                  </p>
                  <div className="pt-20 w-40 h-56">
                    {selectedPost.comments.map((comment, index) => (
                      <span key={index} className="flex flex-col overflow-auto">
                        <Link
                          href="/user/2"
                          className="text-[10px] font-bold text-[#899999]"
                        >
                          {`${comment.userName}:`}
                        </Link>
                        <span>
                          <span className="text-[13px] font-bold -mt-4">
                            {` ${comment.comment} `}
                          </span>
                          <span className="text-[8px] font-extralight ml-[20%] text-black">
                            {`${comment.date}`}
                          </span>
                          {index < selectedPost.comments.length - 1 ? "\n" : ""}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PostDetails;
