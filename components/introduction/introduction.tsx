import { Github, LinkedIn } from "@/assets";
import Link from "next/link";

export function Introduction() {
  return (
    <div className="top-0 flex max-h-screen flex-col justify-between pt-12 md:sticky md:h-screen md:w-auto md:py-24">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold tracking-tight text-slate-200 md:text-7xl">
          Jessica Fealy
        </h1>
        <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 md:text-3xl">
          Fullstack Software Engineer
        </h2>
        <h3 className="max-w-s mt-4 text-lg leading-normal text-slate-400 md:max-w-xs">
          Enjoy toying around with micro-processors, and web applications.
        </h3>
      </div>

      <div className="w-full justify-start space-x-12 pt-10">
        <Link
          aria-label="Github link"
          href="https://github.com/JeCFe"
          target="_blank"
        >
          <Github
            alt="Github logo"
            className="inline-block h-20 w-20 fill-pink-500"
          />
        </Link>
        <Link
          aria-label="LinkedIn link"
          href="https://uk.linkedin.com/in/jessicaclarafealy"
          target="_blank"
        >
          <LinkedIn
            alt="LinkedIn logo"
            className="inline-block h-20 w-20 fill-cyan-500"
          />
        </Link>
      </div>
    </div>
  );
}