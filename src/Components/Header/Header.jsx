import {useState} from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Header.css";
import React from "react";

const navigation = [
  { name: "Lentes", current: false, isDropdown: true},
  { name: "Examen de la vista", href: "/examen-de-la-vista", current: false },
  { name: "Sucursales", href: "/sucursales", current: false },
  { name: "FAQ", href: "/faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  const [openDropdown, setOpenDropdown] = useState(false); //to show/hide the dropdown menu when mouse on top 
  const [hoverTimeout, setHoverTimeout] = useState(null);

  return (
    <header>
      <nav aria-label="Main navigation">
        <Disclosure as="nav" className="header">
        {({ open }) => (
            <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>

              {/* Mobile Panel */}
              <DisclosurePanel className="sm:hidden">
            <div className={`sm:hidden ${open ? "block" : "hidden"} space-y-1 px-2 pb-3 pt-2`}>
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-white hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>


              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/" className="flex shrink-0 items-center logo-container">
                  <img 
                    alt="switechai logo"
                    src="/Images/logotest.png"
      
                  />
                </a>

                {/* Desktop mode */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-16">
                    {navigation.map((item) => 
                    item.isDropdown ?
                    (
                    <div  
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (hoverTimeout) clearTimeout(hoverTimeout);  // Clear any existing timeout when entering
                      setOpenDropdown(true);  // Open the dropdown
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
                    </div>
                    )
                    :
                    (<a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-white text-black"
                            : "text-gray-300 hover:bg-white hover:text-black",
                          "rounded-md px-3 py-2 text-lg font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    )                    
                    )}                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              </div>
            </div>
          </div>

          </>
          )}

        </Disclosure>
      </nav>
    </header>
  );
}
