"use client"
import { useForm, ValidationError } from "@formspree/react";


export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqkrkren");

  if (state.succeeded) {
    return <p>Thanks for reaching out! I will get back to you shortly.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="email" className="text-sm font-semibold">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="name@domain.com"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Your message here"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 disabled:opacity-50"
        >
          Submit
        </button>

        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
