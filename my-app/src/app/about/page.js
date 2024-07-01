import React from 'react'
import Image from 'next/image'
import Hero from '../components/Hero'
import SmartKioskSection from '../components/SmartKioskSection';
import Link from 'next/link';
import Right from '../icons/Right';

function About() {
  return (
    <>
    <Hero type="image"
    src="/images/about.png"
    heading="Who We Are"/>
    <div className="relative z-10 my-20">
        <section className="flex flex-col md:flex-row items-center md:justify-around p-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Create Text with Heading Info</h2>
            <p className="text-lg font-extralight">
              Qui dolore pariatur dolore sunt. Anim consequat ad nulla sunt qui consectetur ipsum voluptate. Proident velit laborum non mollit. Amet ex consequat occaecat sit qui nisi occaecat sunt reprehenderit eu aute amet. Enim voluptate aliqua labore enim occaecat quis.
              <br />
              Ut laboris nulla laborum nisi est. Excepteur ut deserunt officia voluptate anim sunt anim veniam officia mollit. Excepteur sit incididunt pariatur deserunt est ad. Veniam laboris ut cupidatat aliqua magna excepteur consequat proident culpa. Duis velit enim ut exercitation non minim deserunt in eiusmod in reprehenderit.
            </p>
            <Link href="/product">
               <span className="mt-4 inline-block text-red-500  underline py-3 rounded-lg text-center font-semibold">
                  Learn more...
                </span>
              </Link>
          </div>
          <div className="relative w-full md:w-6/12 h-72 md:h-[500px] rounded-3xl overflow-hidden">
  <div className="relative w-full h-full">
    <Image
      className="transform scale-125 translate-y-[-30px]"  // Zoom and crop the image
      src="/images/slika 8.jpg"  // Path to your uploaded image
      layout="fill"
      objectFit="cover"  // Ensure the image covers the container
      alt="Custom Image"
    />
    {/* Apply inner shadow effect */}
    <div className="absolute inset-0 rounded-xl overflow-hidden shadow-inner">
      {/* Black overlay to create shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
    </div>
  </div>
</div>


        </section>
<section className="mt-20 p-4 container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Team Members</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', role: 'CEO', imgSrc: '/images/team1.jpg' },
              { name: 'Jane Smith', role: 'CTO', imgSrc: '/images/team2.jpg' },
              { name: 'Alice Johnson', role: 'CFO', imgSrc: '/images/team3.jpg' },
              { name: 'Bob Brown', role: 'COO', imgSrc: '/images/team4.jpg' }
            ].map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* <Image
                  className="w-full h-56 object-cover"
                  src={member.imgSrc}
                  width={300}
                  height={300}
                  alt={member.name}
                /> */}
                <svg  className="p-5 w-full h-32 object-cover" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="gray" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <SmartKioskSection style={{ backgroundColor: 'rgb(246, 246, 246)'}}/>
</>
  )
}

export default About