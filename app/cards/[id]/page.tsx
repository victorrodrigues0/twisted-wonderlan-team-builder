import { notFound } from "next/navigation";
import CardDetail from "./CardDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    if (!id) {
        notFound();
    }


    return (
        <main className="flex-1 self-stretch flex flex-col justify-center items-center bg-bg">
            <CardDetail
                id={Number(id)}
            />
        </main>
    )
}