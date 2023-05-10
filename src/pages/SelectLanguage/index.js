import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import classes from "./index.module.css";

export default function Index() {
  return (
    <>
      <Head>
        <title>Language</title>
        <meta name="ATM | Language" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>





        <div className={classes.buttonWrapper}>


            <Link href={'/FingerPrint'}>
                <button className={classes.button}>Sinhala</button>
            </Link>
            <Link href={'/FingerPrint'}>
                <button className={classes.button}>English</button>
            </Link>
            <Link href={'/FingerPrint'}>
                <button className={classes.button}>Tamil</button>
            </Link>
        </div>









    </>
  )
}