"use client";

import React, { useState } from "react";
import Modal from "react-modal";

const NewPost = ({ onFileSelected }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);

    // If a file is selected, pass its URL to the parent component
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onFileSelected(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }

    // Clear the selected file and preview when the modal is closed
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Display a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white p-4 mb-2  w-min rounded-lg shadow-lg">
        <button onClick={openModal}>NewPost</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Image or Video"
        style={{
          content: {
            width: "50%",
            height: "80%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2 className="text-2xl">Add Image or Video</h2>
        <input type="file" onChange={handleFileChange} />
        {previewUrl && (
          <div className="mt-2">
            <img src={previewUrl} alt="Preview" className="w-96 h-96" />
          </div>
        )}
        <br />
        <button
          onClick={closeModal}
          className="bg-red-700 p-3 rounded-lg absolute bottom-6 right-10"
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default NewPost;
