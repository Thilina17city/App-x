import Head from 'next/head'
import { Inter } from 'next/font/google'
import style from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import classes from "../styles/globals.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>ATM project</title>
        <meta name="ATM | Home" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href={'/SelectLanguage'}>

            <h1 className={classes.scan}>Scan Here</h1>
        <div className={classes.img}>

            <Image  src='/QR.jpg' width={250} height={250}/>
        </div>
        </Link>

      </div>
    </>
  )
}
