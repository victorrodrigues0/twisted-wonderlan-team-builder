"use client"

import { useState } from "react";
import { add } from "@/mocks/functions";
import SearchArea from "../components/ui/SearchArea";
import CardCharacter from "@/features/characters/components/CardCharacter";
import { mockCharacters } from "@/mocks/characters";

export default function Page() {
    const [search, setSearch] = useState("");
    const characters = mockCharacters;
    const filteredCharacters = search.trim() === ""
        ? characters
        : characters.filter((char) =>
            char.name.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <main className="flex-1 self-stretch flex flex-col bg-bg">
            <SearchArea
                search={search}
                onSearchChange={setSearch}
                className="w-full py-6 px-8"
                hrefLink="/characters/create"
            />
            <section className="flex-1 gap-10 py-10 self-stretch p-3 flex
             flex-wrap justify-center items-baseline overflow-y-auto mx-20 m-10 bg-surface">
                {filteredCharacters.map((char) =>
                    <CardCharacter key={char.id} character={char} />
                )}
            </section>
        </main>
    )
}