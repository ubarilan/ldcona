/* This example requires Tailwind CSS v2.0+ */
import UserDropDownMenu from "@Components/UserDropDownMenu";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "@Lib/utils";

export default function Navbar({ user }) {
  const navigation = user
    ? [
        {
          name: "Calendar",
          href: "/teacherhome",
          current: window.location.pathname === "/teacherhome",
        },
        {
          name: "Team",
          href: "/team",
          current: window.location.pathname === "/team",
        },
      ]
    : [
        {
          name: "Login",
          href: "/login",
          current: window.location.pathname === "/login",
        },
        {
          name: "Team",
          href: "/team",
          current: window.location.pathname === "/team",
        },
      ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0  flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {user != null && (
                <div className="text-white">
                  <p>
                    Hello, <font className="font-bold">{user?.firstName}</font>
                  </p>
                </div>
              )}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user && <UserDropDownMenu user={user} />}
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="http://ld.amalnet.k12.il/wp-content/uploads/sites/36/2017/04/%D7%9C%D7%99%D7%99%D7%93%D7%99-%D7%93%D7%99%D7%99%D7%95%D7%99%D7%A1-%D7%AA%D7%90.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="http://ld.amalnet.k12.il/wp-content/uploads/sites/36/2017/04/%D7%9C%D7%99%D7%99%D7%93%D7%99-%D7%93%D7%99%D7%99%D7%95%D7%99%D7%A1-%D7%AA%D7%90.png"
                    alt="Workflow"
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
