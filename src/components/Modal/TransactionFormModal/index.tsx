import { Modal } from "antd";
import { TransactionModalProps } from "./interface";
import { Form } from "@/components/Form";

export function TransactionFormModal({
  isOpen,
  onClose,
  title,
  formProps = {
    initialValues: {
      description: "",
      value: 0,
      datetime: "",
      categoryId: "",
      type: "",
    },
  },
}: TransactionModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      title={title}
      footer={null}
      destroyOnClose
    >
      <Form.Transaction onCancel={onClose} {...formProps} />
    </Modal>
  );
}
