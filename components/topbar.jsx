'use client'

import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar, TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { HiBell, HiMail, HiMenu, HiOutlineCheck, HiOutlineExclamation, HiOutlineInformationCircle, HiOutlineX, HiSearch } from "react-icons/hi";

export default function Topbar({ toogleLeftBar }) {
    return (
        <Navbar fluid={true} rounded={false} className="fixed w-full z-20 top-0 left-0 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">

            <Navbar.Brand>
                <button onClick={() => toogleLeftBar()} className="mr-2 visible md:collapse text-gray-600 hover:bg-gray-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-slate-800 dark:text-gray-200 ">
                    <HiMenu className="h-6 w-6" />
                </button>
                {/*<Image width={48} height={48} src="/../public/logo.png" className="mr-3" alt="Flowbite Logo" />*/}
                <img src="logo.png" alt="logo" className="w-12 mr-3"/>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowy
                </span>
            </Navbar.Brand>

            <div>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <div className="mt-2">
                    <TextInput rightIcon={HiSearch} placeholder="Search ..." />
                </div>
                <div className="flex justify-evenly mt-2">
                    <div>
                        <Dropdown arrowIcon={false} inline={true} className="dark:bg-slate-900" label={
                            <div className="text-gray-500 bg-slate-100 hover:bg-slate-300 font-medium rounded-xl text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-400">
                                <HiMail className="h-5 w-5" />
                                <div className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 dark:bg-red-700 border-2 border-white rounded-full dark:border-slate-600" style={{ marginTop: '-12px', marginRight: '-8px' }}>
                                    5
                                </div>
                            </div>
                        }>

                            <Dropdown.Header>
                                <span className="block text-sm font-bold text-center">
                                    Messages
                                </span>
                            </Dropdown.Header>

                            <Link href="/example">
                                <Dropdown.Item className="max-w-sm">
                                    <div className="grid grid-cols-12 items-center">
                                        <div className="col-span-2">
                                            <Avatar placeholderInitials="JD" rounded />
                                        </div>
                                        <div className="col-span-10 ml-1">
                                            <span className="font-bold">Dinner tonight</span>
                                            <p>Hey, how are you? Wanna go for dinner tonight?</p>
                                            <p className="text-sm text-slate-500">2 hours ago</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Link>


                            <Link href="/example">
                                <Dropdown.Item className="max-w-sm">
                                    <div className="grid grid-cols-12 items-center">
                                        <div className="col-span-2">
                                            <Avatar placeholderInitials="DJ" rounded />
                                        </div>
                                        <div className="col-span-10 ml-1">
                                            <span className="font-bold">Sorry</span>
                                            <p>I could not answer you on time, I am so sorry. Please, reach me.</p>
                                            <p className="text-sm text-slate-500">Yesterday</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Link>

                            <Link href="/example">
                                <Dropdown.Item className="max-w-sm">
                                    <div className="grid grid-cols-12 items-center">
                                        <div className="col-span-2">
                                            <Avatar placeholderInitials="JD" rounded />
                                        </div>
                                        <div className="col-span-10 ml-1">
                                            <span className="font-bold">Plans for the weekend</span>
                                            <p>Doing something at the weekend? I am free.</p>
                                            <p className="text-sm text-slate-500">4 days ago</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Link>

                            <Dropdown.Divider />
                            <Link href="/example">
                                <Dropdown.Item className="flex justify-center">
                                    View all messages
                                </Dropdown.Item>
                            </Link>
                        </Dropdown>

                    </div>
                    <div>
                        <Dropdown arrowIcon={false} inline={true} className="dark:bg-slate-900" label={
                            <div className="text-gray-500 bg-slate-100 hover:bg-slate-300 font-medium rounded-xl text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-400">
                                <HiBell className="h-5 w-5" />
                                <div className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 dark:bg-red-700 border-2 border-white rounded-full dark:border-slate-600" style={{ marginTop: '-12px', marginRight: '-8px' }}>
                                    5
                                </div>
                            </div>
                        }>
                            <Dropdown.Header>
                                <span className="block text-sm font-bold text-center">
                                    Notifications
                                </span>
                            </Dropdown.Header>

                            <Link href="/example">
                                <Dropdown.Item className="max-w-sm">
                                    <div className="grid grid-cols-12 items-center">
                                        <div>
                                            <HiOutlineX className="h-6 w-6 text-red-500" />
                                        </div>
                                        <div className="col-span-11">
                                            This is a <span className="text-red-500 font-bold">critical</span> notification. System will have its database dropped, so you will lose all your data.
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Link>

                            <Link href="/example">
                                <Dropdown.Item className="max-w-sm">
                                    <div className="grid grid-cols-12 items-center">
                                        <div>
                                            <HiOutlineExclamation className="h-6 w-6 text-yellow-500" />
                                        </div>
                                        <div className="col-span-11">
                                            This is a <span className="text-yellow-500 font-bold">warning</span> notification. System will be offline next week, from Monday to Wednesday.
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Link>

                            <Link href="/example">
                                <Dropdown.Item className="max-w-sm">
                                    <div className="grid grid-cols-12 items-center">
                                        <div>
                                            <HiOutlineInformationCircle className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div className="col-span-11">
                                            This is a <span className="text-blue-500 font-bold">default</span> notification. System will be restarted in the next hour.
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Link>

                            <Link href="/example">
                                <Dropdown.Item className="max-w-sm">
                                    <div className="grid grid-cols-12 items-center">
                                        <div>
                                            <HiOutlineCheck className="h-6 w-6 text-emerald-500" />
                                        </div>
                                        <div className="col-span-11">
                                            This is a <span className="text-emerald-500 font-bold">success</span> notification. System was updated and is now online.
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Link>

                            <Dropdown.Divider />
                            <Link href="/example">
                                <Dropdown.Item className="flex justify-center">
                                    View all notifications
                                </Dropdown.Item>
                            </Link>
                        </Dropdown>

                    </div>
                    <div>
                        <Flowbite>
                            <DarkThemeToggle className="mr-2 bg-slate-100 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-400 focus:ring-0 hover:ring-0 active:ring-0 " />
                        </Flowbite>
                    </div>
                    <div>
                        <Dropdown arrowIcon={false} inline={true} className="dark:bg-slate-900" label={<div className="text-gray-500 bg-slate-100 hover:bg-slate-300 rounded-xl text-sm py-2.5 px-3 text-center inline-flex items-center font-bold mr-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-400">JD</div>}>
                            <Dropdown.Header>
                                <span className="block text-sm font-bold">
                                    John Doe
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    johndoe@email.com
                                </span>
                            </Dropdown.Header>
                            <Link href="/">
                                <Dropdown.Item>
                                    Home
                                </Dropdown.Item>
                            </Link>
                            <Link href="/example">
                                <Dropdown.Item>
                                    Example
                                </Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Link href="/">
                                <Dropdown.Item>
                                    Sign out
                                </Dropdown.Item>
                            </Link>
                        </Dropdown>
                    </div>
                </div>
            </Navbar.Collapse>

        </Navbar>
    )
}