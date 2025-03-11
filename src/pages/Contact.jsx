import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full'>
      <div className=' bg-slate-300 text-black'>
        <div className='px-8 py-32 m-auto text-center'>
          <h1 className='text-5xl lg:text-7xl leading-[1.5] font-semibold py-8'>Contact Us</h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className='max-w-5xl max-h-max  mx-auto px-8 py-20 flex gap-8'>
        <div className='hidden sm:block w-full h-[500px]'>
          <img src="../assets/contact-2.png" alt="" />
        </div>
        <div className='w-full py-8'>
          <form className='w-full flex flex-col gap-2 text-sm'>
            <label htmlFor="name"
            className='text-gray-900 font-semibold mt-4 pb-2'>Full Name</label>
            <input type="text" name="name" 
            id="name" 
            placeholder='Enter your full name'
            className='contact-form_input' />
            
            <label htmlFor="email"
            className='text-gray-900 font-semibold mt-4 pb-2'>Email</label>
            <input type="text" name="email" 
            id="email" 
            placeholder='example@email.com' 
            className='
            contact-form_input'/>

            <label htmlFor="subject"
            className='text-gray-900 font-semibold mt-4 pb-2'>Subject</label>
            <input type="text" name="subject" 
            id="subject" 
            placeholder='Your Subject' 
            className='contact-form_input' />

            <label htmlFor="message"
            className='text-gray-900 font-semibold mt-4 pb-2'>Message</label>
            <input type="text" name="message" 
            id="message" 
            placeholder='Leave us a message'
            width={1}
            className='contact-form_input mb-4 ' />

            <button className='w-full mt-8 py-2 px-4 bg-blue-500 text-gray-50 tracking-wide' >
              Submit
            </button>
          </form>
        </div>
      </div>
  </div>
  )
}

export default Contact