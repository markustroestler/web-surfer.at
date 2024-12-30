import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Only set up the video once
    video.play().catch(error => {
      console.log('Video autoplay failed:', error);
    });

    // Prevent the video from restarting when the component re-renders
    video.currentTime = video.currentTime;

    // Optional: If you want the video to start from a random point each time
    // video.currentTime = Math.random() * video.duration;

    return () => {
      // Cleanup: pause the video when component unmounts
      video.pause();
    };
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/surf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}