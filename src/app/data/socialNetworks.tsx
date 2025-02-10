import { ReactNode } from "react";
import { SiYoutube, SiLinkedin, SiRss, SiTwitch } from "react-icons/si";

export interface SocialNetwork {
    id: number;
    logo: ReactNode;
    src: string;
}

export const socialNetworks: SocialNetwork[] = [
    {
        id: 1,
        logo: <SiYoutube size={30} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <SiLinkedin size={30} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <SiRss size={30} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <SiTwitch size={30} />,
        src: "#!",
    },
];
