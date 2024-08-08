import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // read route params

  // fetch data

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: "Kpoin",
    description: "cek des",
  };
}

const page = () => {
  return <div>page</div>;
};

export default page;
