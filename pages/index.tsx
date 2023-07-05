import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import BlurImage from '../components/BlurImage/BlurImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BlurImage
          alt='bg'
          src={"https://image.tmdb.org/t/p/w1920_and_h800_face/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg"}
          height={300}
          width={1300}
          propStyle='max-h-[300px] object-cover'
        />
      </main>
    </>
  )
}
