"use client"

import TeamList from "@/features/team/components/TeamList";
import SearchBar from "../components/ui/SearchBar";
import { useState } from "react";

export default function Page() {
    const [search, setSearch] = useState("");

    return (
        <main
            className="bg-bg flex-1 flex flex-col items-center gap-10 py-8"
        >
                <SearchBar
                    value={search}
                    onChange={(search) => setSearch(search)}
                />
                <section
                    className="w-full self-stretch px-4 py-6"
                >
                    <TeamList
                    search={search}
                    />
                </section>
        </main>
    )
}