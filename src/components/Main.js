import React, { useRef, useState } from "react";
import main from "../assets/main-video.mp4";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";

const Main = () => {
  const [videoState, setVideoState] = useState(true);
  const videoRef = useRef();

  const handleVideo = () => {
    if (videoState) {
      videoRef.current.pause();
      setVideoState(!videoState);
    } else {
      videoRef.current.play();
      setVideoState(!videoState);
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[70vh]">
        <div
          id="overlay"
          className="w-[100vw] h-[70vh] absolute bg-black opacity-10"
        ></div>
        <div className="absolute text-white text-2xl sm:text-4xl w-[100%] h-[70%] flex justify-center items-center font-serif">
          <h1>Follow The Sun</h1>
        </div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          src={main}
          className="w-[100%] h-[100%] object-cover"
        ></video>
      </div>
      <div className="max-w-[1600px] m-auto border-b-2 py-10 px-2 sm:p-14">
        <div className="grid grid-cols-8">
          <div className="col-span-6 flex flex-col items-start px-1">
            <h1 className="text-md sm:text-2xl mb-4 font-semibold">
              Welcome to Cairo
            </h1>
            <p className="mr-6 sm:px-0 sm:pr-24 text-xs sm:text-sm text-justify">
              A city steeped in rich history, culture, and tradition. Located on
              the banks of the Nile River, Cairo is a vibrant metropolis that
              offers visitors a unique blend of ancient wonders and modern
              marvels.
            </p>
          </div>
          {videoState ? (
            <div
              onClick={handleVideo}
              className="self-start py-6 flex flex-col gap-1"
            >
              <IoCloseCircleOutline className="cursor-pointer" size={25} />
              <label
                className="cursor-pointer text-[11px] sm:text-xs"
                htmlFor="close-video"
              >
                Pause Video
              </label>
            </div>
          ) : (
            <div
              onClick={handleVideo}
              className="self-start py-6 flex flex-col gap-1"
            >
              <IoPlayCircleOutline className="cursor-pointer" size={25} />
              <label
                className="cursor-pointer text-[11px] sm:text-xs"
                htmlFor="close-video"
              >
                Play Video
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
