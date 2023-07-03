import { CategoryType } from "@/api/types";
import { Button, Form, Input, Select } from "antd";
import { CategoryFormProps, CategoryFormValues } from "./interface";
import { useFetchCreateCategory } from "@/hooks/api";
import { useFetchUpdateCategory } from "@/hooks/api/categories/useFetchUpdateCategory";

const CATEGORY_TYPE_OPTIONS = [
  { label: "Receita", value: CategoryType.INCOME },
  { label: "Despesa", value: CategoryType.EXPENSE },
];

export function CategoryForm({
  onCancel = () => null,
  initialValues = {
    title: "",
    type: "",
  },
}: CategoryFormProps) {
  const { mutate: fetchCreateCategory, isLoading: isCreateCategoryLoading } =
    useFetchCreateCategory({
      options: {
        onSuccess: () => {
          onCancel();
        },
      },
    });

  const { mutate: fetchUpdateCategory, isLoading: isUpdateCategoryLoading } =
    useFetchUpdateCategory({
      options: {
        onSuccess: () => {
          onCancel();
        },
      },
    });

  function handleSubmit(formData: CategoryFormValues) {
    if (initialValues.id) {
      fetchUpdateCategory({
        body: formData,
        path: {
          id: initialValues.id,
        },
      });
    } else {
      fetchCreateCategory({
        body: formData,
      });
    }
  }

  return (
    <Form
      preserve={false}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={initialValues}
    >
      <Form.Item
        label="Nome"
        name="title"
        rules={[{ required: true, message: "Por favor, insira o nome" }]}
      >
        <Input placeholder="Salário mensal" />
      </Form.Item>
      <Form.Item
        label="Tipo"
        name="type"
        rules={[
          { required: true, message: "Por favor, selecione a categoria" },
        ]}
      >
        <Select options={CATEGORY_TYPE_OPTIONS} placeholder="Receita" />
      </Form.Item>

      <Form.Item className="flex justify-end w-full">
        <Button type="ghost" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={isCreateCategoryLoading || isUpdateCategoryLoading}
        >
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
