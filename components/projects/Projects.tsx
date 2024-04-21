import { Anchor } from "@jecfe/react-design-system";

import { projectData } from "@/data";
import { PageId, Pill } from "..";
import { Code, OpenWeb } from "@/assets";
import Link from "next/link";
import { cva } from "class-variance-authority";

const links = cva(
  "inline-block h-8 w-8 fill-blue-500 transition duration-200 ease-in-out hover:fill-blue-900",
);

const customOrder = ["web", "git"]; // Desired order

function compareString(a: ProjectLink, b: ProjectLink) {
  const indexA = customOrder.indexOf(a.type);
  const indexB = customOrder.indexOf(b.type);
  if (indexA === -1 || indexB === -1) {
    return 0;
  }
  return indexA - indexB;
}

type ProjectLink = {
  href: string;
  type: string;
};

type Props = {
  heading: string;
  link: ProjectLink[];
  date: string;
  description: string;
  pills?: string[];
};

export function Project({ id }: { id: PageId }) {
  return (
    <div className="mt-14 flex flex-col" id={id}>
      <h2 className="w-full pb-4 text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        Projects
      </h2>
      <div className="space-y-8 md:space-y-2">
        {projectData.map((x, i) => (
          <ProjectBox {...x} key={`${x.heading}-${i}`} />
        ))}
      </div>
    </div>
  );
}

function ProjectBox({ heading, link, date, description, pills }: Props) {
  return (
    <div className="z-10 rounded-xl transition-colors duration-300 ease-in-out md:p-8 md:hover:bg-slate-800/70 md:hover:shadow-xl">
      <div className="flex flex-row">
        <h2 className="text-2xl font-medium tracking-tight text-slate-200">
          {heading}
        </h2>
        <div className="flex flex-grow" />

        <div className="flex space-x-2 text-right text-2xl font-medium tracking-tight">
          {link.sort(compareString).map((x, i) => (
            <Link href={x.href} target="_blank">
              {x.type === "git" && <Code className={links()} />}
              {x.type === "web" && <OpenWeb className={links()} />}
            </Link>
          ))}
        </div>
      </div>

      <h3 className="text-sm leading-normal text-slate-400">{date}</h3>

      <p className="my-4 leading-normal text-slate-400">{description}</p>
      <div className="pointer-events-none flex flex-wrap gap-2">
        {pills?.map((x, i) => <Pill key={`${x}-${i}`}>{x}</Pill>)}
      </div>
    </div>
  );
}