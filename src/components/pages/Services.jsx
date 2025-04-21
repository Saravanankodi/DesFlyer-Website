import React from 'react'
import softwere from '../../assets/softwere.png'
import mobileapp from '../../assets/mobileapp.png'
import web from '../../assets/web.png'
import database from '../../assets/databae.png'

const data =[
    {
        image:softwere,
        tittle:'Software Development',
        condent:'Since our inception, we have become a trusted partner for businesses looking to enhance their operations through technology.'
    },
    {
        image:mobileapp,
        tittle:'Mobile App Development',
        condent:'Since our inception, we have become a trusted partner for businesses looking to enhance their operations through technology.'
    },
    {
        image:web,
        tittle:'Web Development',
        condent:'Since our inception, we have become a trusted partner for businesses looking to enhance their operations through technology.'
    },
    {
        image:database,
        tittle:'Data Base Management',
        condent:'Since our inception, we have become a trusted partner for businesses looking to enhance their operations through technology.'
    }
]
function Services() {
  return (
    <>
    <section className="w-full grid grid-cols-1 lg:grid-cols-4 place-items-center gap-5 p-5">
        {
            data.map((item,index)=>(
                <div className="w-full" key={index}>
                    <img src={item.image} alt="logo" className="w-auto max-h-96 m-auto" />
                    <h2 className="heading text-3xl text-center my-2.5">
                        {item.tittle}
                    </h2>
                    <p className="text text-lg text-justify">
                        {item.condent}
                    </p>
                </div>
            ))
        }        
    </section>    
    </>
  )
}

export default Services