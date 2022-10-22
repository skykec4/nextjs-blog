import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './layout.module.css'

interface LayoutParam {
  children: any
  home?: boolean
}

export default function Layout({ children, home }: LayoutParam) {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') === 'dark'
        ? 'dark'
        : 'light'
      : 'light'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  console.log('home : ', home)
  return (
    <div className="bg-lime-50 dark:bg-zinc-700 dark:text-white h-screen">
      <div className={styles.container}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <button className="w-10" onClick={handleTheme}>
              {theme === 'dark' ? (
                <img src="/light-mode.svg"></img>
              ) : (
                <img src="/dark-mode.svg"></img>
              )}
            </button>
          ) : (
            ''
          )}
        </header>

        <main>{children}</main>
        <footer>
          {home ? (
            ''
          ) : (
            <Link href="/">
              <a className="text-blue-600">{'<-'} Home</a>
            </Link>
          )}
        </footer>
      </div>
    </div>
  )
}
