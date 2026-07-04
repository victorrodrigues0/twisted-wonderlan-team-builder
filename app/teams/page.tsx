import Card from "@/features/team/components/Card";
import { mockCards } from "@/mocks/cards";

export default function Page() {
    const cards = mockCards;

    return (
        <div
            className="bg-bg flex-1 flex justify-center items-center gap-10"
        >
            {cards.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    )
}