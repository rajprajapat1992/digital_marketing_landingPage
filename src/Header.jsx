import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import prilient from './assets/Images/logo_white.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const scrollToServices = () => {
        const element = document.getElementById('contact-us');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'Website Design', href: '#', current: false },
        { name: 'Digital Marketing', href: '#', current: false },
        { name: 'SEO', href: '#', current: false },
        { name: 'Pricing', href: '#', current: false },
        { name: 'Contact Us', current: false, classNames: "py-2 px-5 text-white bg-pink-600 cursor-pointer", onClick: scrollToServices },
    ]
    return (
        <Disclosure as="nav" className="bg-gray-800" style={{position:'sticky', top:'0', zIndex:'10'}}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center sm:items-stretch justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src={prilient}
                                className="h-10 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={item.onClick}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-pink-500 hover:text-white active:scale-95',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                            item.classNames
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium block',
                                item.classNames
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
