"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
            document.body.classList.add("overflow-hidden");
        } else {
            setTimeout(() => setShowModal(false), 700); // ⏳ Espera 700ms antes de eliminarlo del DOM
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    if (!isOpen && !showModal) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }} // Animación más lenta
                >
                    {/* Contenedor del modal */}
                    <motion.div
                        className="bg-gray-400 rounded-lg shadow-2xl max-w-lg w-full p-6 relative"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }} // Efecto suave
                    >
                        {/* Botón de cierre */}
                        <button
                            className="absolute top-3 right-3 text-black hover:text-gray-900"
                            onClick={onClose}
                        >
                            ✖
                        </button>
                        {/* Título */}
                        <h2 className="text-xl font-semibold mb-4">{title}</h2>
                        {/* Contenido */}
                        <div className="mb-4">{children}</div>
                        {/* Botón de cerrar */}
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-gray-500 transition"
                                onClick={onClose}
                            >
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
