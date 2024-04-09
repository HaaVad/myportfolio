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
        <header className="relative flex items-center justify-between pb-1 lg:pb-2 pt-5 px-4 lg:px-0 lg:-mx-4 lg:pt-6">
          <Link
          href="/"
          className="font-bold"
          >
          Håkon.
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
          <Link
              href="/contact" className="hover:text-gray-300">
                Contact
              </Link>

            {pages.map((page)=> (
              <Link key={page._id}
              href={`/${page.slug}`} className="hover:text-gray-300">
                {page.title}
              </Link>
            ))}
          </div>
          <div className={`absolute left-0 right-0 bottom-0 md:h-px mb-1 opacity-50 md:bg-black md:-mx-4 lg:-mx-10`}></div>
        </header>
        
      <main className="py-2 flex-grow pb-10">{children}</main>
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
