"use client";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const { currentUser } = useAuthContext();
  let router = useRouter();
  useEffect(() => {
    currentUser && router.push("/movies");
  }, [currentUser]);

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="text-white text-center relative top-2/4 m-auto">
          <h1 className="text-5xl font-[900] text-center mb-3">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl font-[400] ">
            Watch anywhere. Cancel anytime.
          </p>
  
          <Link href="/register">
            <button className="btn-danger w-[250px]">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
