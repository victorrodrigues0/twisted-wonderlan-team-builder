import Team from "./Team";
import { useContext } from "react";
import { TeamsContext } from "@/app/contexts/teams/TeamsContext";
import { notFound } from "next/navigation";

interface TeamListProps {
    search: string;
}

const TeamList = ({ search }: TeamListProps) => {
    const teams = useContext(TeamsContext);

    if (!teams) {
        notFound();
    }

    const query = search.trim().toLowerCase();

    const filtredTeams = query !== ""
        ? teams.filter((team) => team.name.toLowerCase().includes(query))
        : teams;
    

    return (
        <div
            className="flex-1 flex flex-wrap justify-evenly gap-4 p-3"
        >
            {filtredTeams.map((team) =>
                <Team
                    key={team.id}
                    idTeam={team.id}
                    teamName={team.name}
                    cards={team.cards}
                />
            )}
        </div>
    )
}

export default TeamList;