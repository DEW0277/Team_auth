 import '../pages/ibrohim.css'
 import Frameimg from '../assets/ibrohimimg/Frame.png'
 import Imgttt1 from '../assets/ibrohimimg/imgttt1.png'
 import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
 import Imgttt2 from '../assets/ibrohimimg/imgttt2.png'
 import Imgttt3 from '../assets/ibrohimimg/imgttt3.png'
 import Imgpart2 from '../assets/ibrohimimg/imgggg.png'

function Ibrohim() {
  return (
    <div>
        <div className="navbar w-full h-1/2 bg-blue-200">
            <h2 className="h2-1 text-5xl font-semibold mt-[150px] ml-[150px] relative top-10">Сообщество <br /> взаимопомощи между <br /> учёными со всего мира</h2>
            <h2 className="h2-2 font-semibold mt-[70px] ml-[150px]">Удобный сервис, который подберёт для вас коллег и поможет <br /> наладить с ними взаимовыгодное сотрудничество в областях <br /> совместных исследований, соавторства, рецензирования и <br /> повышения индекса цитирования.</h2>
            <button className="button-1 w-52 h-10 bg-blue-400 rounded-3xl ml-[150px] mt-[50px]">Присоединиться</button>
            <img className='img-1 w-2/4 ml-[750px] mt-[-330px]' src={Frameimg} alt="framing-image" />
        </div>

        <div className='body-1'>
            <h2 className='h2-3 text-center text-4xl font-semibold mt-[150px]'>Как это работает</h2>
            <img className='img-2 ml-[50px]' src={Imgttt1} alt="" />
            <h2 className='h2-4 ml-[80px]'>Оцените привлекательность темы</h2>
            <ArrowRightAltIcon className='icon-1 ml-[400px] mt-[-350px]' />
            <img className='img-3 ml-[500px] mt-[-340px]' src={Imgttt2} alt="" />
            <h2 className='h2-5 ml-[515px]'>Выполните совместные исследования</h2>
            <ArrowRightAltIcon className='icon-1 ml-[850px] mt-[-350px]' />
            <img className='img-4 ml-[1000px] mt-[-340px]' src={Imgttt3} alt="" />
            <h2 className='h2-6 ml-[1045px]'>Улучшите написанную работу</h2>
        </div>


        <div>
          <h2 className='h2-7 text-center text-4xl font-semibold mt-[150px]'>Сообщество</h2>
          <h2 className='h2-8 text-center font-semibold mt-[10px]'>Тысячи учёных уже предлагают свою помощь</h2>
          <div className='cards flex flex-wrap gap-32 ml-[30px] mt-[100px]'>
            <div className='card-1'>
              <button className='btn-1 w-44 h-8 bg-yellow-100 rounded-xl text-yellow-600 mt-[20px] ml-[10px]'>Цитировать других</button>
              <button className='btn-2 w-44 h-8 bg-green-100 rounded-xl text-green-600 ml-[20px]'>Neuro/Psycho</button>
              <h2 className='h2-9 font-bold ml-[20px] mt-[20px]'>Вопросы проектирования трансатлантического <br /> межнационального продуктопровода <br />   в условиях  нарастающей коронавирусной пандемии</h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Комментарий </h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Могу ещё помочь со статистической обработкой</h2>
              <h2 className='h2-9 font-bold ml-[20px] mt-[10px]'>Вознаграждение</h2>
              <button className='btn-3 w-48 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px] mt-[10px]'>Процитировать других</button>
              <button className='btn-4 w-44 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px]'>Принять в соавторы</button>
              <button className='btn-5 w-44 h-8 bg-gray-200 mt-[50px] ml-[15px] rounded-xl text-gray-600'>первый длинный ключ</button>
              <button className='btn-6 w-36 h-8 bg-gray-200 ml-[20px] rounded-xl text-gray-600'>второй ключ</button>
              <img className='imgggg mt-[50px] ml-[20px]' src={Imgpart2} alt="" />
              <h2 className='h2-10 ml-[100px] mt-[-75px]'>Артём Белоусов</h2>
              <h2 className='h2-10 ml-[100px] mt-[2px]'>учёный (кандидат наук) <br /> Санкт-Петербургский горный</h2>
              <button className='btn-6 w-64 h-8 bg-gray-200 ml-[20px] mt-[30px] rounded-xl text-white'>Сотрудничество предложено</button>
            </div>

            <div className='card-1'>
              <button className='btn-1 w-44 h-8 bg-yellow-100 rounded-xl text-yellow-600 mt-[20px] ml-[10px]'>Цитировать других</button>
              <button className='btn-2 w-44 h-8 bg-green-100 rounded-xl text-green-600 ml-[20px]'>Neuro/Psycho</button>
              <h2 className='h2-9 font-bold ml-[20px] mt-[20px]'>Вопросы проектирования трансатлантического <br /> межнационального продуктопровода <br />   в условиях  нарастающей коронавирусной пандемии</h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Комментарий </h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Могу ещё помочь со статистической обработкой</h2>
              <h2 className='h2-9 font-bold ml-[20px] mt-[10px]'>Вознаграждение</h2>
              <button className='btn-3 w-48 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px] mt-[10px]'>Процитировать других</button>
              <button className='btn-4 w-44 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px]'>Принять в соавторы</button>
              <button className='btn-5 w-44 h-8 bg-gray-200 mt-[50px] ml-[15px] rounded-xl text-gray-600'>первый длинный ключ</button>
              <button className='btn-6 w-36 h-8 bg-gray-200 ml-[20px] rounded-xl text-gray-600'>второй ключ</button>
              <img className='imgggg mt-[50px] ml-[20px]' src={Imgpart2} alt="" />
              <h2 className='h2-10 ml-[100px] mt-[-75px]'>Артём Белоусов</h2>
              <h2 className='h2-10 ml-[100px] mt-[2px]'>учёный (кандидат наук) <br /> Санкт-Петербургский горный</h2>
              <button className='btn-6 w-64 h-8 bg-gray-200 ml-[20px] mt-[30px] rounded-xl text-white'>Сотрудничество предложено</button>
            </div>

            <div className='card-1'>
              <button className='btn-1 w-44 h-8 bg-yellow-100 rounded-xl text-yellow-600 mt-[20px] ml-[10px]'>Цитировать других</button>
              <button className='btn-2 w-44 h-8 bg-green-100 rounded-xl text-green-600 ml-[20px]'>Neuro/Psycho</button>
              <h2 className='h2-9 font-bold ml-[20px] mt-[20px]'>Вопросы проектирования трансатлантического <br /> межнационального продуктопровода <br />   в условиях  нарастающей коронавирусной пандемии</h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Комментарий </h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Могу ещё помочь со статистической обработкой</h2>
              <h2 className='h2-9 font-bold ml-[20px] mt-[10px]'>Вознаграждение</h2>
              <button className='btn-3 w-48 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px] mt-[10px]'>Процитировать других</button>
              <button className='btn-4 w-44 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px]'>Принять в соавторы</button>
              <button className='btn-5 w-44 h-8 bg-gray-200 mt-[50px] ml-[15px] rounded-xl text-gray-600'>первый длинный ключ</button>
              <button className='btn-6 w-36 h-8 bg-gray-200 ml-[20px] rounded-xl text-gray-600'>второй ключ</button>
              <img className='imgggg mt-[50px] ml-[20px]' src={Imgpart2} alt="" />
              <h2 className='h2-10 ml-[100px] mt-[-75px]'>Артём Белоусов</h2>
              <h2 className='h2-10 ml-[100px] mt-[2px]'>учёный (кандидат наук) <br /> Санкт-Петербургский горный</h2>
              <button className='btn-6 w-64 h-8 bg-gray-200 ml-[20px] mt-[30px] rounded-xl text-white'>Сотрудничество предложено</button>
            </div>

            <div className='card-1'>
              <button className='btn-1 w-44 h-8 bg-yellow-100 rounded-xl text-yellow-600 mt-[20px] ml-[10px]'>Цитировать других</button>
              <button className='btn-2 w-44 h-8 bg-green-100 rounded-xl text-green-600 ml-[20px]'>Neuro/Psycho</button>
              <h2 className='h2-9 font-bold ml-[20px] mt-[20px]'>Вопросы проектирования трансатлантического <br /> межнационального продуктопровода <br />   в условиях  нарастающей коронавирусной пандемии</h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Комментарий </h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Могу ещё помочь со статистической обработкой</h2>
              <h2 className='h2-9 font-bold ml-[20px] mt-[10px]'>Вознаграждение</h2>
              <button className='btn-3 w-48 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px] mt-[10px]'>Процитировать других</button>
              <button className='btn-4 w-44 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px]'>Принять в соавторы</button>
              <button className='btn-5 w-44 h-8 bg-gray-200 mt-[50px] ml-[15px] rounded-xl text-gray-600'>первый длинный ключ</button>
              <button className='btn-6 w-36 h-8 bg-gray-200 ml-[20px] rounded-xl text-gray-600'>второй ключ</button>
              <img className='imgggg mt-[50px] ml-[20px]' src={Imgpart2} alt="" />
              <h2 className='h2-10 ml-[100px] mt-[-75px]'>Артём Белоусов</h2>
              <h2 className='h2-10 ml-[100px] mt-[2px]'>учёный (кандидат наук) <br /> Санкт-Петербургский горный</h2>
              <button className='btn-6 w-64 h-8 bg-gray-200 ml-[20px] mt-[30px] rounded-xl text-white'>Сотрудничество предложено</button>
            </div>

            <div className='card-1'>
              <button className='btn-1 w-44 h-8 bg-yellow-100 rounded-xl text-yellow-600 mt-[20px] ml-[10px]'>Цитировать других</button>
              <button className='btn-2 w-44 h-8 bg-green-100 rounded-xl text-green-600 ml-[20px]'>Neuro/Psycho</button>
              <h2 className='h2-9 font-bold ml-[20px] mt-[20px]'>Вопросы проектирования трансатлантического <br /> межнационального продуктопровода <br />   в условиях  нарастающей коронавирусной пандемии</h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Комментарий </h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Могу ещё помочь со статистической обработкой</h2>
              <h2 className='h2-9 font-bold ml-[20px] mt-[10px]'>Вознаграждение</h2>
              <button className='btn-3 w-48 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px] mt-[10px]'>Процитировать других</button>
              <button className='btn-4 w-44 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px]'>Принять в соавторы</button>
              <button className='btn-5 w-44 h-8 bg-gray-200 mt-[50px] ml-[15px] rounded-xl text-gray-600'>первый длинный ключ</button>
              <button className='btn-6 w-36 h-8 bg-gray-200 ml-[20px] rounded-xl text-gray-600'>второй ключ</button>
              <img className='imgggg mt-[50px] ml-[20px]' src={Imgpart2} alt="" />
              <h2 className='h2-10 ml-[100px] mt-[-75px]'>Артём Белоусов</h2>
              <h2 className='h2-10 ml-[100px] mt-[2px]'>учёный (кандидат наук) <br /> Санкт-Петербургский горный</h2>
              <button className='btn-6 w-64 h-8 bg-gray-200 ml-[20px] mt-[30px] rounded-xl text-white'>Сотрудничество предложено</button>
            </div>

            <div className='card-1'>
              <button className='btn-1 w-44 h-8 bg-yellow-100 rounded-xl text-yellow-600 mt-[20px] ml-[10px]'>Цитировать других</button>
              <button className='btn-2 w-44 h-8 bg-green-100 rounded-xl text-green-600 ml-[20px]'>Neuro/Psycho</button>
              <h2 className='h2-9 font-bold ml-[20px] mt-[20px]'>Вопросы проектирования трансатлантического <br /> межнационального продуктопровода <br />   в условиях  нарастающей коронавирусной пандемии</h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Комментарий </h2>
              <h2 className='h2-9 font-medium ml-[20px] mt-[10px]'>Могу ещё помочь со статистической обработкой</h2>
              <h2 className='h2-9 font-bold ml-[20px] mt-[10px]'>Вознаграждение</h2>
              <button className='btn-3 w-48 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px] mt-[10px]'>Процитировать других</button>
              <button className='btn-4 w-44 h-8 bg-sky-200 rounded-xl text-sky-600 ml-[10px]'>Принять в соавторы</button>
              <button className='btn-5 w-44 h-8 bg-gray-200 mt-[50px] ml-[15px] rounded-xl text-gray-600'>первый длинный ключ</button>
              <button className='btn-6 w-36 h-8 bg-gray-200 ml-[20px] rounded-xl text-gray-600'>второй ключ</button>
              <img className='imgggg mt-[50px] ml-[20px]' src={Imgpart2} alt="" />
              <h2 className='h2-10 ml-[100px] mt-[-75px]'>Артём Белоусов</h2>
              <h2 className='h2-10 ml-[100px] mt-[2px]'>учёный (кандидат наук) <br /> Санкт-Петербургский горный</h2>
              <button className='btn-6 w-64 h-8 bg-gray-200 ml-[20px] mt-[30px] rounded-xl text-white'>Сотрудничество предложено</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ibrohim;