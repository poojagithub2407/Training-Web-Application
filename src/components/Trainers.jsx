import React from 'react'
import { BsTwitterX, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Trainers = () => {
     const trainerData = [
          {
               id: 1,
               profileImg: 'https://themewagon.github.io/Mentor/assets/img/trainers/trainer-1.jpg',
               name: 'Walter White',
               jobTitle: 'Web Development',
               decription: 'Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'
          }, {
               id: 2,
               profileImg: 'https://themewagon.github.io/Mentor/assets/img/trainers/trainer-2.jpg',
               name: 'Sarah Jhinson',
               jobTitle: 'Marketing',
               decription: 'Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus'
          },
          {
               id: 3,
               profileImg: 'https://themewagon.github.io/Mentor/assets/img/trainers/trainer-3.jpg',
               name: 'William Anderson',
               jobTitle: 'Content',
               decription: 'Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara'
          }
     ]
     return (
          <div className=' md:mx-24 mx-4 my-8'>
               <div className='grid grid-cols-1 md:grid-cols-3 h-auto w-auto gap-3 '>
                    {
                         trainerData.map((trainer) => (
                              <div
                                   className='border text-center'
                                   key={trainer.id}>
                                   <img src={trainer.profileImg} className='h-96 w-full object-fill' />
                                   <p className='mt-5 text-lg font-semibold'>{trainer.name}</p>
                                   <em className='text-gray-500'>{trainer.jobTitle}</em>
                                   <p className='text-gray-500 my-4'><em>{trainer.decription}</em></p>
                                   <div className='flex justify-center text-gray-400  py-4 gap-3'>
                                        <BsTwitterX className='hover:text-[#5fcf80] cursor-pointer' />
                                        <BsFacebook className='hover:text-[#5fcf80] cursor-pointer'/>
                                        <BsInstagram className='hover:text-[#5fcf80] cursor-pointer'/>
                                        <BsLinkedin className='hover:text-[#5fcf80] cursor-pointer'/>
                                   </div>
                              </div>
                         ))
                    }

               </div>
          </div>
     )
}

export default Trainers