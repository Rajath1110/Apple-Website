import React from 'react'
import gsap from 'gsap' 
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import VedioCarousel from './VedioCarousel'

function Highlights() {

    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0 })
        gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})
       
      }, [])
  return (
    <section id='#highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full md:flex items-end justify-center'>
                <h1 id="title" className="section-heading">Get the highlights</h1>
                <div className='flex flex-wrap items-end gap-5 '>
                    <p className='link'>Watch the film
                        <img src={watchImg} alt='watch' className='ml-2'/>
                    </p>
                    <p className='link'>Watch the event
                        <img src={rightImg} alt='watch' className='ml-2'/>
                    </p>
                   

                    <VedioCarousel/>

                </div>
                
            </div>

        </div>


    </section>
  )
}

export default Highlights
