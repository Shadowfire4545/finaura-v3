export type BankType = {
    name: string;
    icon: string | null;
    cards: {
        name: string;
        rate: number;
    }[];
}