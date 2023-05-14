import Link from 'next/link'
import classes from "../styles/globals.module.css";
import Image from "next/image";
import React, { useState } from "react";
import Form from "@/pages/Form";

export default function App({ Component, pageProps }) {
    const [showLogo, setShowLogo] = useState(true);
    const isFormComponent = Component === Form;

    return (
        <>
            <div className={classes.body}>
                <Link href={'/Form'}>Form</Link>
                {!isFormComponent && showLogo && <div className={classes.logo}><Image src='/logo.png' width={275} height={250}/></div>}
                <Component {...pageProps} />
            </div>
        </>
    )
}
