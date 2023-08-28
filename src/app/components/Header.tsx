import Image from "next/image";
import utadarktheme from "../../../public/utadarktheme.png";
import VercelLogo from "../../../public/vercel.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <div className="text-4xl ml-3 mr-3 block text-center mx-auto">
       <Image
        src={utadarktheme}
        alt="pinecone-logo"
        width="80"
        height="64"
        className="mx-auto my-auto bg-gray-800 text-center object-center "></Image>
      <h1> Pinecone Starter</h1>
      <p className="text-sm  text-gray-400">Scrape a website, vectorize the data, and ask questions with GPT-4</p>
      </div>
      {/* <Image
        src={VercelLogo}
        alt="vercel-logo"
        width="160"
        height="50"
        className="mr-3 mt-3"
      /> */}
    </header>
  );
}
