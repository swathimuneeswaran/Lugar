import webDev from "../../assets/Web.mp4";
import DeveloperCarousel from "./DeveloperCarousel";

function WebDevelopment() {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.9; // Slow down the video (0.5x speed)
  //   }
  // }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          // ref={videoRef}
          src={webDev}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Empowering Web Development
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
            Team of exceptional web developers offering end-to-end Web Development
            Solutions for diverse industries.
          </p>

          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Your Journey
          </button>
        </div>
      </div>
      <DeveloperCarousel />
    </>
  );
}

export default WebDevelopment;
