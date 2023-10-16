export const SideMenu = ({ children }) => {
  return (
    <div className="hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-72">
      <div className="bg-zinc-50 p-3">{children}</div>
    </div>
  );
};
