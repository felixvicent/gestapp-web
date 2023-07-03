"use client";

import { Layout } from "antd";
import { IDefaultTemplateProps } from "./interface";
import { Menu } from "@/components/Menu";

export function DefaultTemplate({ children }: IDefaultTemplateProps) {
  return (
    <Layout hasSider className="min-h-screen">
      <Layout.Sider>
        <Menu.Main />
      </Layout.Sider>
      <Layout>
        <Layout.Content className="my-4 mx-4">
          <div className="p-6 min-h-full bg-white">{children}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
