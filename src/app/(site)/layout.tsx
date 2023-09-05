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
      <body className="max-w-3xl flex flex-col mx-auto min-h-screen font-mono bg-bg-color">
        <header className="flex items-center justify-between pt-7 px-4 md:px-0 lg:pt-14">
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
        
      <main className="py-1 flex-grow pb-10">{children}</main>
      <footer className="py-12 flex flex-col">
      <div className="container mx-auto flex items-center justify-between max-w-5xl px-4 md:px-0">
        <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/h%C3%A5kon-vadstein-186066186/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-256.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a href="https://github.com/HaaVad" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png" 
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
        </div>
        <div>
          <p className="text-gray-800 text-sm">
            &copy; {new Date().getFullYear()} Håkon Vadstein.
          </p>
        </div>
      </div>
    </footer>

      </body>
    </html>
  )
}
