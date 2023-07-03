import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { Template } from "@/templates";
import { Button, Row, Typography } from "antd";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Categories() {
  const [isCategoryFormModalOpen, setIsCategoryFormModalOpen] = useState(false);

  return (
    <Template.Default>
      <Row style={{ display: "block" }}>
        <Row justify="space-between" gutter={8} className="mb-8">
          <Typography.Title level={4}>Categorias</Typography.Title>
          <Button
            type="primary"
            onClick={() => setIsCategoryFormModalOpen(true)}
          >
            <Row align="middle" gutter={4}>
              <AiOutlinePlus />
              Criar nova
            </Row>
          </Button>
        </Row>

        <Table.Categories />
      </Row>

      <Modal.CategoryForm
        isOpen={isCategoryFormModalOpen}
        onClose={() => setIsCategoryFormModalOpen(false)}
        title="Criando categoria"
      />
    </Template.Default>
  );
}
