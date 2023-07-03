export interface CategoryFormValues {
  id?: string;
  title: string;
  type: string;
}

export interface CategoryFormProps {
  onCancel?: () => void;
  initialValues?: CategoryFormValues;
}
