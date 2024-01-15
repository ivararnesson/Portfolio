import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
                        Om mig
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold'>
                        <p>Hej Mitt namn är Ivar, kul att du är här och kollar min portfolio.</p>
                    </div>
                <div>
                    <p>För närvarande studerar jag på TUC Linköping med inriktning mot systemutvecklare och .NET-teknologier. Denna inriktning, tillsammans med mina praktiska erfarenheter tror jag skulle passa bra in hos er.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
