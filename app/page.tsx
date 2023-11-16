import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div dir='ltr'>
        <div className='relative'>
          <div className='absolute top-12 left-44'>
            <Image src="athlets.svg" alt="athlets" width="678" height="950" priority={true}></Image>
          </div>
        </div>
      </div>


      <div className='flex flex-col'>
        <div className='bg-white h-52'>
          <span className='title text-gray'>ATHLETS</span>
        </div>
        <div className='bg-white h-52'></div>
        <div className='bg-gray h-64'></div>
        <div className='bg-purple h-60'></div>
      </div>

      <div className='flex flex-col'>
        <div className='bg-white h-52'></div>
        <div className='bg-white h-52'></div>
        <div className='bg-gray h-64'></div>
        <div className='bg-darkblue h-60'></div>
      </div>
    </main>
  )
}
