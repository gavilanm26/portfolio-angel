import { ReactNode } from "react";

export interface ServiceData {
    icon: ReactNode;
    title: string;
    description: string;
}

import { Camera, Network, Phone, Lock, Wrench, Box } from "lucide-react";

export const serviceData: ServiceData[] = [
    { icon: <Camera />, title: "Videovigilancia", description: "Instalación de cámaras de seguridad con monitoreo remoto y almacenamiento eficiente." },
    { icon: <Network />, title: "Cableado Estructurado", description: "Infraestructura confiable para redes internas y externas, adaptada a tus necesidades." },
    { icon: <Phone />, title: "Citofonía", description: "Sistemas de citofonía analógicos y digitales para entornos residenciales y empresariales." },
    { icon: <Lock />, title: "Control de Acceso", description: "Soluciones avanzadas para acceso remoto y automatización de puertas." },
    { icon: <Wrench />, title: "Mantenimiento Tecnológico", description: "Diagnóstico, reparación y limpieza de equipos para prolongar su vida útil." },
    { icon: <Box />, title: "Impresiones 3D", description: "Diseño y producción de piezas personalizadas con tecnología de impresión 3D." },
];

