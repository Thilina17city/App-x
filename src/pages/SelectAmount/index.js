import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import classes from "./selectAmount.module.css";

export default function Index() {
  return (
    <>
      <Head>
        <title>Language</title>
        <meta name="ATM | Language" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
 <div className={classes.row1}>
   <Link href={'/'}>
     <button className={classes.button} >Rs. 1000 /= </button>
   </Link>
   <Link href={'/'}>
     <button className={classes.button} >Rs. 2000 /= </button>
   </Link>
 {/*</div>*/}
 {/*<div className={classes.row1}>*/}
   <Link href={'/'}>
     <button className={classes.button} >Rs. 5000 /= </button>
   </Link>
   {/*<Link href={'/'}>*/}
   {/*  <button className={classes.button}>Rs. 10000 /= </button>*/}
   {/*</Link>*/}
 </div>
  <div className={classes.row2}>
    <Link href={'/'}>
      <button className={classes.button2} >Rs. 10000 /= </button>
    </Link>
    <Link href={'/'}>
      <button className={classes.button2} >Rs. 50000 /= </button>
    </Link>
  {/*</div>*/}
  {/*<div className={classes.row1}>*/}
  {/*  <Link href={'/'}>*/}
  {/*    <button className={classes.button2} >Rs. 100000 /= </button>*/}
  {/*  </Link>*/}
    <Link href={'/AddAmount'}>
      <button  className={classes.button2} >Other</button>
    </Link>
  </div>
</div>
    </>
  )
}