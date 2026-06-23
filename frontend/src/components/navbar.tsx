"use client";

import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">
        <a href="/">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Brain Sprint
          </h1>
        </a>

        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">
              {user?.firstName || user?.username}
            </span>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;