import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useColor } from '../../api/features/hooks/useColor';
import { RiDeleteBin5Line } from "react-icons/ri"

type FieldType = {
  name?: string;
};
const Color = () => {
  const [form] = Form.useForm();
  const { createColor, getColor, deleteColor } = useColor()
  const { mutate } = createColor
  const { mutate: deleteColors } = deleteColor
  const { data } = getColor

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);

    mutate(values, {
      onSuccess: () => {
        form.resetFields();
      }
    })

  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleDelete = (id: string) => {
    deleteColors(id)
  }


  return (
    <>
      <div className="p-[32px] text-[28px] font-bold text-[#427DC0]">
        Color
      </div>

      <div className='w-[620px] pl-[32px]'>
        <Form
          form={form}
          name="basic"
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button className='w-full' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>


      <div className='px-[32px] mt-[53px]'>
        <div className='flex gap-[20px]'>
          {
            data?.data?.map((item: any) => (
              <div className='flex justify-around py-[18px] rounded-[5px] shadow-2xl w-[250px]'>
                <h3 className='text-[20px] font-bold'>{item.name}</h3>
                <button onClick={() => handleDelete(item.id)} className='bg-[#427DC0] rounded-[100px] cursor-pointer'><RiDeleteBin5Line className="w-[55px] h-[33px] text-white" /></button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Color
