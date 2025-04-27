import React from 'react'
import headerImg from '../../assets/header.jpg'
function Header() {
  return (
    <>
    <section className="w-full h-600 lg:grid grid-cols-[500px_1fr] gap-5 grid-rows-2 lg:px-14 lg:py-14">
        <h2 className="heading text-center text-4xl lg:text-64 leading-tittle lg:leading-head lg:text-left col-start-2">Innovative Software <br /> Solutions for Your <br />
        Business</h2>
        <div className="w-full lg:h-500 lg:w-500 rounded-lg row-start-1 col-start-1 row-span-2">
            <img src={headerImg} alt="header vector " className="h-370 w-auto m-auto lg:h-500 lg:w-500 rounded-lg block" />
        </div>
        <main className="w-full h-full col-start-2 align-top">
            <p className="text text-justify text-lg">
            DesFlyer delivers cutting-edge software solutions tailored to your unique business needs. We specialize in creating robust, salable, and user-friendly applications that drive growth and efficiency. Let’s build the future together.
            </p>
            <div className="btns flex flex-col lg:flex-row lg:gap-8 w-fit mt-12 lg:mx-0 m-auto ">
                <a href="" className="btn-primary text text-white hov text-26 m-auto">
                    Our Service
                </a>
                <a href="" className="btn-secondary text text-26 m-auto" >
                    View Portfolio
                </a>
            </div>
        </main>
    </section>
    </>
  )
}

export default Header