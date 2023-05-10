import Link from 'next/link'
import classes from "../styles/globals.module.css";
import Image from "next/image";


export default function App({ Component, pageProps }) {
  return (
      <>




   <dive className={classes.body}>
        {/*<div className={classes.frame}>*/}
        {/*     <div className={classes.frame2}>*/}
        {/*            <div className={classes.frame3}>*/}

        <Link href={'/Form'}>Home</Link>
        {/*<div className={classes.frame4}>*/}
             <Component {...pageProps} />

       <div className={classes.logo}>

           <Image  src='/logo.png' width={275} height={250}/>



       </div>
            {/*</div>*/}
     {/*     </div>*/}
     {/*   </div>*/}
     {/*</div>*/}
   < /dive>
  </>)
}
