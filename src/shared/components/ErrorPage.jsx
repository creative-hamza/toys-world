import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="relative flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Player
          src="https://assets2.lottiefiles.com/packages/lf20_suhe7qtm.json"
          className="player"
          loop
          autoplay
        />

        <Link
          to="/"
          className="absolute bottom-14 px-8 py-3 font-semibold rounded-full bg-blue-500 text-white text-xl my-4 "
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
