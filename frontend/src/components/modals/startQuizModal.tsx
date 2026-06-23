"use client";

import { ModalProps } from "@/src/types";
import { useState } from "react";


const StartQuizModal = ({ isOpen, onClose }: ModalProps) => {
    const [category, setCategory] = useState<number>(17);
    const [difficulty, setDifficulty] = useState<string>("easy");

    if (!isOpen) return null;

    const handleStart = () => {
        console.log(category, difficulty);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
            <div className="relative w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900/95 p-8 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-white"
                >
                    ✕
                </button>

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Start New Quiz
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Choose your category and difficulty level
                    </p>
                </div>

                <div className="mt-8 space-y-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Category
                        </label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(Number(e.target.value))}
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        >
                            <option value="17">Science & Nature</option>
                            <option value="21">Sports</option>
                            <option value="9">General Knowledge</option>
                            <option value="27">Animals</option>
                            <option value="19">Mathematics</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Difficulty
                        </label>

                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <button
                        onClick={handleStart}
                        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartQuizModal;