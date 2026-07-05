import { mockCards } from "@/mocks/cards";
import Team from "./Team";
import { mockTeams } from "@/mocks/teams";

const TeamList = () => {
    const teams = mockTeams;

    return (
        <div
            className="w-full flex flex-wrap justify-evenly gap-4 p-3"
        >
            {teams.map((team) =>
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