import React, { useState } from "react";
import { useImageDragAndDrop } from "../hooks/useImageDragAndDrop";
import { Tags } from "./Tags";
import { ClipLoader } from "react-spinners";

export const Card = ({ src, title, id, index, dragImage, tags }) => {
    const { ref, opacity } = useImageDragAndDrop("image", id, index, dragImage);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div ref={ref} style={{ opacity }} className="bg-[#e3f1f5] rounded overflow-hidden relative h-[25rem] flex justify-center items-center shadow-md">
                <>
                <ClipLoader size={50} color={"#123abc"} loading={!isImageLoaded} />
                    <img
                        src={src}
                        alt={title}
                        onLoad={handleImageLoad}
                        style={{ display: isImageLoaded ? "block" : "none" }}
                        className=""
                    />
                    <Tags tags={tags} />
                </>
        </div>
    );
};
