import { useState, useEffect, useRef } from "react";
import logo from "../../assets/acier.jpeg";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
const Menu = () => {
  // Gestion de la position de la navbar lorsqu'on scrolle
  const [isSideMenuOpen, setMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { link: "Dashbord", path: "/dashbord" },
    { link: "Accueil", path: "/" },
    { link: "Acier", path: "/produit_acier" },
    { link: "GALVA", path: "/GALVA en stock" },
    { link: "Inox", path: "/inox" },
    { link: "Alu", path: "/alu" },
    { link: "Corten", path: "/corten" },
    { link: "Contacts", path: "/contacts" },
    { link: "Panier", path: "/panier" },
    { link: "Favoris", path: "/favoris" },
  ];

  return (
    <nav
      className={`flex justify-between w-full fixed transition-transform duration-700 z-40 px-8 items-end py-4 bg-primary ${
        visible ? "translate-y-0" : "-translate-y-full "
      }`}
    >
      <div className="flex items-center gap-8">
        <section className="flex items-center gap-4">
          {/* menu */}
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
          {/* logo */}

          <a href={"/"} className="text-2xl md:text-4xl font-mono flex">
            <img
              src={logo}
              alt="logo"
              className="h-7 md:h-10 w-7 md:w-10 rounded-full"
            />
            logo
          </a>
        </section>
        {navItems.map((d, i) => (
          <a
            key={i}
            className={`hidden lg:block text-black hover:text-gray-600 font-bold hover:no-underline `}
            href={d.path}
          >
            {d.link}
          </a>
        ))}
      </div>
      {/* sidebar mobile menu */}
      <div
        className={`fixed h-screen w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0 -translate-x-full z-[9999] transition-all duration-500
              ${isSideMenuOpen && "translate-x-0"}`}
      >
        <section className="text-black  flex-col absolute left-0 top-0 h-screen w-3/4 p-1 gap-8 z-50  flex bg-gray-100 py-2">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="mt-4 mb-2 text-3xl cursor-pointer ml-2 justify-end"
          />

          {navItems.map((d, i) => (
            <a
              key={i}
              className="font-bold border-b-2 px-8 border-gray-200 "
              href={d.path}
            >
              {d.link}
            </a>
          ))}
        </section>
      </div>
      {/* last section */}
      <section className="justify-end items-end gap-4 flex">
        <div className="space-x-3 flex items-end">
          <button className="bg-primary py-2 px-4 transition-all duration-300 rounded text-white hover:bg-green-700 hover:text-gray-800 font-serif shadow-xl">
            <a href="/login">
              <MdLogin />
            </a>
          </button>
          <button className="bg-primary py-2 px-4 transition-all duration-300 rounded text-white hover:bg-green-700 shadow-xl hover:text-gray-800 font-serif">
            <a href="/sign_up">
              <FaUser />
            </a>
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Menu;
