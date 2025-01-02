// components
import Circles from '/components/Circles';
import ParticlesContainer from '../../components/ParticlesContainer';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { useState } from 'react';



const Contact = () => {
  const [message, setMessage] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('submitting')
  
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        event.target.reset(); // Clear the form
        setMessage('Message sent!')
      } else {
        const { error } = await response.json();
        setMessage(`Failed to send message: ${error}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
  };
  
  
  return (
    <div className='h-full bg-[#19471f] bg-gradient-to-r from-primary/10 via-black/50 to-black/10 relative'>
      {/* Particles */}
      <ParticlesContainer className="absolute top-0 left-0 w-full h-full z-0" />
      
      {/* Content */}
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative z-10'>
        {/* Text & Form */}
        <div className='flex flex-col w-full max-w-[700px] bg-white/10 p-8 rounded-lg shadow-lg'>
          {/* Text */}
          <h2 className='h2 text-center mb-12'>
            Let's <span className='text-[#a39968]'>connect.</span>
          </h2>

          {/* Form */}
          <form
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            {/* Group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='input flex-1 border border-white/20 bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39968]'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='input flex-1 border border-white/20 bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39968]'
                required
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className='input border border-white/20 bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39968]'
              required
            />
            <textarea
              name='message'
              placeholder='Message'
              className='textarea border border-white/20 bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39968] resize-none'
              rows='6'
              required
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#a39968] hover:bg-[#a39968] hover:text-white'
            >
              <span>Let's talk</span>
              <BsArrowRight className='ml-2' />
            </button>
          </form>
          {message.length > 0 && (<p className='text-center text-white'>{message}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Contact;
