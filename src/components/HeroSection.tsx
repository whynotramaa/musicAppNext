import React from 'react'
import { Spotlight } from './ui/spotlight-new'

function HeroSection() {
  return (
    <div className="h-auto md:h-[50rem] rounded-md flex flex-col items-start justify-center relative overflow-hidden mx-auto sm:py-[10] ">
        <div className="p-4 z-10 w-full text-center">
            <Spotlight />   
            <h1 className="text-4xl mb-5 font-bold">Explore Our Courses</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde quasi sint vel nisi ipsum eos, magni blanditiis nulla, veritatis tenetur expedita est necessitatibus nihil sed natus laudantium laborum culpa.</h1>
            <div>
                <h2 className='mt-5'>Buy Now</h2>
            </div>
        </div>
    </div>
  )
}

export default HeroSection