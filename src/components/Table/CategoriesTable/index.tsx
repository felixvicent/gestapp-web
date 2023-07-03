import { CategoryDTO, CategoryType } from "@/api/types";
import { Modal } from "@/components/Modal";
import { useFetchGetCategories } from "@/hooks/api";
import { useFetchDeleteCategory } from "@/hooks/api/categories/useFetchDeleteCategory";
import { Button, Dropdown, Table, Typography, Modal as ModalAntd } from "antd";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineMore } from "react-icons/ai";

export function CategoriesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryToUpdate, setSelectedCategoryToUpdate] =
    useState<CategoryDTO>();

  const { data } = useFetchGetCategories({
    dependencyArray: [currentPage],
    payload: {
      page: currentPage - 1,
    },
  });

  const { mutate: fetchDeleteCategory } = useFetchDeleteCategory({});

  function handleRemove(categoryId: string) {
    fetchDeleteCategory({
      path: {
        id: categoryId,
      },
    });
  }

  const COLUMNS = [
    { title: "Nome", dataIndex: "title", key: "title" },
    {
      title: "Tipo",
      dataIndex: "type",
      key: "type",
      render: (type: string) => {
        switch (type) {
          case CategoryType.INCOME:
            return "Receita";
          case CategoryType.EXPENSE:
            return "Despesa";
        }
      },
    },
    {
      title: "",
      width: "4rem",
      render: (_: any, item: CategoryDTO) => {
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
                  onClick: () => setSelectedCategoryToUpdate(item),
                },
                {
                  key: "remove-category",
                  icon: <AiOutlineDelete size={18} className="text-red-500" />,
                  label: (
                    <Typography className="text-red-500">Remover</Typography>
                  ),
                  onClick: () =>
                    ModalAntd.confirm({
                      title: `Deseja remover a categoria ${item.title}?`,
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
        columns={COLUMNS}
        pagination={{
          current: currentPage,
          total: data?.totalElements,
          pageSize: data?.size,
          onChange: (page) => setCurrentPage(page),
        }}
      />

      <Modal.CategoryForm
        isOpen={!!selectedCategoryToUpdate}
        onClose={() => setSelectedCategoryToUpdate(undefined)}
        title="Editando categoria"
        formProps={{
          initialValues: {
            id: selectedCategoryToUpdate?.id,
            title: selectedCategoryToUpdate?.title ?? "",
            type: selectedCategoryToUpdate?.type ?? "",
          },
        }}
      />
    </>
  );
}
