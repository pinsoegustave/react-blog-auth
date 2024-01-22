import React from 'react'

const Carousel = () => {
  return (
    <div className='mt-20 bg-red-200 block justify-between w-full md:flex'>
        <div className='p-4'>
            <img src="https://i.pinimg.com/736x/84/70/94/847094a5d2df67f4fc7a7a6b77bcfe7b.jpg" alt="" />
        </div>
        <div className='p-4 block gap-10 justify-between'>
            <h3 className='m-10 font-bold text-2xl'>Let's move around the world</h3>
            <div className='border border-black'></div>
            <p className='mt-4 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Repellat vero quibusdam exercitationem alias! Assumenda temporibus repellendus odio iusto dicta, sit corporis laudantium! 
                Corrupti, suscipit laudantium! Deleniti sequi numquam est libero.</p>
            <button className='btn-primary mt-10'>View More</button>
        </div>
      
    </div>
  )
}

export default Carousel