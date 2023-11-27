import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStarOfLife } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TbPhotoUp } from "react-icons/tb";
import { uploadImage } from "../utils/apiRequest";

const GenreImageUpload = ({
  genreImg,
  setGenreImage,
  setIsUploading,
  isUpdate,
}) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (imageFile) => {
    setImage(URL.createObjectURL(imageFile));

    const toastId = toast.loading("Image is uploading...");
    setIsUploading(true);

    const result = await uploadImage(imageFile);
    setIsUploading(false);

    if (result?.success) {
      setGenreImage(result.data.display_url);
      return toast.success("Image upload successful!", { id: toastId });
    }

    setImage(null);
    toast.error("Image upload failed! Please try again", { id: toastId });
  };

  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-dashed bg-[#F8F9FB]">
      {!image && !genreImg && (
        <label
          className="group flex h-full cursor-pointer flex-col items-center justify-center p-5 text-center"
          htmlFor="imageUrl"
        >
          <span className="text-3xl text-gray-400">
            <TbPhotoUp />
          </span>
          <p className="mb-1 mt-6 text-sm text-[#4d91ff] group-hover:underline">
            Click to upload image
            {!isUpdate && (
              <span className="ml-1 inline-block text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            )}
          </p>
          <span className="text-xs text-gray-400">( Less than 4 MB )</span>
          {isUpdate && (
            <p className="mt-5 text-sm text-red-400">
              PS: If you don't want to change the cover, don't select anything
            </p>
          )}
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        name="imageUrl"
        id="imageUrl"
        className="hidden"
        onChange={async (e) => {
          const imageFile = e.target?.files[0];
          if (!imageFile) return;

          if (imageFile.size > 4 * 1024 * 1024)
            return toast.error("Image size should be less than 4MB");

          return await handleImageUpload(imageFile);
        }}
      />
      {(image || genreImg) && (
        <div className="relative h-full w-full p-2">
          <img
            src={isUpdate ? genreImg || image : image}
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
          <button
            className="absolute right-3 top-3 rounded-md bg-white/90 p-1.5 text-xl text-red-500"
            onClick={() => {
              setImage(null);
              setGenreImage("");
            }}
          >
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default GenreImageUpload;
