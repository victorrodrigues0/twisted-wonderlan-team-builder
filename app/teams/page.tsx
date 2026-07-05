import TeamList from "@/features/team/components/TeamList";

export default function Page() {

    return (
        <main
            className="bg-bg flex-1 flex flex-col items-center gap-10 py-8"
        >
            <div
                className="self-stretch mt-20 flex items-center justify-center"
            >
                <p>search</p>
            </div>
            <section
                className="w-full self-stretch px-4 py-6"
            >
                <TeamList />
            </section>
        </main>
    )
}