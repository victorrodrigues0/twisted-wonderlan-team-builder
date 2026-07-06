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
        <main className="flex-1 flex flex-col bg-bg min-h-full">
            <SearchArea
                add={add}
                search={search}
                onSearchChange={setSearch}
                className="w-full py-6 px-8"
            />
            <section className="flex-1 gap-10 py-10 self-stretch p-3 flex flex-wrap justify-center items-baseline overflow-y-auto">
                {filteredCharacters.map((char) =>
                    <CardCharacter key={char.id} character={char} />
                )}
            </section>
        </main>
    )
}