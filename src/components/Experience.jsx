import React from 'react';
import Javascript from '../assets/JavaScript-logo.png';
import CSS from '../assets/css.png';
import Csharp from '../assets/Csharp.png';
import HTML from '../assets/html.png';
import ReactLogo from '../assets/react.png';
import Github from '../assets/github.png';

const IMAGE_PATH = process.env.PUBLIC_URL + '/static/media/';

export const Experience = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Erfarenheter</p>
          <p className='py-4'>Dessa har jag kodat med</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={IMAGE_PATH + 'JavaScript-logo.266bd9fb2663dcc057b4.png'} alt='Javascript' />
            <p>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={IMAGE_PATH + 'html.2ba4fabc69a89a8f71e6.png'} alt='HTML' />
            <p>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={IMAGE_PATH + 'css.69a82c2d9e45c933a9cb.png'} alt='CSS' />
            <p>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={IMAGE_PATH + 'react.0cf951a69d8e58f83f9d.png'} alt='React' />
            <p>REACT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Csharp} alt='Csharp' />
            <p>C#</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={IMAGE_PATH + 'github.3b9e32903aa89111875d.png'} alt='Github' />
            <p>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};
