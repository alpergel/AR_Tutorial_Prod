import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Credits({ authorDetails }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Credits
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Special thanks to everyone listed!
        </p>

        <ul
          role="list"
          className="list-disc space-y-3 pl-5 text-slate-400 marker:text-gray-400 hover:scale-110"
        >
          <li>
            Prof. Heni Ben Amor: For support throughout the project, the opportunity to bring AR to
            his lab
          </li>
        </ul>
        <ul
          role="list"
          className="list-disc space-y-3 pl-5 text-slate-400 marker:text-gray-400 hover:scale-110"
        >
          <li>Tyler Menezes: For helping with technical questions</li>
        </ul>
        <ul
          role="list"
          className="list-disc space-y-3 pl-5 text-slate-400 marker:text-gray-400 hover:scale-110"
        >
          <li>Shubham Patil: For helping with technical questions</li>
        </ul>
        <ul
          role="list"
          className="hover:amber-500 list-disc space-y-3 pl-5 text-slate-400 marker:text-gray-400 hover:scale-110"
        >
          <li>
            Github User timlrx: For creating the "tailwind-nextjs-starter-blog" starter template
          </li>
        </ul>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700"></ul>
    </div>
  )
}
