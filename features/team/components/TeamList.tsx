import { mockCards } from "@/mocks/cards";
import Team from "./Team";

const TeamList = () => {
    const cards = mockCards;

    return (
        <div
            className="w-full flex flex-wrap justify-evenly gap-4 p-3"
        >
            <Team
                cards={cards}
                teamName="Time 1"
            />
            <Team
                cards={cards}
                teamName="Time 2"
            />
            <Team
                cards={cards}
                teamName="Time 3"
            />
            <Team
                cards={cards}
                teamName="Time 4"
            />
        </div>
    )
}

export default TeamList;