import Image from 'next/image';
import Hero from './components/Hero';
import Link from 'next/link';
import Right from './icons/Right';
import HomeCard from './components/HomeCard';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


export default function Home() {
  return (
    <div>
      <Hero type="video"
      src="/videos/CRYPTO.mp4"
      heading="Your Heading Here"
      description="A little description goes here. It should be concise and engaging."
      showButton={true}/>
      <div className="relative z-10 my-20">
        <section className="flex flex-col md:flex-row items-center md:justify-around p-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Create Text with Heading Info</h2>
            <p className="text-lg font-extralight">
              Qui dolore pariatur dolore sunt. Anim consequat ad nulla sunt qui consectetur ipsum voluptate. Proident velit laborum non mollit. Amet ex consequat occaecat sit qui nisi occaecat sunt reprehenderit eu aute amet. Enim voluptate aliqua labore enim occaecat quis.
              <br />
              Ut laboris nulla laborum nisi est. Excepteur ut deserunt officia voluptate anim sunt anim veniam officia mollit. Excepteur sit incididunt pariatur deserunt est ad. Veniam laboris ut cupidatat aliqua magna excepteur consequat proident culpa. Duis velit enim ut exercitation non minim deserunt in eiusmod in reprehenderit.
            </p>
          </div>
          <div className="w-full md:w-6/12 h-72 relative md:h-[500px] rounded-xl overflow-hidden">
            <div style={{ backgroundColor: 'rgb(193, 193, 193)' }} className="absolute inset-0 shadow-md flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image className='z-10 p-7' src="/images/Office_model.png" layout="fill" objectFit="contain" alt="Office Model" />
              </div>
              <div className="absolute inset-0"></div>
            </div>
            <div className="absolute inset-0 rounded-lg shadow-inner"></div>
          </div>
        </section>
      </div>
      <div style={{ backgroundColor: 'rgb(246, 246, 246)'}}>
        <section className='mt-20 py-20 container mx-auto'>
          <div className='text-2xl font-semibold'>Market Solutions</div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
          <HomeCard icon={AttachMoneyIcon} title="Financial" />

      <HomeCard icon={CurrencyBitcoinIcon} title="Crypto" />
      {/* You can add more HomeCard components with different icons and titles */}
      <HomeCard icon={StorefrontIcon} title="Retail" />
      <HomeCard icon={SportsEsportsIcon} title="Gaming" />
      <HomeCard icon={AssuredWorkloadIcon} title="Government" />
      <HomeCard icon={HealthAndSafetyIcon} title="Healthcare" />

      <div className="p-6 relative flex gap-3 flex-col items-center justify-center text-gray-700  bg-clip-border rounded-xl w-64">
      <Link className='rounded-lg text-primary text-xl underline  inline-flex justify-center items-center gap-2 ' href={'/solutions'}>View All <Right/> </Link> </div>

    </div>

      <div>
 

      

    </div>

        </section>
      </div>
      

    
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>



      <div style={{ backgroundColor: 'rgb(246, 246, 246)'}}>
      <section className='container mx-auto py-36'>
        <div className='font-semibold tracking-wider text-6xl'>
          <span>Reach out to</span> <br/>
          <span className='inline-block my-3  font-extrabold  text-red-500'>Smartest Kiosk&apos;s</span><br/>
          <span>Team to get started.</span>
        </div>
        <div>
        <Link className='mt-10 bg-red-500 px-7 py-5 inline-flex justify-center items-center gap-2 ' href={''}>Let&apos;s Connect <Right/> </Link> </div>
      </section>
    </div>
    </div>
  );
}
