import { CategoryType } from "@/api/types";

export interface TransactionFormValues {
  id?: string;
  description: string;
  value: number;
  datetime: string;
  categoryId: string;
  type: CategoryType;
}

export interface TransactionFormProps {
  onCancel?: () => void;
  initialValues?: TransactionFormValues;
}
