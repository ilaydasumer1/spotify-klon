import { Menu } from "@headlessui/react";
import { Icon } from "../../icons";

function Auth() {
  const user = {
    name: "İlayda Sümer",
    avatar:"https://media.licdn.com/dms/image/D5603AQFLWqm7oYSnPg/profile-displayphoto-shrink_800_800/0/1692465295733?e=2147483647&v=beta&t=N6KhUI9OaNLXoBSAyfsLEJT87XTtX9bjwAj10DEbp94",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`ml-[62rem] flex  items-center h-8 rounded-3xl pr-2 ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              className={"w-8 h-8 rounded-full p-0.5 mr-2"}
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon size={16} name="downDir" />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Account
                  <Icon size={16} name="external" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
