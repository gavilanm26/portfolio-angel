"use client";

import Image from "next/image";
import Modal from "@/app/components/modal";
import { useState } from "react";


interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlDemo: string;
        description?: string;
    };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlDemo, description } = data;
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <button
                    className="px-4 py-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-white"
                    onClick={() => setIsModalOpen(true)}
                >
                    Ver detalles
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title}>
                <p>{description}</p>
                <a
                    href={urlDemo}
                    target="_blank"
                    className="block text-blue-500 underline mt-2"
                >
                </a>
            </Modal>
        </div>
    );
};

export default PortfolioBox;
