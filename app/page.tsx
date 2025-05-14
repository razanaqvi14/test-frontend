"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage("Error contacting backend");
      });
  }, []);

  return (
    <main>
      <h1>Next.js Frontend</h1>
      <p>{message}</p>
    </main>
  );
}
