import React from 'react'
import ProjectDetails from '../layout/ProjectDetails'
import project1 from '../../assets/d11.jpg'
import project2 from '../../assets/d21.jpg'

const data =[
  {
    tittle:'Kings Hall Booking Software',
    condent:'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    details:['Client: Kings College','Date: Dec 2024','Technologies: React, Node.js, MongoDB'],
    vector:project1
  },
  {
    tittle:'SM Manpower Service',
    condent:'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    details:['Client: Abi shek','Date: Apr 2025','Technologies: React, Node.js, MongoDB'],
    vector:project2
  }
]
function Projects() {
  return (
    <>
      <section className="w-full p-5">
        <header className="w-full h-auto lg:py-12">
            <p className="text text-2xl text-center lg:text-left lg:text-3xl">Our work</p>
            <h2 className="heading text-3xl lg:text-6xl my-2.5 text-center lg:text-left">Highlighted Projects</h2>
            <p className="text text-lg text-justify lg:text-xl ">Explore our featured projects that demonstrate our expertise in delivering innovative software solutions tailored to client needs.</p>
        </header>
        <main className="w-full">
            {data.map((item,index)=>(
                <ProjectDetails
                key={index}
                tittle={item.tittle}
                condent={item.condent}
                details={item.details}
                vectorImg={item.vector}/>
            ))}
        </main>
      </section>
    </>
  )
}

export default Projects