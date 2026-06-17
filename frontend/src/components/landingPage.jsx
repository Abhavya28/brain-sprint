"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const LandingPage = () => {

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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-8 lg:flex-row">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="mb-6 flex max-w-[320px] items-center gap-4 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm">
            <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
            <p>Explore Quizzes & Challenges</p>
          </div>

          <h1 className="text-6xl font-black leading-tight lg:text-8xl">
            Challenge
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Your Mind.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Explore quizzes across multiple categories, test your knowledge,
            and compete against yourself one question at a time.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/dashboard">
            <button
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Let's Begin →
            </button>
            </Link>

            <button className="rounded-xl border border-slate-700 px-8 py-4 transition hover:bg-slate-900">
              Learn More
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            {[
              { value: "10K+", label: "Questions" },
              { value: "10+", label: "Categories" },
              { value: "100+", label: "Challenges" },
            ].map((item) => (
              <div
                key={item.label}
                className="cursor-pointer transition duration-300 hover:-translate-y-2"
              >
                <h3 className="text-3xl font-bold">{item.value}</h3>
                <p className="text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-16 lg:mt-0"
        >
          <div className="relative h-[450px] w-[450px]">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-0 top-0 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl"
            >
              <p className="text-slate-400">Science Quiz</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute right-0 top-32 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl"
            >
              <p className="text-slate-400">History Quiz</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute bottom-0 left-24 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl"
            >
              <p className="text-slate-400">Sports Quiz</p>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 m-auto h-72 w-72 rounded-full border border-slate-700"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 m-auto h-96 w-96 rounded-full border border-slate-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;