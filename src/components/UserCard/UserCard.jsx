import React from "react";

function UserCard({ user }) {
  console.log(user);
  const { email, githubId, linkedIn, name, portfolio, twitter } = user;
  return (
    <div className="bg-gray-900 p-2 rounded-lg w-80 m-2">
      <div className="flex items-center py-1 w-full">
        <p className="w-20">User:</p>
        <p className="flex-grow">{name}</p>
      </div>
      <div className="flex items-center py-1 w-full">
        <p className="w-20">Email:</p>
        <p className="flex-grow">{email}</p>
      </div>
      <div className="flex items-center py-1 w-full">
        <p className="w-20">GithubId:</p>
        <p className="flex-grow">{githubId || "No Entry Found"}</p>
      </div>
      <div className="flex items-center py-1 w-full">
        <p className="w-20">Portfolio:</p>
        <p className="flex-grow">{portfolio || "No Entry Found"}</p>
      </div>
    </div>
  );
}

export { UserCard };
