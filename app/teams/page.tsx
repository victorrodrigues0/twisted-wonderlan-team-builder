"use client"

import TeamList from "@/features/teams/components/TeamList";
import SearchBar from "../components/ui/SearchBar";
import { useState } from "react";
import AddButton from "../components/ui/AddButton";
import { add } from "@/mocks/functions";
import SearchArea from "../components/ui/SearchArea";

export default function Page() {
    const [search, setSearch] = useState("");

    return (
        <main
            className="flex-1 flex flex-col bg-bg"
        >
            <SearchArea
                add={add}
                search={search}
                onSearchChange={setSearch}
                className="w-full py-6 px-8"
            />
            <section
                className="flex-7 self-stretch p-3"
            >
                <TeamList
                    search={search}
                />
            </section>
        </main>
    )
}