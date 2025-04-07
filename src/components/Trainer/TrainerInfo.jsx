import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const trainerData = [
  {
    id: 1,
    name: 'Walter White',
    imgUrl: 'https://themewagon.github.io/Mentor/assets/img/team/team-1.jpg',
    sub: 'Business',
    decription: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow'
  },
  {
    id: 2,
    name: 'Sarah Jhonson',
    imgUrl: 'https://themewagon.github.io/Mentor/assets/img/team/team-2.jpg',
    sub: 'Marketing',
    decription: 'Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut'
  },
  {
    id: 3,
    name: 'William Anderson',
    imgUrl: 'https://themewagon.github.io/Mentor/assets/img/team/team-3.jpg',
    sub: 'Maths',
    decription: 'Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui'
  },
  {
    id: 4,
    name: 'Amanda Jepson',
    imgUrl: 'https://themewagon.github.io/Mentor/assets/img/team/team-4.jpg',
    sub: 'Foreign Languages',
    decription: 'Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur'
  },
  {
    id: 5,
    name: 'Brian Doe',
    imgUrl: 'https://themewagon.github.io/Mentor/assets/img/team/team-5.jpg',
    sub: 'Web Development',
    decription: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit'
  },
  {
    id: 6,
    name: 'Josepha Palas',
    imgUrl: 'https://themewagon.github.io/Mentor/assets/img/team/team-6.jpg',
    sub: 'Business',
    decription: 'Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel'
  }
];

const TrainerInfo = () => {
  return (
    <div className='px-4 md:px-12 lg:px-32 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center'>
      {trainerData.map((trainer) => (
        <div key={trainer.id} className='relative group'>
          {/* Image Wrapper with Overlay */}
          <div className='relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden'>
            <img
              src={trainer.imgUrl}
              alt={trainer.name}
              className='w-full h-full object-cover rounded-full'
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center space-x-4 transition-all duration-300 group-hover:bg-opacity-50'>
              <FaFacebook className='text-white hover:text-[#5fcf80] text-xl sm:text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer' />
              <FaTwitter className='text-white hover:text-[#5fcf80] text-xl sm:text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer' />
              <FaInstagram className='text-white hover:text-[#5fcf80] text-xl sm:text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer' />
              <FaLinkedin className='text-white hover:text-[#5fcf80] text-xl sm:text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer' />
            </div>
          </div>

          {/* Info */}
          <p className='pt-4 font-bold text-lg sm:text-xl'>{trainer.name}</p>
          <p className='my-2 text-gray-500 text-sm sm:text-base'>
            <em>{trainer.sub}</em>
          </p>
          <p className='text-gray-600 text-sm sm:text-base px-2 sm:px-0'>{trainer.decription}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainerInfo;
