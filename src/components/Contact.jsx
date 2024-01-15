import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/236218eb-481b-4cb9-a34b-5422f71ee4f1' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600 text-gray-300'>Kontakta mig</p>
                <p className='text-gray-300 py-4'>Skicka formuläret eller skicka mig ett email - ivar.arnesson@gmail.com</p>
            </div>
            <input className='p-2 rounded-lg' type='text' placeholder='Namn' name='name' />
            <input className='my-4 p-2 rounded-lg' type='email' placeholder='Email' name='email' />
            <textarea className='p-2 rounded-lg' name='message' rows={10} placeholder='Meddelande...' />
            <button className='text-white border-2 hover:bg-gray-500 hover:border-gray-500 px-4 py-3 my-8 mx-auto flex items-center rounded-lg'>Skicka</button>
        </form>
    </div>
  )
}
