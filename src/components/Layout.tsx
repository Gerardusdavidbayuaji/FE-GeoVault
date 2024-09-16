import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <section className="bg-white h-screen w-full text-lg font-bold font-roboto flex flex-col">
      <div className="flex flex-grow min-h-0">{children}</div>
    </section>
  );
};

export default Layout;
