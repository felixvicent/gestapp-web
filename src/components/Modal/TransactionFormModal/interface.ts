import { TransactionFormProps } from "@/components/Form";

export interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  formProps?: Omit<TransactionFormProps, "onCancel">;
}
