import {useState} from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

import "./Header.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Lentes", current: false, isDropdown: true},
  { name: "Examen de la vista", href: "/examen-de-la-vista", current: false },
  { name: "Sucursales", href: "/sucursales", current: false },
  { name: "FAQ", href: "/faq", current: false },
];


export default function Header() {
 
const [openDropdown, setOpenDropdown] = useState(false); //to show/hide the dropdown menu when mouse on top 
const [hoverTimeout, setHoverTimeout] = useState(null);//ensures there is enough time for the user to select from dropdown
  return (
    <header>
      <Disclosure as="nav" className="header" aria-label="Main navigation" >

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
           <div className="relative flex h-16 items-center justify-center"> {/*-------------------this is hamburger div */}

              {/* Mobile menu button*/}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <a href="/" className="flex shrink-0 items-center logo-container">
                  <img 
                    alt="imagen del logo de optica"
                    src="/Images/logotest.png"
                    className="h-16 w-auto rounded-2xl border-gray-300 shadow"
                  />
                </a>
              <DisclosureButton 
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-open:block"
                  />
                </DisclosureButton>
            </div>

         
          </div>
        </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton key={item.name} as={NavLink} to={item.to}
                  className={classNames(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-black hover:bg-gray-700 hover:text-white"
                  )}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>

          
                {/* Desktop mode */}
        <div className="hidden sm:ml-6 sm:block">
       
          <div className="flex space-x-16">
          <a href="/" className="flex shrink-0 items-center logo-container ">
                  <img 
                    alt="imagen del logo de optica"
                    src="/Images/logotest.png"
                    className="h-16 w-auto rounded-2xl border-gray-300 shadow"
                  />
                </a>
            {navigation.map((item) => 
              item.isDropdown ?(
                <div  
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                  if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any existing timeout when entering
                      setOpenDropdown(true); // Open the dropdown
                    }}
                    onMouseLeave={() => {
                      setHoverTimeout(setTimeout(() => setOpenDropdown(false), 150));  // Close the dropdown after a delay
                    }}
                >
                  <button className="text-gray-300 hover:bg-white hover:text-black rounded-md px-3 py-2 text-lg font-medium"
                  >
                    {item.name}
                  </button>
                  {openDropdown && (
                    <div className="absolute mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <a 
                      href="/lentes-graduados"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                        Lentes graduados
                      </a>
                      <a 
                      href="/lentes-de-contacto"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                        Lentes de contacto
                      </a>
                      <a 
                      href="/lentes-de-sol"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                        Lentes de sol
                      </a>
                    </div>
                      )}
                </div>)
              :
                (<a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                      ? "bg-white text-black "
                      : "text-gray-300 hover:bg-white hover:text-black whitespace-nowrap",
                      "rounded-md px-3 py-2 text-lg font-medium"
                )}
                >
                  {item.name}
                </a>)                    
              )}   
              </div>                 
          </div>
      </Disclosure>
    </header>
  );
}