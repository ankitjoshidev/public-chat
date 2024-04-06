"use client"
import { useState } from 'react';
import { signIn } from "next-auth/react";

export default function Home() {
  const [roomId, setRoomId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("google");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Join Room</h2>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Join
        </button>
      </form>
    </main>
  );
}
