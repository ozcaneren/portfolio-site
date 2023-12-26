import { HeadingDivider } from "@/components";
import Image from "next/image";

export default function Page() {
  return (
    <section className="py-8 md:py-10">
      <div className="flex justify-center items-center flex-col">
        <HeadingDivider title="Bookmarks" />
        <div className="flex justify-center items-center flex-col mt-16 px-6 md:px-0">
          <h1 className="font-semibold text-lg mb-2">Coming Soon</h1>
          <Image
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTlsZzJoZndpY2lwM2ozYXBjN3dyOTVxNWk5a3d3a3c1MzBiYzU3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MjLESi4pQjfgZFiIsj/source.gif"
            alt="Bookmarks"
            width={500}
            height={500}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
}
