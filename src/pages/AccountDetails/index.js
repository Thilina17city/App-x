import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'

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
        <h3>Name: Thathsara Senananyaka</h3>
        <h2>Transfer Amount: 5000 $</h2>
        <br/>
        <Link href={"/"}>
        <button>Continue</button>
        </Link>
        
      </div>
    </>
  )
}
