import React from 'react'
import history from '../../assets/Light.png'
import mission from '../../assets/Goal.png'
import team from '../../assets/Users.png'
import DetailesCard from './DetailesCard'

const data =[
  {
    tittle:"Our Vision",
    condent:"Desflyer was established with a vision to enhance business operations through technology. Over the years, we have become a trusted partner for many companies in their digital transformation journey.",
    icon: history
  },
  {
    tittle:"Our Mission",
    condent:"We aim to deliver exceptional software products and services that align with our clients' unique goals, ensuring efficiency and effectiveness in their operations.",
    icon: mission
  },
  {
    tittle:"Meet Our Team",
    condent:"our expert team is dedicated to delivering innovative solutions. Led by founder Saravanan K, a skilled UI/UX designer with 3+ years of experience, we prioritize creativity, quality, and timely delivery.",
    icon: team
  }
]
function Journey() {
  return (
    <>
    <section className="w-full h-auto p-5 border-y-2 lg:p-9 lg:py-14 border-primary">
        <header className="w-full lg:w-3/4">
            <h2 className="heading text-3xl text-center lg:text-left lg:text-58">
              Discover DesFlyer  Journey
            </h2>
            <p className="text lg:w-4/5 lg:my-5 h-fit w-fit text-lg lg:text-xl text-justify">
            Founded in 2024, DesFlyer has been dedicated to providing innovative software solutions that empower businesses. Our mission is to deliver high-quality products tailored to your needs.
            </p>
        </header>
        <main className="w-full h-auto block lg:grid grid-cols-3 lg:p-5 gap-12 lg:items-start ">
          {data.map((item,index)=>(
              <DetailesCard
              key={index}
              tittle={item.tittle}
              condent={item.condent}
              icon={item.icon}/>
              ))}
        </main>
    </section>
    </>
  )
}

export default Journey