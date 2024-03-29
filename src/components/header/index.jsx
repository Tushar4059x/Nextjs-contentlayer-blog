import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from "@/project files/Icons";
import Logo from "../logo";
import Link from "next/link";


export default function Header() {
  return (
    <div>
      <header className="w-full p-4 px-10 flex items-center justify-between">
        <Logo />
        <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center justify between fixed top-6 right-1/2 translate-x-1/2">
          <Link href="/" className="mr-2">Home</Link>
          <Link href="/about" className="mx-2">About</Link>
          <Link href="/contact" className="mr-2">Contact</Link>
          <button>
            <SunIcon></SunIcon>
          </button>
        </nav>
        <div>
          <a href="http://" className="inline-block w-6 h-6 mr-4">
            <GithubIcon className="hover:scale-125 transition-all ease duration-200"></GithubIcon>
          </a>
          <a href="http://" className="inline-block w-6 h-6 mr-4">
            <TwitterIcon className="hover:scale-125 transition-all ease duration-200"></TwitterIcon>
          </a>
          <a href="http://" className="inline-block w-6 h-6 mr-4">
            <LinkedinIcon className="hover:scale-125 transition-all ease duration-200"></LinkedinIcon>
          </a>
          {/* <a href="http://"></a> */}
        </div>
      </header>
    </div>
  );
}
