// mocks/teams.ts
import { Card, mockCards, mockCards2 } from "./cards";

export interface Team {
  id: number;
  name: string;
  cards: Card[];
}

export const mockTeams: Team[] = [
  {
    id: 1,
    name: "Time 1",
    cards: mockCards,
  },
  {
    id: 2,
    name: "Time 2",
    cards: mockCards2,
  }
];