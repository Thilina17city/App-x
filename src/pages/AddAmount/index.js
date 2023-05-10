import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import classes from "./withdrawAddAmount.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="ATM | Home" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={classes.title}>Enter Amount Here</h1>
        <form>

            <input className={classes.text} type='text'/>
            <div className={classes.wrapper}>
                <button className={classes.submitButton}>Confirm</button>
                <Link href={'/'}>
                    <button className={classes.submitButton2}>Cancel</button>
                </Link>

            </div>
        </form>

      </div>
    </>
  )
}