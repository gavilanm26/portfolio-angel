import { ReactNode } from "react";
import { HomeIcon, UserRound, BookText, CodeSquare, Speech } from "lucide-react";

export interface NavbarItem {
    id: number;
    title: string;
    icon: ReactNode;
    link: string;
}

export const itemsNavbar: NavbarItem[] = [
    { id: 1, title: "Home", icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />, link: "/" },
    { id: 2, title: "User", icon: <UserRound size={25} color="#fff" strokeWidth={1} />, link: "/about-me" },
    { id: 3, title: "Book", icon: <BookText size={25} color="#fff" strokeWidth={1} />, link: "/services" },
    { id: 4, title: "Target", icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />, link: "/portfolio" },
    { id: 5, title: "Testimonials", icon: <Speech size={25} color="#fff" strokeWidth={1} />, link: "/testimonials" },
];
