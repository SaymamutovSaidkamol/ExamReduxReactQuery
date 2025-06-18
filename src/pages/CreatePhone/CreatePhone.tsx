import type { FormProps } from 'antd';
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { useColor } from '../../api/features/hooks/useColor';
import { Option } from 'antd/es/mentions';
import { usePhone } from '../../api/features/hooks/useProduct';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux';
// import { useEffect } from 'react';
// import { update } from '../../redux/features/PhoneSlice';

const { TextArea } = Input;

type FieldType = {
  name: string,
  price: string,
  img: string,
  color: string
  description: string
}

const CreatePhone = () => {
  const [form] = Form.useForm();
  const { getColor } = useColor()
  const { createPhone } = usePhone()
  const { data } = getColor
  const { mutate, isPending } = createPhone
  // const { mutate: updatePhones } = updatePhone
  // const dispatch = useDispatch()


  // const student = useSelector((state: RootState) => state.studentSlice.value);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    // console.log('Color:', student);
    // if (student) {
    //   console.log(student);
    //   updatePhones({ body: values, id: student.id }, {
    //     onSuccess: () => {
    //       form.resetFields();
    //       // dispatch(update(null))
    //     }
    //   })

    // } else {
    mutate(values, {
      onSuccess: () => {
        form.resetFields();
      }
    })
    // }

  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // useEffect(() => {
  //   form.setFieldsValue(student);
  // }, [student])


  return (
    <>
      <div className="p-[32px] text-[28px] font-bold text-[#427DC0]">
        Create Phone
      </div>

      <div className='p-[32px] w-[620px] h-[720px]'>
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout='vertical'
        >
          <Form.Item<FieldType>
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="price"
            name="price"
            rules={[{ required: true, message: 'Please input your price!' }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="img"
            name="img"
            rules={[{ required: true, message: 'Please input your img!' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item<FieldType>
            label="color"
            name="color"
            rules={[{ required: true, message: 'Please input your color!' }]}
          >
            <Select>
              {/* <Select.Option value="demo">Salom, nma gao</Select.Option> */}
              {data?.data.map((item: any) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            label="description"
            name="description"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <TextArea rows={4} />

          </Form.Item>

          <Form.Item label={null}>
            <Button loading={isPending} type="primary" htmlType="submit" className='w-full'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default CreatePhone
