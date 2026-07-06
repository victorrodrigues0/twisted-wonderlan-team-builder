"use client"

import Link from "../ui/Link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav
            className="w-full h-24 bg-surface flex items-center justify-between
            shadow-lg"
        >
            <div
                className="w-44 ml-30"
            >
                <Link
                    hrefLink="/"
                >
                    <img src="/images/twst-logo.webp" alt="Imagem sem fundo escrito Twisted Wonderland"
                        className="w-full"
                    />
                </Link>
            </div>

            <div
                className="flex gap-6 items-center justify-center mr-40"
            >
                <Link
                    hrefLink="/teams"
                    label="teams"
                    textColor={pathname === "/teams" ? "text-accent" : "text-text-primary" }
                />
                <Link
                    hrefLink="/cards"
                    label="cards"
                    textColor={pathname === "/cards" ? "text-accent" : "text-text-primary" }
                />
                <Link
                    hrefLink="/characters"
                    label="characters"
                     textColor={pathname === "/characters" ? "text-accent" : "text-text-primary" }
                />
            </div>
        </nav>
    )
}

export default Navbar;