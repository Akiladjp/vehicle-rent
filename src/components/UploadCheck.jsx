import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UploadCheck = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const upload = () => {
    if (!file) {
      toast.error("Please select a file first."); // Toast notification for error
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    setError("");
    axios
      .post("http://localhost:3001/uploadImage", formData)
      .then((res) => {
        setSuccess(true);
        toast.success("File uploaded successfully!"); // Toast notification for success
        setUploading(false);
      })
      .catch((err) => {
        toast.error("Upload failed. Please try again."); // Toast notification for error
        setUploading(false);
        console.log("Upload error frontend", err);
      });
  };

  return (
    <div className="upload-check">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={upload}
        disabled={uploading}
        className={`btn ${
          uploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      <ToastContainer />
    </div>
  );
};
