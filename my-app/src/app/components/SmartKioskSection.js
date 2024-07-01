import React from 'react'
import Link from 'next/link'
import Right from "../icons/Right";

const SmartKioskSection = (props) => {
  return (
    <div {...props}>
      <section className='container mx-auto py-36'>
        <div className='tracking-wider text-4xl'>
          <span>Find the perfect </span> <br />
          <span className='font-bold inline-block my-3 text-6xl text-red-500'>Smartest Kiosk</span><br />
          <span>solution for your business needs</span>
        </div>
        <div>
          <Link className='mt-10 mr-6 border-2 border-red-500 px-7 py-5 inline-flex justify-center items-center gap-2' href={'/solutions'}>
            View All Markets <Right />
          </Link>

          <Link className='mt-10 bg-red-500 text-white px-7 py-5 inline-flex justify-center items-center gap-2' href={''}>
            Let&apos;s Connect <Right />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SmartKioskSection
