"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import { useState } from "react";

type AuthModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [mode, setMode] = useState("signin");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-md rounded-3xl bg-slate-900 p-6 border border-slate-800">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-slate-400"
                >
                    ✕
                </button>

                <div className="flex mb-6 bg-slate-800 rounded-xl p-1">
                    <button
                        onClick={() => setMode("signin")}
                        className={`flex-1 py-2 rounded-lg ${mode === "signin"
                                ? "bg-blue-600 text-white"
                                : "text-slate-400"
                            }`}
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() => setMode("signup")}
                        className={`flex-1 py-2 rounded-lg ${mode === "signup"
                                ? "bg-blue-600 text-white"
                                : "text-slate-400"
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {mode === "signin" ? (
                    <SignIn routing="hash" />
                ) : (
                    <SignUp routing="hash" />
                )}
            </div>
        </div>
    );
};

export default AuthModal;