'use client'
import { useState } from "react";

export function AboutMe() {
  const [bio, setBio] = useState("I’m a software developer passionate about creating web experiences.");
  const [editing, setEditing] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      {editing ? (
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      ) : (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{bio}</p>
      )}
      <button
        onClick={() => setEditing(!editing)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
}