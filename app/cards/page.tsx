"use client"

import { mockCards } from "@/mocks/cards";
import Card from "../components/ui/Card";
import SearchArea from "../components/ui/SearchArea";
import { add } from "@/mocks/functions";
import { useState } from "react";

export default function Page() {
    const cards = mockCards;
    const [search, setSearch] = useState("");
    const filteredCards = search.trim() === ""
        ? cards
        : cards.filter((card) =>
            card.characterName.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <main className="flex-1 self-stretch flex flex-col bg-bg">
            <SearchArea
                add={add}
                search={search}
                onSearchChange={setSearch}
                className="w-full py-6 px-8"
            />
            <section className="flex-1 gap-10 py-10 self-stretch p-3 flex flex-wrap justify-center items-baseline overflow-y-auto">
                {filteredCards.map((card) =>
                    <Card
                        key={card.id}
                        card={card}
                    />
                )}
            </section>
        </main>
    )
}