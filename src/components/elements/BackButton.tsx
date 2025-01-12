"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="mt-4 px-4 py-2 bg-yellow text-black font-semibold rounded shadow hover:bg-black hover:text-yellow"
    >
      Back
    </button>
  );
};

export default BackButton;
