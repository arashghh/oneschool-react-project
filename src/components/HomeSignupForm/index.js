import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./HomeSignupForm.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeSignupForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className='signup-form' data-aos='fade-up' data-aos-delay='500'>
      <h3>Sign Up</h3>
      <Form
        name='basic'
        wrapperCol={{
          span: 32,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        {/* ------------ item 1 ----------------- */}
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input placeholder='Email Address' />
        </Form.Item>
        {/* ------------ item 2 ----------------- */}
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder='Password' />
        </Form.Item>
        {/* ------------ item 3 ----------------- */}
        <Form.Item
          name='confirm'
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Please confirm your password!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder='Re-type Password' />
        </Form.Item>
        {/* ------------ item 4 ----------------- */}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 12,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomeSignupForm;
