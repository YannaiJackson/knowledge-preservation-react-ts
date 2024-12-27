/**
 * This file contains the main page component for the Wordle game.
 */

'use client';
import React, { useState, useEffect } from 'react';
import LoadingScreen from "@/components/LoadingScreen";
import ErrorScreen from "@/components/ErrorScreen";

/**
 * The main page component for the Wordle game.
 * Fetches a random word, handles game restarts, and displays the WordsGrid component.
 */
export default function Home() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);



  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <span> PHONE: +972 58 6922403 </span><br />
        <span> EMAIL: yannaismj@gmail.com </span><br />
        <span> LOCATION: Central Israel </span><br />
      </div>
    </div>
  );
}
