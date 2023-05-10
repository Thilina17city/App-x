import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import classes from "./fingerPrint.module.css";

export default function Home({Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="ATM | FingerPrint" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="container">

        {/*<button className={classes.fingerPrintButton}>Scan FingerPrint</button>*/}

            <h1 className={classes.scan}>Scan Here</h1>
             <Link href={'/Services'}>
            <div className={classes.logo2}>
                <Image  src='/fp.gif' width={275} height={250}/>


            </div>
             </Link>

      </div>
    </>
  )
}
