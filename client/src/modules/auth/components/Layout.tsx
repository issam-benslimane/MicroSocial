type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid place-items-center">
      <div className="min-w-[30rem] mx-auto [&>h1]:text-5xl [&>h1]:text-center [&>h1]:mb-8 [&>form]:flex [&>form]:flex-col [&>form]:gap-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
