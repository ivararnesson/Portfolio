import Javascript from '../../static/media/JavaScript-logo.266bd9fb2663dcc057b4.png';
import CSS from '../../static/media/Css.png';
import Csharp from '../../static/media/Csharp.png';
import HTML from '../../static/media/html.png';
import ReactLogo from '../../static/media/react.png';
import Github from '../../static/media/github.png';

export const Experience = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Erfarenheter</p>
          <p className='py-4'>Dessa har jag kodat med</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt='Javascript' />
            <p>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML' />
            <p>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS' />
            <p>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactLogo} alt='React' />
            <p>REACT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Csharp} alt='Csharp' />
            <p>C#</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='Github' />
            <p>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};
