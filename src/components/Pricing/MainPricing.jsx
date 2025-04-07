import { useNavigate } from 'react-router-dom'

const MainPricing = () => {
     const navigate = useNavigate()
     return (
          <div className='w-full my-24 text-white '>
               <div className='h-96 md:h-64 pt-20 bg-[#5fcf80] text-center'>
                    <h1 className='text-4xl py-4 font-bold'>Pricing</h1>
                    <p className='text-center'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio  sint voluptas consequatur ut a odio <br /> voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
               </div>
               <div className=' flex gap-2 py-4 justify-start items-start  bg-[#47c46c] font-bold h-16'>
                    <div onClick={() => navigate('/')} className="ml-12 md:ml-24 cursor-pointer">Home</div>
                    <div className="text-gray-200">/</div>
                    <div>Pricing</div>
               </div>

          </div>
     )
}

export default MainPricing