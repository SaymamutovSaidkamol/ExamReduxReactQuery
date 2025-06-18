import { usePhone } from "../../api/features/hooks/useProduct"

import { RiDeleteBin5Line } from "react-icons/ri"
import { RiEdit2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { update } from "../../redux/features/PhoneSlice";
import { useNavigate } from "react-router-dom";

const Phones = () => {
  const { getPhone, deletePhone } = usePhone()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data } = getPhone
  const { mutate } = deletePhone

  const handleDelete = (id: string) => {
    console.log(id);
    mutate(id)
  }

  const handleUpdate = (data: any) => {
    dispatch(update(data))
    navigate("/create_phome")
  }

  return (
    <>
      <div className="p-[32px] text-[28px] font-bold text-[#427DC0]">
        Phones
      </div>

      <div className="p-[32px]">
        <div className="container mx-auto flex">
          {
            data?.data?.map((item: any) => (
              <div className="w-[326px]  h-[395px]">
                <div className="h-[50%]">
                  <img src={item.img} className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col relative">
                  <div><h1 className="text-[20px] text-[#454545F] p-[27px]">{item.name}</h1></div>
                  <div className="flex  items-center justify-around w-full absolute top-[150px]">
                    <h1 className="text-[20px] text-[#427DC0]">{item.price}USD</h1>
                    <div className="flex gap-[10px]">
                      <button onClick={() => handleDelete(item.id)} className="border hover:bg-[#427DC0] border-[#427DC0] rounded-[100px]"><RiDeleteBin5Line className="w-[55px] h-[33px] text-[#427DC0] hover:text-white" /></button>
                      <button onClick={() => handleUpdate(item)} className="border hover:bg-[#427DC0] border-[#427DC0] rounded-[100px]"><RiEdit2Line className="w-[55px] h-[33px] text-[#427DC0] hover:text-white" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Phones
