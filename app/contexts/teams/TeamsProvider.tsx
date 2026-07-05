"use client"

import { mockTeams } from "@/mocks/teams"
import { TeamsContext } from "./TeamsContext"

export function TeamsProvider({ children }: { children: React.ReactNode }) {
    const teams = mockTeams;

    return (
        <TeamsContext.Provider value={teams}>
            {children}
        </TeamsContext.Provider>
    )
}