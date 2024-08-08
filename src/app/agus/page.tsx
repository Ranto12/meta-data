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
          url: `https://meta-data-8xd0knw75-ranto12s-projects.vercel.app/images/flower.jpg`
        },
        url: `https://meta-data-8xd0knw75-ranto12s-projects.vercel.app/`,
        locale: 'id-ID'
      },
  };
}

const page = () => {
  return <div>page</div>;
};

export default page;
