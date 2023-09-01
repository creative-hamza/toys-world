
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import Headroom from 'react-headroom'




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Headroom>
    <Disclosure as="nav" className="bg-gradient-to-r from-[#DDE9FD]">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="relative flex    items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  items-center justify-center  ">
          
              <div className="flex items-center justify-center ml-12 md:mr-20">
            <img className="w-16" src="https://i.ibb.co/n3W03RF/pp.png" alt="toy" />
            <Link
              to="/"
              className=" text-transparent  bg-clip-text font-extrabold text-xl md:text-4xl
              bg-gradient-to-br from-black via-blue-400 to-blue-600
              "
            >
              Toys World
            </Link>
          </div>
                <div className="hidden sm:ml-6 sm:block">
                <ul className="menu menu-horizontal px-1 font-bold text-xl space-x-6">
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900 underline " : "text-blue-600 link link-hover"
                }
                to="/"
              >
                Home
              </NavLink>
            </div>
            
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                }
                to="/blog"
              >
                {" "}
                Blog
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                }
                to="/all"
              >
                {" "}
                All toys
              </NavLink>
            </div>
            <div>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900 underline pb-5" : "text-blue-600 link link-hover"
                  }
                  to="/my"
                >
                  {" "}
                  My toys
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <div>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                  }
                  to="/add"
                >
                  {" "}
                  Add a toy
                </NavLink>
              ) : (
                ""
              )}
            </div>
          </ul>

                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                {/* Profile dropdown */}
                <div className="md:flex-none">
            {user ? (
              <div className="flex items-center">
                <div
                  className="relative mr-3 w-10 rounded-full tooltip tooltip-left "
                  data-tip={user?.displayName}
                >
                  <img className="rounded-full" src={user?.photoURL} />
                </div>
                <button 
                id='logout'
                  onClick={handleLogOut}
                  className="logout-btn btn btn-outline btn-sm mr-5"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline btn-sm mr-5">
                Login
              </Link>
            )}
          </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
          <ul className=" px-1 font-bold text-xl absolute bg-[#DDE9FD] text-center w-full">
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                }
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                }
                to="/blog"
              >
                {" "}
                Blog
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                }
                to="/all"
              >
                {" "}
                All toys
              </NavLink>
            </div>
            <div>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                  }
                  to="/my"
                >
                  {" "}
                  My toys
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <div>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900 underline" : "text-blue-600 link link-hover"
                  }
                  to="/add"
                >
                  {" "}
                  Add a toy
                </NavLink>
              ) : (
                ""
              )}
            </div>
          </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </Headroom>
  )
}
export default Navbar;
