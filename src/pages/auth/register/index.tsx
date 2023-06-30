"use client";

import { Form } from "@/components/Form";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="flex items-center flex-1 h-screen">
      <div className="flex-1 h-full flex items-center justify-center">
        <Image src="/img/login.svg" alt="Faça login" width={400} height={300} />
      </div>
      <div className="flex-1 flex items-center justify-center w-full bg-blue-500 h-full">
        <div className="bg-white p-4 rounded w-96">
          <h3 className="mb-4 font-normal text-center">Faça seu cadastro</h3>
          <Form.Register />
        </div>
      </div>
    </main>
  );
}
