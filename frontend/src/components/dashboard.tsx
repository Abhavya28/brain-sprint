"use client";

import { useUser } from "@clerk/nextjs";
import { h1 } from "framer-motion/client";
import Link from "next/link";
import { useState } from "react";
import StartQuizModal from "./modals/startQuizModal";

const Dashboard = () => {
  const recentQuizzes = [
    {
      category: "Science",
      score: "8/10",
    },
    {
      category: "History",
      score: "7/10",
    },
    {
      category: "Sports",
      score: "9/10",
    },
  ];

  const highScores = [
    {
      category: "Science",
      score: "10/10",
    },
    {
      category: "History",
      score: "9/10",
    },
    {
      category: "Sports",
      score: "10/10",
    },
  ];

  const { user } = useUser();
  console.log(user);

  const [isStartQuizModalOpen, setIsStartQuizModalOpen] = useState(false);

  const handleStartQuiz = () =>{
    setIsStartQuizModalOpen(true);
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

            <p className="text-slate-400 mt-2">
              Ready for your next challenge?
            </p>
          </div>

          <button onClick={handleStartQuiz} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
            Start Quiz
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mt-10">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-slate-400">Quizzes Played</h3>
            <p className="text-3xl font-bold mt-2">32</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-slate-400">Highest Score</h3>
            <p className="text-3xl font-bold mt-2">95%</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-slate-400">Categories Played</h3>
            <p className="text-3xl font-bold mt-2">10</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-slate-400">Average Score</h3>
            <p className="text-3xl font-bold mt-2">78%</p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {/* Recent Quizzes */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-5">Recent Quizzes</h2>

            <div className="space-y-4">
              {recentQuizzes.map((quiz) => (
                <div
                  key={quiz.category}
                  className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
                >
                  <span>{quiz.category}</span>

                  <span className="font-semibold text-blue-400">
                    {quiz.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full">
                <img
                  src={user?.imageUrl}
                  alt="profile"
                  className="w-24 h-24 rounded-full border-4 border-slate-700"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">
                {user?.fullName || user?.primaryEmailAddress?.emailAddress}
              </h3>
              <p className="text-slate-400"></p>
              <Link href="/profile">
                <button className="mt-5 border border-slate-700 px-5 py-2 rounded-lg hover:bg-slate-800 transition">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* High Scores */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-5">High Scores</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {highScores.map((item) => (
              <div key={item.category} className="bg-slate-800 rounded-xl p-4">
                <h3 className="font-semibold">{item.category}</h3>

                <p className="text-blue-400 mt-2">{item.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StartQuizModal
              isOpen={isStartQuizModalOpen}
              onClose={() => setIsStartQuizModalOpen(false)}
            />
    </section>
  );
};

export default Dashboard;
