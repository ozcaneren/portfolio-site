export function HeadingDivider({ title = "" }) {
  return (
    <header className="flex items-center">
      <h2 className="flex items-center font-extrabold text-2xl md:text-3xl relative w-full uppercase gap-4 bg-clip-text text-[#232332]">
        {title}
      </h2>
    </header>
  );
}
