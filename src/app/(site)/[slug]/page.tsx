import { PortableText } from "@portabletext/react";
import { getPage } from "../../../../sanity/sanity-utils";

type Props = { 
    params: { slug : string }
}

export default async function Page ({params}: Props) {
    const page = await getPage(params.slug);

    return (

        <div>
            <h1 className="text-2xl drop-shadow font-extrabold py-4 px-4 md:px-2 md:text-5xl">
                {page.title}
            </h1> 

            <div className="text-sm text-gray-700 px-4 md:px-2 md:text-lg">
                <PortableText value={page.content} />
            </div>
        </div>
    )
}