import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // read route params

  // fetch data

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: "kapok",
    description: "cek des",
    openGraph: {
        siteName: 'Kpokin',
        title: 'Kpokin',
        description:
          'Hanya di Kpokin, belanjaan kamu bisa ditukar dengan hadiah istimewa dan keuntungan menarik. Dapatkan ekstra benefit dengan kumpulkan poin belanja dan ajak teman/kerbat bergabung di Kpokin.',
        type: 'website',
        images: {
          type: 'image/jpg',
          url: `${process.env.NEXT_PUBLIC_URL}/images/flower.jpg`
        },
        url: `${process.env.NEXT_PUBLIC_URL}`,
        locale: 'id-ID'
      },
  };
}

const page = () => {
  return <div>page</div>;
};

export default page;
