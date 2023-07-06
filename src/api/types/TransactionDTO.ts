import { CategoryDTO } from "./CategoryDTO";

export type TransactionDTO = {
  id: string;
  description: string;
  value: number;
  datetime: string;
  category: CategoryDTO;
};
