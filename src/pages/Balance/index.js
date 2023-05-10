import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import classes from "./balance.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="ATM | Balance" content="Account Balance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <div className={classes.wrap}>
            <p className={classes.p1}>Account Balance : Rs.15000.00 </p>
            <p className={classes.p2}>Account Holder: Jone Doe</p>
            <Link href={'/SelectLanguage'}>
            </Link>

        </div>




        <Link href={'/SelectAmount'}>
            <button className={classes.withdrawButton}>Withdraw</button>
        </Link>


    </>
  )
}
