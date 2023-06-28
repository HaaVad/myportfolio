import { Container } from "postcss";


export default async function Contact() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-2 md:px-24 py-10">
        <div className="w-full">
          <h1 className="text-5xl font-bold mb-6">Contact</h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-100 focus:ring-2 focus:ring-green-400"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                E-mail
              </label>
              <input
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400"
                placeholder="E-mail"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="topic" className="block text-gray-700 font-bold mb-2">
                Topic
              </label>
              <input
                id="topic"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400"
                placeholder="Topic"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400"
                rows={4}
                placeholder="Yes?"
              ></textarea>
            </div>
            <button className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap
                hover:bg-green-600 hover:text-green-100 transition">
              Submit
            </button>
          </form>
        </div>
    
        </main>
    )
}