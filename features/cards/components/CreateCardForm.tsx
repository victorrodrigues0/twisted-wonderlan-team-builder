"use client"

import { useForm, type SubmitHandler } from "react-hook-form";
import { CreateCardFormProps } from "../types";

const attackElementFields = [0, 1, 2] as const;
const buddyFields = [0, 1, 2] as const;
import { mockCharacters } from "@/mocks/characters";
import { createCard } from "../services/create";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCardFormSchema } from "../schemas/createCardFormSchema";

const CreateCardForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateCardFormProps>({
        resolver: zodResolver(createCardFormSchema)
    });

    const characters = mockCharacters;

    const onSubmit: SubmitHandler<CreateCardFormProps> = (data) => {
        createCard(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-black/30"
        >
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold text-text-primary">Adicionar carta</h2>
                <p className="text-sm text-text-secondary">Preencha os dados para criar uma nova carta.</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Selecione o personagem:</label>
                        <select
                            {...register("characterId", { valueAsNumber: true })}
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        >
                            <option value="">Selecione um personagem</option>
                            {characters.map((character) => (
                                <option key={character.id} value={character.id}>
                                    {character.name}
                                </option>
                            ))}
                        </select>
                        {errors.characterId && (
                            <p className="text-sm text-error">{errors.characterId.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Traje:</label>
                        <input
                            {...register("outfitName", { required: "Adicione o nome do traje" })}
                            placeholder="Nome do traje"
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        />
                        {errors.outfitName && (
                            <p className="text-sm text-error">{errors.outfitName.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Raridade:</label>
                        <select
                            {...register("rarity")}
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        >
                            <option value="">Selecione a raridade</option>
                            <option value="R">R</option>
                            <option value="SR">SR</option>
                            <option value="SSR">SSR</option>
                        </select>
                        {errors.rarity && (
                            <p className="text-sm text-error">{errors.rarity.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Dormitório:</label>
                        <input
                            {...register("dorm")}
                            placeholder="Ex: Pomefiore"
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        />
                        {errors.dorm && (
                            <p className="text-sm text-error">{errors.dorm.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Tipo de batalha:</label>
                        <select
                            {...register("battleType")}
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        >
                            <option value="">Selecione o tipo</option>
                            <option value="ATTACK">ATTACK</option>
                            <option value="DEFENSE">DEFENSE</option>
                            <option value="BALANCED">BALANCED</option>
                        </select>
                        {errors.battleType && (
                            <p className="text-sm text-error">{errors.battleType.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Vida:</label>
                        <input
                            type="number"
                            step="0.01"
                            {...register("hp", { valueAsNumber: true })}
                            placeholder="100"
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        />
                        {errors.hp && (
                            <p className="text-sm text-error">{errors.hp.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Ataque:</label>
                        <input
                            type="number"
                            step="0.01"
                            {...register("attack", { valueAsNumber: true })}
                            placeholder="50"
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        />
                        {errors.attack && (
                            <p className="text-sm text-error">{errors.attack.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary">Imagem (arquivo):</label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register("imageUrl")}
                            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                        />
                        {errors.imageUrl && (
                            <p className="text-sm text-error">{errors.imageUrl.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-2">
                    <div className="flex flex-col gap-3 rounded-xl border border-border/80 bg-bg/60 p-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-text-primary">Ataques da carta</h3>
                            <span className="text-sm text-text-secondary">3 ataques</span>
                        </div>

                        {attackElementFields.map((index) => (
                            <div key={index} className="flex flex-col gap-3 rounded-xl border border-border/60 bg-surface/70 p-3">
                                <div className="text-sm font-medium text-text-secondary">Ataque {index + 1}</div>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-text-primary">Elemento</label>
                                        <select
                                            {...register(`attackElements.${index}.elementType` as const, { required: "Selecione um elemento" })}
                                            required
                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="FIRE">FIRE</option>
                                            <option value="AQUA">AQUA</option>
                                            <option value="FLORA">FLORA</option>
                                            <option value="COSMO">COSMO</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-text-primary">Tipo de ação</label>
                                        <select
                                            {...register(`attackElements.${index}.actionType` as const, { required: "Selecione um tipo de ação" })}
                                            required
                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="ATTACK">ATTACK</option>
                                            <option value="HEAL">HEAL</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-text-primary">Posição</label>
                                    <select
                                        {...register(`attackElements.${index}.position` as const, { valueAsNumber: true, required: "Selecione a posição" })}
                                        required
                                        className="rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                                    >
                                        <option value="">Selecione</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 rounded-xl border border-border/80 bg-bg/60 p-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-text-primary">Buddies</h3>
                            <span className="text-sm text-text-secondary">3 buddies</span>
                        </div>

                        {buddyFields.map((index) => (
                            <div key={index} className="flex flex-col gap-3 rounded-xl border border-border/60 bg-surface/70 p-3">
                                <div className="text-sm font-medium text-text-secondary">Buddy {index + 1}</div>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-text-primary">Buddy</label>
                                        <select
                                            {...register(`buddies.${index}.buddyCharacterId` as const, { valueAsNumber: true, required: "Selecione um buddy" })}
                                            required
                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                                        >
                                            <option value="">Selecione um personagem</option>
                                            {characters.map((character) => (
                                                <option key={character.id} value={character.id}>
                                                    {character.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-text-primary">É duo mágico?</label>
                                        <select
                                            {...register(`buddies.${index}.isMagicDuo` as const, { required: "Selecione se é duo mágico" })}
                                            required
                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="rounded-xl bg-accent px-4 py-2.5 font-semibold text-bg transition hover:bg-accent-hover"
            >
                Enviar
            </button>
        </form>
    );
};

export default CreateCardForm;