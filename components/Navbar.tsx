import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Navbar = () => {
  const [activeItem, setactiveItem] = useState<string>("");

  const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
  }> = ({ activeItem, name, route, setActiveItem }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className="hover:text-green">{name}</span>
        </a>
      </Link>
    ) : null;
  };

  const { pathname } = useRouter();

  useEffect(() => {
    //url den direk olarak sayfaya gidince acilan tab i nav barda gostermemek icin istek atilan sayfa hangisi iste onut activeItem olarak set ediyoruz

    if (pathname === "/") setactiveItem("About");
    if (pathname === "/projects") setactiveItem("Projects");
    if (pathname === "/resume") setactiveItem("Resume");
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className="text-xl font-bold border-b-4 border-green text-green md:text-2xl">{activeItem}</span>
      <div className="flex space-x-3 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setactiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setactiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setactiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
