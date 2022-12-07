import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Sidebar from '../components/Sidebar'
import styles from '../styles/App.module.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Sidebar />
            <Component {...pageProps} />
        </Fragment>
    )
}