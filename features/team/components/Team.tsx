import { CardListProps } from "@/mocks/cards";
import Card from "./Card";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface TeamProps {
    idTeam: number,
    cards: CardListProps;
    teamName: string;
}

const Team = ({ idTeam, cards, teamName }: TeamProps) => {
    return (
        <div
            className="bg-surface w-[48%] min-w-[280px] self-start 
            overflow-hidden rounded-lg"
        >
            <div
                className=" p-4 flex justify-between items-center px-9"
            >
                <h1
                    className="font-semibold"
                >
                    {teamName}
                </h1>
                <a href={`/teams/${idTeam}`}>
                    <span
                        className="cursor-pointer p-2 px-5 rounded-md bg-accent"
                    >
                        <RemoveRedEyeIcon
                            className="w-full h-full"
                            key={0}
                        />
                    </span>
                </a>
            </div>
            <div
                className="w-full flex justify-evenly p-2 gap-2"
            >
                {cards.map(card => (
                    <Card key={card.id} card={card} statsVisibility={false} />
                ))}
            </div>
        </div>
    )
}

export default Team;