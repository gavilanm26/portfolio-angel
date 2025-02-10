"use client";

import Image from "next/image";

const ContactForm = () => {
    return (
        <div className="bg-darkBg py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">Contáctame</h2>
                <p className="text-gray-300 mb-4">
                    Si tienes alguna pregunta, no dudes en ponerte en contacto conmigo. Estoy aquí para ayudarte con tus proyectos tecnológicos.
                </p>
                <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-6">
                    {/* Botón de WhatsApp */}
                    <a
                        href="https://wa.me/573214550322?text=Hola, estoy interesado en tus servicios. ¿Podemos hablar?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-white text-sm sm:text-base
                        font-medium bg-secondary hover:bg-secondary/80 rounded-lg shadow-md transition-all
                        mt-[-9px] sm:mt-0"
                    >
                        <Image
                            src="/assets/images/icons/whatsapp.png"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                        />
                        <span>Contacta conmigo</span>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;
