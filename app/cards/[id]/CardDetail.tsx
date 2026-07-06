import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardDetailProps } from "@/features/cards/types";
import { ActionType, ElementType, mockCards } from "@/mocks/cards";

const formatDorm = (dorm: string) =>
    dorm.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

const formatBattleType = (battleType: string) =>
    battleType.charAt(0) + battleType.slice(1).toLowerCase();

const formatNumber = (value: number) =>
    new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 1,
    }).format(value);

const elementImages: Record<ElementType, string> = {
    FIRE: "/images/magic_types/fire.webp",
    AQUA: "/images/magic_types/aqua.webp",
    FLORA: "/images/magic_types/flora.webp",
    COSMO: "/images/magic_types/cosmic.webp",
}

const typesAttacksImages: Record<ActionType, string> = {
    ATTACK: "/images/magic_types/attack.webp",
    HEAL: "/images/magic_types/heal.webp",
};

const getRarityBadgeClass = (rarity: string) => {
    switch (rarity) {
        case "SSR":
            return "bg-amber-500/20 text-amber-200 border-amber-400/30";
        case "SR":
            return "bg-sky-500/20 text-sky-200 border-sky-400/30";
        default:
            return "bg-emerald-600/20 text-emerald-200 border-emerald-400/30";
    }
};

const CardDetail = ({ id }: CardDetailProps) => {
    const cardData = mockCards.find((card) => card.id === id);

    if (!cardData) {
        notFound();
    }

    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-4xl border border-border/70 bg-surface/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:flex-row md:p-8 lg:p-10">
            <div className="flex flex-1 items-center justify-center rounded-3xl border border-border/70 bg-linear-to-br from-[#3d2e22] via-[#2d2019] to-[#1c1410] p-4 md:max-w-105">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-[20px] border border-accent/30 bg-[#1b130f] p-3">
                    <Image
                        src={cardData.imageUrl}
                        alt={cardData.characterName}
                        fill
                        priority
                        className="object-cover bg-center"
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-accent">
                                Card details
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold text-text-primary sm:text-4xl">
                                {cardData.characterName}
                            </h1>
                            <p className="mt-2 text-lg text-text-secondary">
                                {cardData.outfitName}
                            </p>
                        </div>

                        <span className={`rounded-md border px-3 py-1 text-sm font-semibold ${getRarityBadgeClass(cardData.rarity)}`}>
                            {cardData.rarity}
                        </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-border/70 bg-[#241711] p-4">
                            <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">Dorm</p>
                            <p className="mt-2 text-xl font-semibold text-text-primary">
                                {formatDorm(cardData.dorm)}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-[#241711] p-4">
                            <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">Battle style</p>
                            <p className="mt-2 text-xl font-semibold text-text-primary">
                                {formatBattleType(cardData.battleType)}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-[#241711] p-4">
                            <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">HP</p>
                            <p className="mt-2 text-xl font-semibold text-text-primary">
                                {formatNumber(cardData.hp)}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-[#241711] p-4">
                            <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">Attack</p>
                            <p className="mt-2 text-xl font-semibold text-text-primary">
                                {formatNumber(cardData.attack)}
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border/70 bg-[#20150f] p-5">
                        <div className="flex items-center justify-between gap-3">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-accent">
                                Attack elements
                            </h2>
                            <span className="text-sm text-text-secondary">
                                {cardData.attackElements.length} skills
                            </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                            {cardData.attackElements.map((element, index) => (
                                <div
                                    key={`${element.elementType}-${index}`}
                                    className="rounded-md flex items-center justify-center border
                                     border-accent/30 bg-accent/10 px-4 py-2 text-sm text-text-primary"
                                >
                                    <span className="font-semibold">
                                        <img className="w-full h-full" src={elementImages[element.elementType]} alt={cardData.characterName} />
                                    </span>
                                    <span className="mx-2 text-text-secondary">•</span>
                                    <img className="w-1/2" src={typesAttacksImages[element.actionType]} alt={cardData.characterName} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href="/cards"
                        className="rounded-md border border-border/70 bg-surface-elevated px-5 py-2.5 text-sm font-medium text-text-primary transition hover:border-accent hover:text-accent"
                    >
                        Voltar à coleção
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CardDetail;