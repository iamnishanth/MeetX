import { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";
import Controls from "./Controls";

const VideoContainer = () => {
  const { callAccepted, myVideo, userVideo, callEnded, stream } =
    useContext(SocketContext);

  return (
    <main className="h-full w-full flex flex-col md:flex-row items-center justify-center relative bg-gray-900">
      {stream && (
        <div
          className={`${
            callAccepted && "absolute w-40 right-2 bottom-20 md:static"
          } md:h-full md:w-full bg-black rounded-md`}
        >
          <video
            className="h-full w-full object-cover rounded-lg md:rounded-none"
            muted
            playsInline
            ref={myVideo}
            autoPlay
          />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="h-full w-full bg-black rounded-lg">
          <video
            className="h-full w-full object-cover"
            playsInline
            ref={userVideo}
            autoPlay
          />
        </div>
      )}
      {stream && <Controls myVideo={myVideo} />}
    </main>
  );
};

export default VideoContainer;
