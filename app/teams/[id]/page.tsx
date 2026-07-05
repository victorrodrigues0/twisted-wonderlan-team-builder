import Card from "@/features/team/components/Card";
import { mockTeams } from "@/mocks/teams";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const teams = mockTeams;

    const team = teams.find((team) => team.id === Number(id));

    if(!team) {
        notFound();
    }
    return (
        <main
            className="bg-bg flex-1 flex flex-col items-center justify-center gap-10 py-8"
        >
            <section
            className="w-4/5 flex gap-6"
            >
                {team.cards.map(card => (
                    <Card key={card.id} card={card} statsVisibility={true} />
                ))}
            </section>
        </main>
    )
}