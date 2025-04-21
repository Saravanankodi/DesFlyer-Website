import React from 'react'
import logo from '../../assets/Logo.png'
import instagram from '../../assets/Instagram.png'
import linkedin from '../../assets/LinkedIn.png'
import facebook from '../../assets/Facebook.png'
import twitter from '../../assets/TwitterX.png'
import whatapp from '../../assets/WhatsApp.png'

function Footer() {
  return (
    <>
    <footer className="w-full text-center lg:text-left lg:max-h-96 bg-white text-black p-5 border-t-2 border-primary">
        <header className="w-full">
            <img src={logo} alt="logo" className="w-fit h-12 m-auto lg:m-0" />
        </header>
            <main className="w-full grid grid-cols-1 lg:grid-cols-4 place-items-center place-content-center gap-5">
                <div className="w-fit">
                    <p className="heading text-3xl">Email</p>
                    <a href="mailto:desflyer.tech@gmail.com" className="text text-lg">desflyer.tech@gmail.com</a>
                    <p className="heading text-3xl">Phone no</p>
                    <a href="tel:+919092579460" className="text text-lg">9092579460</a>
                </div>
                <div className="w-fit hidden lg:block">
                    <p className="text text-xl">About Us</p>
                    <p className="text text-xl">Services</p>
                    <p className="text text-xl">Portfolio</p>
                </div>
                <div className="w-fit hidden lg:block">
                    <p className="text text-xl">Customer Development</p>
                    <p className="text text-xl">Mobile Apps</p>
                    <p className="text text-xl">Web Design</p>
                </div>
                <div className="w-fit">
                    <h2 className="heading text-3xl">Follow as  on social media</h2>
                    <div className="w-full flex items-center justify-evenly">
                        <img src={linkedin} alt="" className="w-12 h-12" />
                        <img src={whatapp} alt="" className="w-12 h-12" />
                        <img src={instagram} alt="" className="w-12 h-12" />
                        <img src={facebook} alt="" className="w-12 h-12" />
                        <img src={twitter} alt="" className="w-12 h-12" />
                    </div>
                </div>
            </main>
            <div className="w-full lg:flex items-center justify-between border-t-2 pt-5 border-review">
                <p className="text text-lg lg:text-xl text-gray-500">© 2025 Desflyer. All rights reserved.</p>
                <p className="text text-lg lg:text-xl text-gray-500">Designed by DesFlyer</p>
            </div>
    </footer>
    </>
  )
}

export default Footer