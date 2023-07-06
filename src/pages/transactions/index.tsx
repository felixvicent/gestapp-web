import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { Template } from "@/templates";
import { Button, Row, Typography } from "antd";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Transactions() {
  const [isTransactionFormModalOpen, setIsTransactionFormModalOpen] =
    useState(false);

  return (
    <Template.Default>
      <Row style={{ display: "block" }}>
        <Row justify="space-between" gutter={8} className="mb-8">
          <Typography.Title level={4}>Transações</Typography.Title>
          <Button
            type="primary"
            onClick={() => setIsTransactionFormModalOpen(true)}
          >
            <Row align="middle" gutter={4}>
              <AiOutlinePlus />
              Criar nova
            </Row>
          </Button>
        </Row>

        <Table.Transactions />
      </Row>

      <Modal.TransactionForm
        isOpen={isTransactionFormModalOpen}
        onClose={() => setIsTransactionFormModalOpen(false)}
        title="Criando transação"
      />
    </Template.Default>
  );
}
