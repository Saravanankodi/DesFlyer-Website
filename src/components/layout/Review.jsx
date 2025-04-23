import React from 'react'
import star from '../../assets/Star.png'
import icon1 from '../../assets/d3.png'
import icon2 from '../../assets/d4.png'

const data = [
    {
        reviwe:"DesFlyer software streamlined our operations,boosting efficiency and productivity.A game-changer for our business growth!",
        icon:icon1
    },
    {
        reviwe:"DesFlyer customer support is exceptional! They’re always responsive and helpful, ensuring a smooth user experience.",
        icon:icon2
    },
    {
        reviwe:"DesFlyer data analytics tools  provided invaluable insight, enabling  us to make informed decisions.",
        icon:icon1
    }
]


function Review() {
  return (
    <>
    <section className="w-full h-500 bg-review text-black p-5 lg:flex items-center justify-center gap-5">
        <header className="w-full lg:w-2/5 lg:p-5 ">
            <h2 className="heading text-3xl text-center my-2.5 lg:text-left lg:text-5xl">Client Success</h2>
            <p className="text text-lg text-justify">
            Discover how DesFlyer has transformed business. Read Finished accounts of our software solutions’ impact and Success stories.
            </p>
            <div className="hidden w-fit lg:flex lg:visible items-center justify-center gap-2.5 ">
                <img src={star} alt="reviwe" className="w-12" />
                <img src={star} alt="reviwe" className="w-12" />
                <img src={star} alt="reviwe" className="w-12" />
                <img src={star} alt="reviwe" className="w-12" />
                <img src={star} alt="reviwe" className="w-12" />
            </div>
        </header>
        <main className="cards w-full my-2.5 lg:m-0 lg:w-3/5 flex flex-col gap-5 lg:gap-10">
            {data.map((item,index)=>(
                <div className="card h-100 w-fit lg:max-w-card py-2 px-1 lg:p-2 rounded-xl lg:rounded-2xl flex items-center justify-center gap-2.5 lg:odd:self-start lg:even:self-end" key={index}>
                <aside className="w-1/3 lg:w-20">
                    <img src={item.icon} alt="icon" className="w-full lg:w-16" />
                </aside>
                <main className="w-auto">
                    <p className="text text-xs lg:text-lg text-justify">
                        {item.reviwe}
                    </p>
                </main>
            </div>
            ))}
        </main>
        <div className="lg:hidden w-full flex visible items-center justify-center gap-2.5 m-auto">
            <img src={star} alt="reviwe" className="w-9" />
            <img src={star} alt="reviwe" className="w-9" />
            <img src={star} alt="reviwe" className="w-9" />
            <img src={star} alt="reviwe" className="w-9" />
            <img src={star} alt="reviwe" className="w-9" />
        </div>
    </section>
    </>
  )
}

export default Review