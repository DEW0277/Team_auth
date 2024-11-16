import Person from '../assets/mohinur/person.png'

function Mohinur() {
  return (
    <>
     <div className='m-10 '>
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


        <div className='p-20'>
            <div>
               <img src={Person} alt="" />

            </div>


            <div></div>
        </div>
    </div> 
    </>
  )
}

export default Mohinur;