import React from 'react'
import headerImg from '../../assets/header.jpg'
function Header() {
  return (
    <>
    <section className="w-full h-auto p-5 lg:max-h-screen lg:grid grid-cols-2 grid-rows-2 place-items-center lg:p-5">
        <h2 className="heading text-center text-4xl lg:text-6xl lg:leading-normal lg:text-left col-start-2">Innovative Software Solutions for Your 
        Business</h2>
        <img src={headerImg} alt="header vector " className="h-auto w-full p-5 rounded-lg m-auto row-start-1 col-start-1 row-span-2" />
        <main className="w-full h-full col-start-2 align-top">
            <p className="text text-justify text-lg">
            DesFlyer delivers cutting-edge software solutions tailored to your unique business needs. We specialize in creating robust, salable, and user-friendly applications that drive growth and efficiency. Let’s build the future together.
            </p>
            <div className="btns flex flex-col lg:flex-row gap-2.5 w-fit my-5 lg:mx-0 m-auto ">
                <a href="" className="btn-primary text text-2xl m-auto">
                    Our Service
                </a>
                <a href="" className="btn-secondary text text-2xl m-auto" >
                    View Portfolio
                </a>
            </div>
        </main>
    </section>
    </>
  )
}

export default Header