import Link from "next/link";

import { Profiles, Links } from "@/lib/constants";
import { NavigationLink } from "@/components/navigation-link";

export const MenuContent = () => {
  return (
    <div className="flex w-full h-screen flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <img
            src="https://avatars.githubusercontent.com/u/100240225?v=4"
            alt="Eren Ozcan"
            width={40}
            height={40}
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold">Eren Ozcan</span>
            <span className="text-gray-600">Software Developer</span>
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          {Links.map((link, index) => (
            <NavigationLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
          Social
        </span>
        <div className="flex flex-col gap-1">
          {Object.values(Profiles).map((profile) => (
            <NavigationLink
              key={profile.url}
              href={profile.url}
              label={profile.title}
              icon={profile.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
