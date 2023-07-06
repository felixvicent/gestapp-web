export interface TransactionFormValues {
  id?: string;
  description: string;
  value: number;
  datetime: string;
  categoryId: string;
  type: string;
}

export interface TransactionFormProps {
  onCancel?: () => void;
  initialValues?: TransactionFormValues;
}
