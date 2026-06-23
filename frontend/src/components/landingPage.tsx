"use client";

import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useState } from "react";
import AuthModal from "./modals/AuthModal";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleBegin = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 py-12 md:px-8 lg:flex-row lg:py-0">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* <div className="mb-4 flex max-w-[320px] items-center gap-4 rounded-full border border-slate-800 bg-slate-900 px-4 py-4 text-sm">
            <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
            <p>Explore Quizzes & Challenges</p>
          </div> */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight lg:text-8xl">
            Challenge
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Your Mind.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-md sm:max-w-none">
            Explore quizzes across multiple categories, test your knowledge, and
            compete against yourself one question at a time.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button onClick={handleBegin} className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500">
                Let's Begin
              </button>

            <button className="w-full sm:w-auto rounded-xl border border-slate-700 px-8 py-4 transition hover:bg-slate-900">
              Learn More
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10">
            {[
              { value: "10K+", label: "Questions" },
              { value: "10+", label: "Categories" },
              { value: "100+", label: "Challenges" },
            ].map((item) => (
              <div
                key={item.label}
                className="cursor-pointer transition duration-300 hover:-translate-y-2 text-center lg:text-left"
              >
                <h3 className="text-2xl sm:text-3xl font-bold">{item.value}</h3>
                <p className="text-sm sm:text-base text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-16 lg:mt-0 w-full flex justify-center lg:w-auto"
        >
          <div className="relative h-[320px] w-[320px] sm:h-[450px] sm:w-[450px] flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-0 top-4 sm:top-0 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 backdrop-blur-xl z-20"
            >
              <p className="text-xs sm:text-base text-slate-400">
                Science Quiz
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute right-0 top-24 sm:top-32 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 backdrop-blur-xl z-20"
            >
              <p className="text-xs sm:text-base text-slate-400">
                History Quiz
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute bottom-4 sm:bottom-0 left-12 sm:left-24 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 backdrop-blur-xl z-20"
            >
              <p className="text-xs sm:text-base text-slate-400">Sports Quiz</p>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 m-auto h-52 w-52 sm:h-72 sm:w-72 rounded-full border border-slate-700"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 m-auto h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-slate-800"
            />
          </div>
        </motion.div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </section>
  );
};

export default LandingPage;
