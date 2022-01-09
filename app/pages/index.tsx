import type { NextPage } from 'next';
import Head from 'next/head';
import { BaseUploader } from '../components/organisms/BaseUploader';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Image Uploader</title>
        <meta name='description' content='Image Uploader' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main'>
        <BaseUploader />
      </main>
    </div>
  );
};

export default Home;
