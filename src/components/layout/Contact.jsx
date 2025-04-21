import React from 'react'
import ContactForm from './ContactForm'
import icon1 from '../../assets/d3.png'
import icon2 from '../../assets/d4.png'

function Contact() {
  return (
    <>
    <section className="w-full h-auto p-5 bg-primary flex flex-col lg:flex-row gap-5 items-center justify-center">
        <aside className="w-full lg:w-1/2 lg:p-10 flex flex-col items-center lg:items-start justify-center gap-5 ">
            <h2 className="heading w-fit text-4xl text-center lg:text-left lg:text-6xl">
                Let’s Connect! <br/> Discuss Your <br/> Software Needs
            </h2>
            <div className="hidden lg:visible w-fit lg:flex items-center justify-start gap-2.5">
              <div className=" w-fit flex item-center justify-center -space-x-3">
                <img src={icon2} alt="" className="w-12 h-12" />
                <img src={icon1} alt="" className="w-12 h-12" />
                <img src={icon2} alt="" className="w-12 h-12" />
                <img src={icon1} alt="" className="w-12 h-12" />
              </div>
              <span className="text text-lg text-black">1K+ Attendees</span>
            </div>
        </aside>
        <main className="w-full lg:w-1/2">
            <ContactForm/>
        </main>
        <div className="lg:hidden visible w-fit flex items-center justify-start gap-2.5">
              <div className=" w-fit flex item-center justify-center -space-x-3">
                <img src={icon2} alt="" className="w-10 h-10" />
                <img src={icon1} alt="" className="w-10 h-10" />
                <img src={icon2} alt="" className="w-10 h-10" />
                <img src={icon1} alt="" className="w-10 h-10" />
              </div>
              <span className="text text-lg text-black">1K+ Attendees</span>
          </div>
    </section>
    </>
  )
}

export default Contact