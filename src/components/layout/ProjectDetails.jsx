import React from 'react'
import hash from '../../assets/Hastag.svg'
const ProjectDetails = ({tittle,condent,details,vectorImg}) => {
  return (
    <>
    <section className="w-full my-2.5 pt-5 lg:p-0 lg:flex items-center justify-center gap-5 dark:border-white border-black  border-t-2">
      <main className="w-full lg:w-3/5">
        <h2 className="heading text-3xl lg:my-5 lg:text-5xl text-center lg:text-left">
          {tittle}
        </h2>
        <p className="text text-xl text-justify lg:my-5">
          {condent}
        </p>
        <ul className="w-full list lg:w-2/3 text-center lg:grid place-items-center grid-cols-2  ">
          {details.map((item,index)=>(
            <div className={index === details.length -1 ? 'col-span-2 text text-lg flex':'flex text text-lg'}>
              <img src={hash} alt="icon" className="w-6" />
              <li key={index} >
              {item}
            </li>
            </div>
          ))}
        </ul>
      </main>
      <aside className="w-full lg:w-2/5">
          <img src={vectorImg} alt="project" className="w-full lg:p-10" />
      </aside>
    </section>
    </>
  )
}

export default ProjectDetails