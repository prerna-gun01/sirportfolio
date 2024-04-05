"use client"
import React, { useState } from 'react'
import Style from "../css/home.module.css"
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
const page = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(name, surname, message, service, email, phone);

    const formData = {
      name,
      surname,
      message,
      service,
      email,
      phone
    };

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  }


  return (
    <div className=' bg-blue-950'>
      <header class="text-white body-font">
        <div class="mx-auto flex flex-wrap  flex-col px-20 py-10 md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="./sirLogo.png" alt="" className='w-20' />
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">About</a>
            <a class="mr-5 hover:text-gray-900">Service</a>
            <a class="mr-5 hover:text-gray-900">Work</a>
            <a class="mr-5 hover:text-gray-900">Contact</a>
            <a class="mr-5 hover:text-gray-900">Experience</a>
          </nav>
          <button class="inline-flex items-center  border py-1 px-3 focus:outline-none hover:bg-blue-900 rounded text-base mt-4 md:mt-0">Download CV
          </button>
        </div>
      </header>

      {/* image */}
      <div className={`text-white ${Style.backgroundImage} border `}>
        <div className="px-20 py-32 flex justify-around border mb-32">
          <div className="">
            <h2 className={`  ${Style.fontNico}`}>
              Developer
            </h2>
            <div className="pt-20">
              <h2 className=' text-3xl leading-10'>
                Hi there, I am <span className='font-semibold'>Pramod</span>!
                <br />
                And I am a Web Developer.
              </h2>
              <p className={`${Style.width} pt-10 text-2xl font-extralight leading-10`}>
                Office ipsum you must be muted. Enable hop it cloud picture metal digital eco-system. Nobody managing social Office ipsum you must be muted.
              </p>
            </div>
          </div>
          <div className="p-1 pt-20 rounded-lg w-fit">
            <img src="./Photo (1).png" alt="" className='w-60 ' />
          </div>

        </div>
      </div>

      {/* skills */}
      <div className={`bg-blue-950 px-20 py-10 mt-20 w-full ${Style.skew} h-[120vh] relative `}>
        <div className="">
          <h2 className={`${Style.skewr}  ${Style.textColor} font-semibold text-3xl w-fit absolute top-36 border rounded-md right-20 px-16 py-5`}>CV</h2>
          <div className={`${Style.skewr}  mt-32 `}>

            <div className="flex justify-between gap-8 my-10">
              <div className=" text-3xl font-semibold w-[20%] text-right">
                <h2 className={`px-10 ${Style.textColor}`}>Services</h2>
              </div>
              <div className=' w-[70%] grid grid-cols-2 grid-rows-2 gap-y-10'>
                <h2 className={`font-semibold text-right ${Style.textColor}`}>Web Devlopment</h2>
                <h2 className={`font-semibold text-right ${Style.textColor}`}>Website Design</h2>
                <h2 className={`font-semibold text-right ${Style.textColor}`}>Graphic Design</h2>
                <h2 className={`font-semibold text-right ${Style.textColor}`}>Logo Design</h2>
              </div>
            </div>

            <div className="flex justify-between gap-20 my-10">
              <div className=" text-3xl font-semibold w-[20%] text-right">
                <h2 className={`px-10 ${Style.textColor}`}>Skills</h2>
              </div>
              <div className=' w-[70%] flex justify-between'>
                <h2 className={`font-semibold ${Style.textColor}`}>
                  <SiMongodb className='inline mx-2' />
                  Mongodb</h2>
                <h2 className={`font-semibold ${Style.textColor}`}>
                  <SiExpress className='inline mx-2' />
                  Express.js</h2>
                <h2 className={`font-semibold ${Style.textColor}`}>
                  <FaReact className='inline mx-2' />
                  React</h2>
                <h2 className={`font-semibold ${Style.textColor}`}>
                  <FaNodeJs className='inline mx-2' />
                  Node.js</h2>
              </div>
            </div>
          </div>
          <div className={` flex justify-center `}>
            {/* Add "flex justify-center" classes to horizontally center the h2 */}
            <h2 className={`${Style.skewr} ${Style.fontMont} border  text-white font-semibold text-3xl w-fit absolute top-[60%] rounded-md px-16 py-5 `}>
              Work
            </h2>
          </div>
        </div>
      </div>

      {/* work */}
      <div className={`relative `}>
        <div className={` ${Style.backgroundImage} -mb-20 w-full ${Style.skew}`}>
          <section class="text-gray-600 body-font px-20">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex space-x-20 -m-4">

                <div class={`${Style.skewr} p-4 md:w-1/3  space-y-20`}>
                  <div class="h-fit border-2 w-fit border-gray-200  border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 object-cover object-center" src="https://dummyimage.com/70x20" alt="blog" />
                  </div>
                  <div class="h-fit border-2 w-fit border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 object-cover object-center" src="https://dummyimage.com/70x20" alt="blog" />
                  </div>
                </div>

                <div class={`${Style.skewr} p-4 md:w-1/3 space-y-20`}>
                  <div class="h-fit border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                  </div>
                  <div class="h-fit border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                  </div>
                </div>

                <div class={`${Style.skewr} p-4 md:w-1/3  space-y-20`}>
                  <div class="h-fit border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                  </div>
                  <div class="h-fit border-2 w-fit border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 object-cover object-center" src="https://dummyimage.com/70x20" alt="blog" />
                  </div>
                </div>


              </div>
            </div>
          </section>
        </div>

      </div>


      {/* Form */}
      {/* <div className="">
        <form onSubmit={handleFormSubmit}>
          <div className={`grid grid-cols-3 grid-rows-2 gap-1 ${Style.textp} p-2`}>


            <div className={`${Style.line} p-1`}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-full bg-transparent focus:outline-0' />
            </div>
            <div className={`${Style.line} p-1`}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full bg-transparent focus:outline-0' />
            </div>
            <div className={`${Style.line} p-1`}>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Tel No.' className='w-full bg-transparent focus:outline-0' />
            </div>

          </div>
          <div className={`w-full  mx-2 p-1`}>
            <select className='bg-transparent w-full focus:outline-none' defaultValue={'nothing'} onChange={(e) => setService(e.target.value)}>
              <option value="nothing" className='bg-gray-600' disabled >Choose Service</option>
              <option value="Graphic Design" className='bg-gray-600'>Graphic Design</option>
              <option value="Motion Graphics" className='bg-gray-600'>Motion Graphics</option>
              <option value="Video Editing" className='bg-gray-600'>Video Editing</option>
              <option value="Illustrations" className='bg-gray-600'>Illustrations</option>
              <option value="3D Models" className='bg-gray-600'>3D Models</option>
            </select>
          </div>
          <div className={` mx-2 p-1`}>
            <textarea rows="2" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='bg-transparent focus:outline-none w-full p-1'></textarea>
          </div>
          <div className={`p-1 mx-2`}>
            <button className='' type='submit'>Submit</button>
          </div>
        </form>
      </div> */}


      {/* <div className={`w-full ${Style.backgroundImage}`}>
      </div> */}

      {/* <div className={`w-full ${Style.backgroundImage}`}>
      </div> */}

      < footer class="text-gray-600 body-font " >
        <div class="mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="./sirLogo.png" alt="" className='w-40' />

            </a>

          </div>
          <div class="flex-grow flex justify-end md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>

          </div>
        </div>
      </footer>
    </div >
  )
}

export default page
