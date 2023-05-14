import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import classes from "./services.module.css";

export default function Index() {
  return (
    <>
      <Head>
        <title>Language</title>
        <meta name="ATM | Language" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>*/}
  <div className={classes.row}>


    <Link href={'/Balance'}>
      <button className={classes.button} >Balance</button>
    </Link>
    {/*<Link href={'/AddAmount'}>*/}
    {/*  <button className={classes.button} >Fast Cash</button>*/}
    {/*</Link>*/}
  {/*</div>*/}
  {/*<div className={classes.row}>*/}
    {/*<Link href={'/Deposit'}>*/}
    {/*  <button className={classes.button} >Deposit</button>*/}
    {/*</Link>*/}
    <Link href={'/SelectAmount'}>
      <button className={classes.button} >Withdraw</button>
    </Link>
  </div>
{/*</div>*/}
    </>
  )
}