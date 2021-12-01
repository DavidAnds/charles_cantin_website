import React from "react";
import Head from "next/dist/shared/lib/head";

export default function FontLink() {
    return (
        <>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:wght@300;400;600&display=swap'
                    rel='stylesheet'
                />
            </Head>
        </>
    );
}
