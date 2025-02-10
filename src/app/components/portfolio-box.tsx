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
            className="p-4 border border-teal-50 rounded-xl flex flex-col justify-between h-full min-h-[450px]"
        >
            <div className="flex-1">
                <div className="h-[100px] flex items-center justify-center text-center">
                    <h3 className="text-xl">{title}</h3>
                </div>

                <div className="w-full h-[220px] overflow-hidden rounded-2xl flex justify-center items-center">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={220}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

            </div>

            {/* Asegurar que el botón siempre esté alineado en la parte inferior */}
            <div className="mt-auto flex justify-center">
                <button
                    className="px-6 py-2 text-white bg-secondary hover:bg-secondary/80 transition duration-150 rounded-lg text-center"
                    onClick={() => setIsModalOpen(true)}
                >
                    Ver detalles
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title}>
                <p>{description}</p>
                <a href={urlDemo} target="_blank" className="block text-blue-500 underline mt-2"></a>
            </Modal>
        </div>

    );
};

export default PortfolioBox;
