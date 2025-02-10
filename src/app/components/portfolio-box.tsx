"use client";

import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlDemo: string;
    };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlDemo } = data;

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl flex flex-col justify-between h-[400px]"
        >
            <div>
                <h3 className="mb-4 text-xl text-center">{title}</h3>
                <div className="w-full h-[260px] overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>

            <div className="flex justify-center mt-auto">
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="px-4 py-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-white"
                    onClick={(event) => event.preventDefault()}
                >
                    Ver detalles
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBox;
