import { Modal } from "antd";
import { CategoryModalProps } from "./interface";
import { Form } from "@/components/Form";

export function CategoryFormModal({
  isOpen,
  onClose,
  title,
  formProps = {
    initialValues: {
      title: "",
      type: "",
    },
  },
}: CategoryModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      title={title}
      footer={null}
      destroyOnClose
    >
      <Form.Category onCancel={onClose} {...formProps} />
    </Modal>
  );
}
