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

    const filtredTeams = search.toLowerCase() !== "" ? teams.filter((team) => team.name.includes(search.toLowerCase())) : teams;
    

    return (
        <div
            className="w-full flex flex-wrap justify-evenly gap-4 p-3"
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