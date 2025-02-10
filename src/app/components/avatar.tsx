"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition
            position="bottom"
            className="bottom-0 right-0 flex justify-center items-center w-full absolute md:inline-block md:w-auto"
        >
            <Image
                src="/assets/images/avatars/avatar-1.png"
                width="400"
                height="400"
                className="hidden sm:block sm:max-w-[200px] sm:w-full h-auto object-contain md:max-w-[400px]"
                alt="Particles"
            />
        </MotionTransition>
    );
}