import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";

const { TextArea } = Input;

function AdminIntro() {
  const { portfolioData } = useSelector((state) => state.root);

  const [form] = Form.useForm();

  // Save New Intro
  const handleSave = async () => {
    try {
      const values = form.getFieldsValue();

      const response = await axios.post(
        "http://localhost:3000/api/portfolio/save-intro",
        values
      );

      console.log(response.data);
      alert("Intro Saved Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Update Existing Intro
  const handleUpdate = async () => {
    try {
      const values = form.getFieldsValue();

      const response = await axios.put(
        "http://localhost:3000/api/portfolio/update-intro",
        {
          ...values,
          _id: portfolioData?.intro?._id,
        }
      );

      console.log(response.data);
      alert("Intro Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 bg-white flex-1 rounded-lg">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">
        Intro Section
      </h1>

      <Form
        form={form}
        layout="vertical"
        initialValues={portfolioData?.intro}
      >
        <Form.Item
          label="Welcome Text"
          name="welcometext"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Caption"
          name="caption"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true }]}
        >
          <TextArea rows={5} />
        </Form.Item>

        <div className="flex gap-4">
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>

          <Button type="default" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;