import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
        title: 'KPoin',
        description:
          'Hanya di KPoin, belanjaan kamu bisa ditukar dengan hadiah istimewa dan keuntungan menarik. Dapatkan ekstra benefit dengan kumpulkan poin belanja dan ajak teman/kerbat bergabung di KPoin.',
        openGraph: {
          siteName: 'KPoin',
          title: 'KPoin',
          description:
            'Hanya di KPoin, belanjaan kamu bisa ditukar dengan hadiah istimewa dan keuntungan menarik. Dapatkan ekstra benefit dengan kumpulkan poin belanja dan ajak teman/kerbat bergabung di KPoin.',
          type: 'website',
          images: {
            type: 'image/png',
            url: `${process.env.NEXT_PUBLIC_URL}/images/brands/kpoin.png`
          },
          url: `${process.env.NEXT_PUBLIC_URL}`,
          locale: 'id-ID'
        }
      };

const page = () => {
  return (
    <div>page</div>
  )
}

export default page