import React from 'react'

export const DetailesCard = ({icon,tittle,condent}) => {
  return (
    <>
    <section className="w-full h-auto m-auto">
        <header className="w-full h-fit">
            <img src={icon} alt="icon" className="w-12 h-12 block m-auto lg:m-0" />
            <h2 className="heading hidden lg:block text-4xl">
                {tittle}
            </h2>
        </header>
        <main className="w-full">
            <p className="text text-justify text-lg">
                {condent}
            </p>
        </main>
    </section>
    </>
  )
}

export default DetailesCard