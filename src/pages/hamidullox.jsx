import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Crop54Icon from '@mui/icons-material/Crop54';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import SmsIcon from '@mui/icons-material/Sms';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';

function Hamidullox() {
  return (
    <div>
        <div className="mt-[100px] ml-[100px] text-[40px] text-orange-950">
            <h1>Создание заявки</h1>
        </div>

        <div className='flex justify-between'>
            <div className=' mt-[100px] ml-[100px]'>
                <button className='w-[300px] h-[50px] bg-slate-400 rounded-[5px] text-slate-600'>Я заказчик</button>
                <button className='w-[250px] h-[50px] bg-slate-100 rounded-[5px] text-slate-400'>Я исполнитель</button>
            </div>
            <div className='mt-[120px] mr-[50px]'>
            <h3>Для публикации заявки вам необходимо <span className='text-blue-400'>зарегистрироваться.</span></h3>
            </div>
        </div>

        <div>
            <div className='mt-[200px] ml-[100px] flex gap-[650px] text-blue-400 text-[20px]'>
              <h3><ArrowForwardIcon/>Я хочу</h3>
              <h3><ArrowBackIcon/>Я предлагаю</h3>
            </div>

            <div className='flex gap-[100px] mt-[50px] ml-[100px] text-[20px]'>

                <div>
                <h3><Crop54Icon />Повысить цитируемость своих работ</h3>
                <h3><Crop54Icon />Стать соавтором</h3>
                <h3><Crop54Icon />Заказать исследования</h3>
                <h3><Crop54Icon />Заказать работу c текстом и графикой</h3>
                <h3><Crop54Icon />Найти эксперта</h3>
                <h3><Crop54Icon />Повысить цитируемость своих работ</h3>
                <h3><Crop54Icon />Стать соавтором</h3>
                <h3><Crop54Icon />Заказать исследования</h3>
                <h3><Crop54Icon />Заказать работу c текстом и графикой</h3>
                <h3><Crop54Icon />Найти эксперта</h3>
                </div>

                <div>
                <h3><Crop54Icon />Повысить цитируемость своих работ</h3>
                <h3><Crop54Icon />Стать соавтором</h3>
                <h3><Crop54Icon />Заказать исследования</h3>
                <h3><Crop54Icon />Заказать работу c текстом и графикой</h3>
                <h3><Crop54Icon />Найти эксперта</h3>
                <h3><Crop54Icon />Повысить цитируемость своих работ</h3>
                <h3><Crop54Icon />Стать соавтором</h3>
                <h3><Crop54Icon />Заказать исследования</h3>
                <h3><Crop54Icon />Заказать работу c текстом и графикой</h3>
                <h3><Crop54Icon />Найти эксперта</h3>
                </div>

                <div>
                <h3><Crop54Icon />Повысить цитируемость своих работ</h3>
                <h3><Crop54Icon />Стать соавтором</h3>
                <h3><Crop54Icon />Заказать исследования</h3>
                <h3><Crop54Icon />Заказать работу c текстом и графикой</h3>
                <h3><Crop54Icon />Найти эксперта</h3>
                <h3><Crop54Icon />Повысить цитируемость своих работ</h3>
                <h3><Crop54Icon />Стать соавтором</h3>
                <h3><Crop54Icon />Заказать исследования</h3>
                <h3><Crop54Icon />Заказать работу c текстом и графикой</h3>
                <h3><Crop54Icon />Найти эксперта</h3>
                </div>

            </div>

            <ExpandCircleDownIcon className='text-blue-400 ml-[95%] mt-[50px]'/>

        </div>

        <div className='mt-[100px] ml-[100px]'>
          <h3 className='text-blue-400 text-[20px]'><SmsIcon/>Описание работы</h3>
          <input type="Введите описание..." placeholder='Введите описание...' className='w-[1000px] h-[100px] border-black bg-slate-300 mt-[20px]'/>
        </div>

        <div className='gap-[20px] flex mt-[100px] ml-[100px]'>

          <div>
            <h3 className='text-blue-400'><FilePresentIcon/>Ключевые слова</h3>
            
            <div className='mt-[30px] gap-[10px] flex'>
              <button className='w-[350px] h-[30px] bg-orange-500 rounded-[25px] text-black'>первый и очень сильно длинный ключ <RemoveCircleOutlineIcon/></button>
              <button className='w-[134px] h-[30px] bg-orange-500 rounded-[25px] text-black'>второй ключ <RemoveCircleOutlineIcon/></button>
            </div>

            <div className='mt-[10px] gap-[10px] flex'>
              <button className='w-[134px] h-[30px] bg-orange-500 rounded-[25px] text-black'>третий ключ <RemoveCircleOutlineIcon/></button>
              <button className='w-[150px] h-[30px] bg-orange-500 rounded-[25px] text-black'>четвертый ключ <RemoveCircleOutlineIcon/></button>
              <button className='w-[134px] h-[30px] bg-orange-500 rounded-[25px] text-black'>пятый ключ<RemoveCircleOutlineIcon/></button>
            </div>

            <div className='mt-[10px]'>
              <button className='w-[134px] h-[30px] bg-orange-500 rounded-[25px] text-black'>шестой ключ<RemoveCircleOutlineIcon/></button>
            </div>

          </div>

          <div>
            <h3 className='text-blue-400'><DataSaverOffIcon/>Область знаний</h3>

              <div className='mt-[10px] flex gap-[20px] text-[18px]'>
                <ul>
                  <li><Crop54Icon />Biology/Genetics</li>
                  <li><Crop54Icon />Neuro/Psycho</li>
                  <li><Crop54Icon />Medicine/Pharma</li>
                  <li><Crop54Icon />Chemistry</li>
                </ul>

                <ul>
                  <li><Crop54Icon />Math/Computer</li>
                  <li><Crop54Icon />Physics/Astronomy</li>
                  <li><Crop54Icon />Engineering/Material</li>
                  <li><Crop54Icon />Earth/Environment</li>
                </ul>

                <ul>
                <li><Crop54Icon />Social</li>
                <li><Crop54Icon />Humanities/Arts</li>
                <li><Crop54Icon />Management/Economics</li>
                </ul>

            </div>
            
          </div>

          <div className='ml-[20px]'>
            <h3 className='text-blue-400'>Срок исполнения</h3>
            <h3 className='text-[25px]'>_ / _ / __ <span className='ml-[30px]'><CalendarMonthIcon/></span></h3>
          </div>
        </div>

        <h3 className='ml-[100px] mt-[30px] text-gray-400'>Пример:  Первый ключ;  Второй ключ;</h3>

        <div className='flex gap-[900px] text-[20px] mt-[60px] ml-[100px] justify-center'>
        <button className='text-blue-400 hover:text-black'><VisibilityOffIcon />Приватная заявка</button>
    
        <button className='text-blue-400 hover:text-black'><DeleteIcon/>Удалить заявку</button>
        </div>


        <div className='mt-[100px] ml-[100px]'>
          
          <div className='flex gap-[50px] justify-center'>
              <button className='w-[255px] h-[50px] border-blue-400 border-[3px] rounded-[25px] text-blue-500'>+ Добавить Заявку</button>
              <button className='w-[419px] h-[50px] rounded-[25px] bg-blue-400 text-white'>Зарегистрироваться и Опубликовать</button>
          </div>

              <h3 className='text-center text-gray-500 mt-[50px]'>Вам не придется заново заполнять форму, после регистрации <br /> ваша заявка будет отправлена на публикацию. </h3>
        </div>

    </div>
  )
}

export default Hamidullox