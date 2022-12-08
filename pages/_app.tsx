import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Navbar />
            <Component {...pageProps} />
        </Fragment>
    )
}