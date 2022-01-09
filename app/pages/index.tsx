import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import src from '../public/image.svg';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Image Uploader</title>
        <meta name='description' content='Image Uploader' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main'>
        <div className='box'>
          <h1 className='text-[1.5rem] font-bold text-gray-700'>Upload your image</h1>
          <p className='my-[1.5rem] text-gray-400'>File shoudl be Jpeg,Png...</p>
          <div className='image'>
            <Image src={src} alt='' />
            <p className='my-[2rem] text-gray-400'>Drag & Drop your image here</p>
          </div>
          <p className='my-[1.5rem] text-gray-400'>Or</p>
          <button className='py-[0.5rem] px-[1rem] text-white bg-[#2f80ed] rounded-lg'>
            Choose a file
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
