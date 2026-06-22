import vedio from "../../assets/tractor_1.mp4";
export default function Hero() {
  const scrollToSection = () => {
    document.getElementById("next").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vedio}
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Scroll Down Button */}
      <button
        onClick={scrollToSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white text-3xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path d="M0 0h1024v1024H0z" fill="none" />
          <path
            fill="currentColor"
            d="M104.7 338.8a64 64 0 0 1 90.5 0L512 655.6l316.8-316.8a64 64 0 0 1 90.5 90.4l-362 362.1a64 64 0 0 1-90.5 0l-362.1-362a64 64 0 0 1 0-90.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path d="M0 0h1024v1024H0z" fill="none" />
          <path
            fill="currentColor"
            d="M104.7 338.8a64 64 0 0 1 90.5 0L512 655.6l316.8-316.8a64 64 0 0 1 90.5 90.4l-362 362.1a64 64 0 0 1-90.5 0l-362.1-362a64 64 0 0 1 0-90.5"
          />
        </svg>
      </button>
    </section>
  );
}
