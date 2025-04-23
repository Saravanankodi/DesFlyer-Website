import React from 'react'
import mail from '../../assets/Post.png'
import phone from '../../assets/Phone.png'
import address from '../../assets/Location.png'
import Contact from '../layout/Contact'


function Contactus() {
  return (
    <>
    <section className="w-full">
        <header className="w-full p-5 lg:flex">
            <aside className="w-full lg:w-1/2 lg:border-r-2 border-primary my-5">
              <p className="text text-2xl text-center lg:text-left">Contact Us</p>
              <h2 className="heading text-3xl text-center lg:text-left lg:text-6xl">We're Here to Help</h2>
              <p className="text text-lg lg:text-xl text-center lg:text-left">Reach out to us for inquiries or support. We’re eager to assist you!</p>
            </aside>
            <aside className="w-full lg:w-1/2 lg:p-5">
              <div className="flex gap-5 items-center">
                <img src={mail} alt="icon" className="w-6 h-6" />
                <a href="mailto:desflyer.tech@gmail.com" className="text text-lg lg:text-xl">desflyer.tech@gmail.com</a>
              </div>
              <div className="flex  gap-5 items-center">
                <img src={phone} alt="icon" className="w-6 h-6" />
                <a href="tel:+919092579460" className="text text-lg lg:text-xl">9092579460</a>
              </div>
              <div className="flex gap-5 items-center">
                <img src={address} alt="icon" className="w-6 h-6" />
                <p className="text text-lg lg:text-xl">DesFlyer- Incubation Cell Kings College of Engineering-6142003</p>
              </div>
            </aside>
        </header>
        <main className="w-full my-5">
          <Contact/>
        </main>
    </section>
    </>
  )
}

export default Contactus