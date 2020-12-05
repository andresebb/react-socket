import React from "react";

import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import { SaveOutlined } from "@ant-design/icons";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

export const Ingresar = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre del Agente"
        name="Agente"
        rules={[
          {
            required: true,
            message: "Por facor ingrese su nombre",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Escritorio"
        name="escritorio"
        rules={[
          {
            required: true,
            message: "Ingrese el numero de escritorio",
          },
        ]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" shape="round">
          <SaveOutlined />
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
};
