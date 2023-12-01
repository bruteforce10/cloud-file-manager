import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function login() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div
      className="flex justify-center 
    items-center h-screen  flex-col gap-6"
    >
      <Image src="/logo.png" alt="logo" width={200} height={100} />
      <button className=" text-white" onClick={() => signIn("google")}>
        <Image src="/google.png" alt="google" width={300} height={300} />
      </button>
    </div>
  );
}
