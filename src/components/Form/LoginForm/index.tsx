"use client";

import { AuthenticateForm } from "@/api/types";
import { useSession } from "@/hooks/useSession";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";

export function LoginForm() {
  const { fetchAuthenticate, isAuthenticatingLoading } = useSession();

  function handleSubmit(formData: AuthenticateForm) {
    fetchAuthenticate(formData);
  }

  return (
    <Form onFinish={handleSubmit} layout="vertical">
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
        <Button
          type="primary"
          htmlType="submit"
          loading={isAuthenticatingLoading}
        >
          Enviar
        </Button>
      </Form.Item>

      <span>
        Ainda não tem conta? <Link href="/auth/register">Registre-se</Link>
      </span>
    </Form>
  );
}
