"use client";

import { TeamsContext } from "@/app/contexts/teams/TeamsContext";
import Card from "@/features/team/components/Card";
import { notFound } from "next/navigation";
import { useContext } from "react";

interface TeamDetailClientProps {
  id: string;
}

export default function TeamDetail({ id }: TeamDetailClientProps) {
  const teams = useContext(TeamsContext);

  if (!teams) {
    throw new Error("useContext deve ser usado dentro de um TeamsProvider");
  }

  const team = teams.find((team) => team.id === Number(id));

  if (!team) {
    notFound();
  }

  return (
    <main className="bg-bg flex-1 flex flex-col items-center justify-center gap-10 py-8">
      <section className="w-4/5 flex gap-6">
        {team.cards.map((card) => (
          <Card key={card.id} card={card} statsVisibility={true} />
        ))}
      </section>
    </main>
  );
}