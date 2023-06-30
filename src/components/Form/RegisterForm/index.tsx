"use client";

import { CreateUserForm } from "@/api/types";
import { useFetchStoreUser } from "@/hooks/api";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const { push } = useRouter();

  const { mutate: fetchStoreUser, isLoading } = useFetchStoreUser({
    options: {
      onSuccess: () => {
        push("/auth/login");
      },
      onError: (error) => {
        message.error(error.message);
      },
    },
  });

  function handleSubmit(formData: CreateUserForm) {
    fetchStoreUser(formData);
  }

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <Form.Item
        label="Nome"
        name="name"
        rules={[
          {
            required: true,
            message: "Por favor insira seu nome",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor insira seu email",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: "Por favor insira sua senha" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className="flex justify-end w-full">
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Enviar
        </Button>
      </Form.Item>

      <span>
        Já tem conta? <Link href="/auth/login">Faça login</Link>
      </span>
    </Form>
  );
}
