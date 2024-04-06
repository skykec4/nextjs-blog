import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './layout.module.css'

interface LayoutParam {
  children: any
  home?: boolean
  seoTitle?: string
}

export default function BirthdayLayout({
  children,
  home,
  seoTitle,
}: LayoutParam) {
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
  return (
    <div className="bg-white dark:bg-zinc-700 dark:text-white h-screen">
      <div className={styles.container}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="김채아의 생일" />
          <meta
            property="og:image"
            content="/nextjs-blog/public/images/chaea/1.jpg"
          />
          <meta property="og:description" content="김채아의 생일입니다." />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/earlyaccess/kopubbatang.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/earlyaccess/nanummyeongjo.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/earlyaccess/notosanskr.css"
          />
          <title>{seoTitle === undefined ? 'skykec4 Blog' : seoTitle}</title>
        </Head>

        <main>{children}</main>
      </div>
    </div>
  )
}
