import { createContext } from "react";
import { Team } from "@/mocks/teams";

export const TeamsContext = createContext<Team[] | undefined>(undefined);