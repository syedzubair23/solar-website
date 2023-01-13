import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '/about'},
  { name: 'Calculator', href: '/calculator' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show" className="relative z-40">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${open ? "bg-[#041014]" : "bg-none"}`}>
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Link to='/' className="pr-2">
                    <img
                      className="block h-8 w-auto"
                      src="./images/szsolar-logo.svg"
                      alt="SZSolar"
                    />
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="text-gray-300 hover:bg-gray-700 hover:text-[#9FE221] px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden absolute left-0 right-0 z-40 bg-[#041014]">
              <div className="pt-2 pb-32 divide-y-2 divide-white/5">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-[#9FE221] block px-3 py-6 text-center text-6xl font-fjalla_one font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </motion.div>
  )
}