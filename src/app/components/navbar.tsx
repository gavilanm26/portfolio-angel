"use client"

import Link from "next/link";

import { itemsNavbar } from "../data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname();

    return (
        <MotionTransition
            position="right"
            className="fixed z-40 flex flex-col items-center justify-center w-full bottom-5 sm:bottom-2 md:bottom-10"
        >
            <nav>
                <div className="flex items-center justify-center gap-2 px-2 sm:px-4 py-1 rounded-full bg-white/15 backdrop-blur-md">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                                router === item.link && 'bg-secondary'
                            }`}
                        >
                            <Link href={item.link}>{item.icon}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
};


export default Navbar;