import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { TbPhotoUp } from "react-icons/tb";
import { uploadImage } from "../utils/apiRequest";

const BookImageUpload = ({
  register,
  setCoverImg,
  setIsUploading,
  isUpdate,
}) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    const toastId = toast.loading("Image is uploading...");
    setIsUploading(true);

    const result = await uploadImage(e.target.files[0]);
    setIsUploading(false);

    if (result?.success) {
      setCoverImg(result.data.display_url);
      return toast.success("Image upload successful!", { id: toastId });
    }

    toast.error("Image upload failed! Please try again", { id: toastId });
  };

  return (
    <div className="aspect-[5/6] w-[240px] overflow-hidden rounded-lg border-2 border-dashed bg-[#F8F9FB]">
      {!image && (
        <label
          className="group flex h-full cursor-pointer flex-col items-center justify-center gap-5 p-5"
          htmlFor="coverImg"
        >
          <span className="text-3xl text-gray-400">
            <TbPhotoUp />
          </span>
          <p className="text-sm text-[#4d91ff] group-hover:underline">
            Click to upload image
          </p>
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        hidden
        id="coverImg"
        required={!isUpdate}
        onChange={(e) => {
          setImage(URL.createObjectURL(e.target.files[0]));
          // console.log(e.target.files[0]);
        }}
      />
      {image && (
        <div className="relative h-full w-full p-2">
          <img
            src={image}
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
          <button
            className="absolute right-3 top-3 rounded-md bg-white/90 p-1.5 text-xl text-red-500"
            onClick={() => {
              setImage(null);
              setCoverImg("");
            }}
          >
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default BookImageUpload;
