import Person from '../assets/mohinur/person.png'
import Orcid from '../assets/mohinur/orcid.png'
import Star from '../assets/mohinur/Star 6.png'
import Ten from '../assets/mohinur/image 10.png'
import Eleven from '../assets/mohinur/image 11.png'

function Mohinur() {
  return (
    <>
     <div className='m-20'>
        <div>
            <button className='bg-[#E7F0FF] text-xl py-[15px] px-[80px] text-[gray] rounded-tl-lg '>
               Мои заявки
            </button>
            <button className=' text-xl  py-[15px] px-[80px] text-[#597DB6] rounded-[10px] border-black bg-[white]'>
               <span >Мои заявки</span>
            </button>
            <button className='bg-[#E7F0FF] text-xl py-[15px] px-[80px] text-[gray] rounded-r-lg'>
               <span >Мои заявки</span>
            </button>
        </div>


        <div className='p-20 border-transparent	w-[1300px] h-[620px]  rounded-[20px] flex gap-[120px] shadow-2xl '>
            <div>
               <img className='w-[220px]' src={Person} alt="" />
               
               <div className='flex flex-col	justify-center content-center'>
                <img className='w-[200px] mt-[20px]' src={Orcid} alt="" />

                <div className=' gap-[5px] flex align-center justify-center mt-[20px]'>
                   <img className='w-[20px]' src={Star} alt="" />
                   <span>4.4</span>
                </div>
                   <div className='text-center mt-[20px]'>
                   <p>Дата регистрации:</p>
                   <p className='text-current mt-[11px]'>01.01.2021</p>
                   </div>
               </div>
            </div>


            <div>
            <div className='flex gap-[330px]'>
             <div>
               <div className='flex flex-col gap-[30px]'>
   
                <div>
                    <div>
                      <h3 className='text-[#3A85F4] text-[20px] font-bold'>Имя</h3>
                      <p>Артём</p>
                    </div>
                </div>

                <div>
                    <div>
                      <h3 className='text-[#3A85F4] text-[20px] font-bold'>Фамилия</h3>
                      <p>_______</p>
                    </div>
                </div>

                <div>
                    <div>
                      <h3 className='text-[#3A85F4] text-[20px] font-bold'>Отчество</h3>
                      <p>_______</p>
                    </div>
                </div>

                <div>
                    <div>
                      <h3 className='text-[#3A85F4] text-[20px] font-bold'>СтранаЯзык </h3>
                      <p>Россия</p>
                    </div>
                </div>
               </div>
               
             </div>
             
             <div>
               <div className='flex flex-col gap-[30px]'>
   
                <div>
                    <div>
                      <h3 className='text-[#3A85F4] text-[20px] font-bold'>Статус</h3>
                      <p>Учёный</p>
                    </div>
                </div>

                <div>
                    <div>
                      <h3 className='text-[#3A85F4] text-[20px] font-bold'>Аффилиация</h3>
                      <p>Санкт-Петербургский горный университет</p>
                    </div>
                </div>

                <div>
                    <div>
                      <h3 className='text-[#3A85F4] text-[20px] font-bold'>О себе</h3>
                      <p>Знание английского С1. Владею ANSYS Fluent и Wolfram Mathematica</p>
                    </div>
                </div>

                

               </div>
             </div>
              
            </div>
            
            <div className='w-[820px] h-[2px] bg-[#CADCF8] mt-[50px] mb-[40px]'></div>

            <div>
             <h4 className='text-[#3A85F4] text-[20px] font-bold'>Ссылки</h4>
               <div className='flex gap-[360px] mt-[20px]'>
               <div>
                  <div className='flex gap-[10px]'>
                  <img className='w-[25px]' src={Ten} alt="" />
                  <ins>SCOPUS</ins>
                  </div>
               </div>

               <div className='flex gap-[10px]'>
                <img className='w-[25px]' src={Eleven} alt="" />
                  <ins className='text-[#77A2E1]'>Publons</ins>
               </div>
               </div>
            </div>

            </div>

        </div>
      
        
    </div> 
    </>
  )
}

export default Mohinur;