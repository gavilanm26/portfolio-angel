"use client";

import { socialNetworks } from "../data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto px-4 md:px-8 md:flex">
                    <Link href='/'>
                        <div className="my-3 text-center md:text-left">
                            <h1 className="text-4xl font-bold">
                                GAVILAN
                                <span className="text-secondary">Gel</span>
                            </h1>
                            <p className="mt-2 text-lg text-white">
                                Soluciones tecnológicas a la medida.
                            </p>
                        </div>
                    </Link>
                    {/* Social Networks
                    <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-12">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                    */}
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
