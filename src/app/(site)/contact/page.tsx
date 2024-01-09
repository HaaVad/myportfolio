import ContactForm from "../components/contactForm"

export default async function Contact() {

    return (
        <main className="">
        <div className="w-full">
        <h1 className="text-2xl drop-shadow font-extrabold py-4 px-4 md:px-2 md:text-5xl">
                Contact
        </h1> 
        <p></p>
          <ContactForm />
          
        </div>
        </main>
    )
}