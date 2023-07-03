import { CategoryFormProps } from "@/components/Form";

export interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  formProps: Omit<CategoryFormProps, "onCancel">;
}
