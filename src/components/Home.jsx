import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-white'>Hej mitt namn är</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-gray-400'>Ivar Arnesson</h1>
          <h2 className='text-3xl sm:text-7xl font-bold text-gray-600'>Student systemutveckling.net </h2>
          <p className='text-white py-4 max-w-[700px]'>Som tidigare professionell utövare av ishockey på elitnivå och med sex års erfarenhet 
            som barnskötare, har jag utvecklat starka färdigheter inom teamarbete, presshantering och prestation. 
            Nu har jag inlett studier som systemutvecklare och kombinerar mina tidigare erfarenheter 
            med en passion för teknik och problemlösning</p>
            <div>
              <button className='text-white group border px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:border-gray-600 rounded-lg'>Info om mig och mina erfarenheter 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
              </span>
              </button>
            </div>
        </div>
    </div>
  )
}
