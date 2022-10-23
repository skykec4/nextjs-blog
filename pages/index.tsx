import Link from 'next/link'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import SubLayout from '../components/sub-layout'

export default function Home() {
  return (
    <Layout home>
      <Link href="/posts/first">
        <div className="flex flex-row p-4  hover:bg-zinc-300 hover:dark:bg-lime-50 cursor-pointer  hover:text-black h-28 min-h-50 items-center">
          <p className="text-gray-400 mr-4">2022-10-23</p>
          <p className="font-bold text-2xl">첫번째 글</p>
        </div>
      </Link>
    </Layout>
  )
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>
// }
