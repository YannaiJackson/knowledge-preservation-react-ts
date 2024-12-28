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
    <div className="bg-blue-300 h-screen w-screen">

    </div>
  );
}
