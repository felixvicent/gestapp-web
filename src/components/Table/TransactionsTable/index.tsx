import { CategoryDTO, CategoryType, TransactionDTO } from "@/api/types";
import { Modal } from "@/components/Modal";
import {
  useFetchDeleteTransaction,
  useFetchGetTransactions,
} from "@/hooks/api";
import { useSession } from "@/hooks/useSession";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDatetime } from "@/utils/formatDatetime";
import { Dropdown, Table, Typography, Modal as ModalAntd, Button } from "antd";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineMore } from "react-icons/ai";

export function TransactionsTable() {
  const { token } = useSession();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransactionToUpdate, setSelectedTransactionToUpdate] =
    useState<TransactionDTO>();

  const { data } = useFetchGetTransactions({
    dependencyArray: [currentPage],
    payload: {
      page: currentPage - 1,
    },
    options: {
      enabled: !!token,
    },
  });

  const { mutate: fetchDeleteTransaction } = useFetchDeleteTransaction({});

  function handleRemove(transactionId: string) {
    fetchDeleteTransaction({
      path: {
        id: transactionId,
      },
    });
  }

  const COLUMNS = [
    {
      title: "Descrição",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Valor",
      key: "value",
      dataIndex: "value",
      render: (value: string) => `R$ ${formatCurrency(Number(value))}`,
    },
    {
      title: "Data/hora",
      key: "datetime",
      dataIndex: "datetime",
      render: (value: string) => `${formatDatetime(value)}`,
    },
    {
      title: "Categoria",
      key: "category",
      dataIndex: "category",
      render: (category: CategoryDTO) => category.title,
    },
    {
      title: "",
      width: "4rem",
      render: (_: any, item: TransactionDTO) => {
        return (
          <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: "edit-category",
                  icon: <AiOutlineEdit size={18} className="text-blue-500" />,
                  label: (
                    <Typography className="text-blue-500">Editar</Typography>
                  ),
                  onClick: () => setSelectedTransactionToUpdate(item),
                },
                {
                  key: "remove-category",
                  icon: <AiOutlineDelete size={18} className="text-red-500" />,
                  label: (
                    <Typography className="text-red-500">Remover</Typography>
                  ),
                  onClick: () =>
                    ModalAntd.confirm({
                      title: `Deseja remover a transação ${item.description}?`,
                      onOk: () => handleRemove(item.id),
                      okText: "Confirmar",
                      okType: "danger",
                    }),
                },
              ],
            }}
          >
            <Button type="link">
              <AiOutlineMore />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={data?.content}
        rowKey={"id"}
        columns={COLUMNS}
        pagination={{
          current: currentPage,
          total: data?.totalElements,
          pageSize: data?.size,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false,
        }}
      />
      <Modal.TransactionForm
        isOpen={!!selectedTransactionToUpdate}
        onClose={() => setSelectedTransactionToUpdate(undefined)}
        title="Editando transação"
        formProps={{
          initialValues: {
            description: selectedTransactionToUpdate?.description ?? "",
            value: selectedTransactionToUpdate?.value ?? 0,
            categoryId: selectedTransactionToUpdate?.category.id ?? "",
            datetime: selectedTransactionToUpdate?.datetime ?? "",
            id: selectedTransactionToUpdate?.id,
            type:
              selectedTransactionToUpdate?.category.type ??
              CategoryType.EXPENSE,
          },
        }}
      />
    </>
  );
}
