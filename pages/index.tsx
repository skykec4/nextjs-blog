import Link from 'next/link'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import SubLayout from '../components/sub-layout'

export default function Home() {
  return (
    <Layout home>
      <p className="font-bold">skykec4 Blog</p>
      <br />
      <hr />
      <br />
      <Link href="/posts/first">
        <a className="text-blue-300">First Post</a>
      </Link>
    </Layout>
  )
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>
// }
