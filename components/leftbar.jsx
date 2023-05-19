'use client'

import { Sidebar, TextInput } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiAcademicCap, HiHome, HiShoppingBag } from "react-icons/hi";

export default function Leftbar({ show }) {

    const pathname = usePathname();

    return (
        <div>
            <Sidebar collapseBehavior="hide" className="fixed top-0 left-0 z-10 w-64 h-screen shadow-lg" style={{ paddingTop: '60px' }} collapsed={!show}>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>

                        <Link href="/" passHref legacyBehavior>
                            <Sidebar.Item icon={HiHome} active={pathname === "/"}>
                                Home
                            </Sidebar.Item>
                        </Link>

                        <Sidebar.Collapse icon={HiShoppingBag} label="Multi-level">
                            <Link href="/example" passHref legacyBehavior>
                                <Sidebar.Item icon={HiAcademicCap} active={pathname === "/example"}>
                                    Example
                                </Sidebar.Item>
                            </Link>
                        </Sidebar.Collapse>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}