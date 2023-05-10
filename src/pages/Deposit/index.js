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
        <h2>Add your account number</h2>
        <form>
            <input type="text"/>
            <Link href={'/AccountDetails'}>
                <button>Continue</button>
            </Link>
        
        </form>

      </div>
      <br/>
      <h3>Add cash for your existing account</h3>
      <Link href={'/'}>Continue</Link>


    </>
  )
}
