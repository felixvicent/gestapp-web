import { CategoryType } from "@/api/types";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { TransactionFormProps, TransactionFormValues } from "./interface";
import {
  useFetchCreateTransaction,
  useFetchGetAllCategories,
  useFetchUpdateTransaction,
} from "@/hooks/api";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { formatCurrency } from "@/utils/formatCurrency";

const CATEGORY_TYPE_OPTIONS = [
  { key: 1, label: "Receita", value: CategoryType.INCOME },
  { key: 2, label: "Despesa", value: CategoryType.EXPENSE },
];

export function TransactionForm({
  onCancel = () => null,
  initialValues = {
    description: "",
    value: 0,
    datetime: "",
    categoryId: "",
    type: CategoryType.EXPENSE,
  },
}: TransactionFormProps) {
  function parseDate(value: string) {
    if (!value) {
      return "";
    }
    return dayjs(value);
  }

  const [categoryType, setCategoryType] = useState<CategoryType>(
    initialValues.type
  );

  const currencyFormatter = (value: any) => {
    if (!value) return "";

    return formatCurrency(Number(value));
  };

  const currencyParser = (val: any) => {
    try {
      if (!val) {
        return "";
      }

      // for when the input gets clears
      if (typeof val === "string" && !val.length) {
        val = "0.0";
      }

      // detecting and parsing between comma and dot
      const group = new Intl.NumberFormat("pt-br")
        .format(1111)
        .replace(/1/g, "");
      const decimal = new Intl.NumberFormat("pt-br")
        .format(1.1)
        .replace(/1/g, "");
      let reversedVal = val.replace(new RegExp(`\\${group}`, "g"), "");
      reversedVal = reversedVal.replace(new RegExp(`\\${decimal}`, "g"), ".");
      //  => 1232.21 €

      // removing everything except the digits and dot
      reversedVal = reversedVal.replace(/[^0-9.]/g, "");
      //  => 1232.21

      // appending digits properly
      const digitsAfterDecimalCount = (reversedVal.split(".")[1] || []).length;

      reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
      return Number.isNaN(reversedVal) ? 0 : reversedVal;
    } catch (error) {
      console.error(error);
    }
  };

  const { data } = useFetchGetAllCategories({});

  const { mutate: fetchCreateTransaction, isLoading: isCreateCategoryLoading } =
    useFetchCreateTransaction({
      options: {
        onSuccess: () => {
          onCancel();
        },
      },
    });

  const {
    mutate: fetchUpdateTransaction,
    isLoading: isUpdateTransactionLoading,
  } = useFetchUpdateTransaction({
    options: {
      onSuccess: () => {
        onCancel();
      },
    },
  });

  function handleChangeType(
    option:
      | {
          label: string;
          value: CategoryType;
        }
      | {
          label: string;
          value: CategoryType;
        }[]
  ) {
    if (Array.isArray(option)) {
      setCategoryType(option[0].value);
    } else {
      setCategoryType(option.value);
    }
  }

  const OPTIONS = useMemo(() => {
    return data
      ?.filter((category) => category.type === categoryType)
      .map((category) => ({
        label: category.title,
        value: category.id,
      }));
  }, [data, categoryType]);

  function handleSubmit(formData: TransactionFormValues) {
    const body = {
      ...formData,
      datetime: dayjs(formData.datetime).format("YYYY-MM-DD[T]HH:mm:ss"),
    };

    if (initialValues.id) {
      fetchUpdateTransaction({
        body: formData,
        path: {
          id: initialValues.id,
        },
      });
    } else {
      fetchCreateTransaction({
        body,
      });
    }
  }

  return (
    <Form
      preserve={false}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        ...initialValues,
        datetime: parseDate(initialValues.datetime),
      }}
    >
      <Form.Item
        label="Descrição"
        name="description"
        rules={[{ required: true, message: "Por favor, insira a descrição" }]}
      >
        <Input placeholder="Salário mensal" />
      </Form.Item>
      <Form.Item
        label="Valor"
        name="value"
        rules={[{ required: true, message: "Por favor, insira o valor" }]}
      >
        <InputNumber
          className="w-full"
          defaultValue={0}
          formatter={currencyFormatter}
          parser={currencyParser}
          addonAfter="R$"
        />
      </Form.Item>

      <Form.Item
        label="Data"
        name="datetime"
        rules={[{ required: true, message: "Por favor, insira a data" }]}
      >
        <DatePicker className="w-full" format={"DD/MM/YYYY"} />
      </Form.Item>

      <Form.Item
        label="Tipo"
        name="type"
        rules={[{ required: true, message: "Por favor, insira o tipo" }]}
      >
        <Select
          options={CATEGORY_TYPE_OPTIONS}
          onChange={(_, option) => handleChangeType(option)}
          placeholder="Receita"
        />
      </Form.Item>

      <Form.Item
        label="Categoria"
        name="categoryId"
        rules={[{ required: true, message: "Por favor, insira a categoria" }]}
      >
        <Select options={OPTIONS} placeholder="Receita" />
      </Form.Item>

      <Form.Item className="flex justify-end w-full">
        <Button type="ghost" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={isCreateCategoryLoading || isUpdateTransactionLoading}
        >
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
