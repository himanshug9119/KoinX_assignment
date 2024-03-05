import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import "./header.css";
import logoImage from "../assets/logo1.png";
const Header = () => {
  return (
    <header className="bg-white p-4 pl-8 pr-8 flex items-center justify-between">
      {/* Logo */}
      <div className=" bg-white">
        <img src={logoImage} alt="logo" className="logo" />
      </div>

      {/* Responsive Menu for Mobile */}
      <div className="md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="text-black">
              {" "}
              {/* Change color to black */}
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.0119629 2.80613V0.521484H20.5738V2.80613H0.0119629ZM0.0119629 
                8.51805H20.5738V6.2334H0.0119629V8.51805ZM0.0119629 14.2299H20.5738V11.9452H0.0119629V14.2299Z"
                  fill="#0B182F"
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
              <div className="py-1 flex flex-col gap-2">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`text-gray-900 ${
                        active && "bg-gray-100 font"
                      }`}
                    >
                      Cryto Taxes
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`text-gray-900 ${
                        active && "bg-gray-100 font"
                      }`}
                    >
                      Free Tools
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`text-gray-900 ${
                        active && "bg-gray-100 font"
                      }`}
                    >
                      Resource Center
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`text-gray-900 ${
                        active && "bg-gray-100 font"
                      }`}
                    >
                      Get Started
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* Buttons (Hide on mobile) */}
      <div className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 gap-3 bg-white">
        <button className="text-black font ">Cryto Taxes</button>
        <button className="text-black font">Free Tools</button>
        <button className="text-black font">Resource Center</button>
        <button className="text-white bg-blue-700 p-1 rounded-md font">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
