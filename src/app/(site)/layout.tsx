import '../globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { getPages } from '../../../sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Håkon Vadstein',
  description: 'Made using next.js and sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-14 font-mono">
        <header className="flex items-center justify-between pl-1 pr-1">
          <Link
          href="/"
          className="font-bold"
          >
          Håkon.
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page)=> (
              <Link key={page._id}
              href={`/${page.slug}`} className="hover:text-gray-300">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        
      <main className="py-1">{children}</main>
        
      </body>
    </html>
  )
}
