import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Slide from 'react-reveal/Slide'
import NewsletterForm from '@/components/NewsletterForm'
import ReactPlayer from 'react-player'
import React from 'react'
import Image from '@/components/Image'
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About this Website
          </h1>
          <h1 className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            This website is meant to help students at the ASU Interactive Robotics Laboratory with
            their projects involving the Project Northstar Headsets built for the lab. In the
            section below, and in the "All Tutorials" tab, you'll find detailed, step-by-step
            tutorials that get you from library installation to starting on a Stereokit sample
            project. Please feel free to reach out to me at my email in the footer of this website
            with any questions or guide requests, Ill try my best to respond in a timely manner!
            Good luck and enjoy your new adventure into the world of open source augmented reality!
          </h1>
          <div className="mx-left container">
            <div className="-m-4 flex flex-wrap">
              <div className="aspect-w-16 aspect-h-9">
                <div className="md md:1/2 p-4" style={{ maxWidth: '544px' }}>
                  <div
                    className={
                      '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
                    }
                  >
                    <Image src={'/static/images/giphy.gif'} alt="my gif" height={500} width={500} />
                    <div className="p-6">
                      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        Sample video showing the possibilities of PNS + SK + Monado
                      </h2>
                      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                        {'Credit: Moses Turner'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-right container">
            <div className="-m-4 flex flex-wrap">
              <div className="aspect-w-16 aspect-h-9">
                <div className="md md:1/2 p-4" style={{ maxWidth: '544px' }}>
                  <div
                    className={
                      '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
                    }
                  >
                    <Image src={'/static/images/giphy.gif'} alt="my gif" height={500} width={500} />
                    <div className="p-6">
                      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        Sample video showing the possibilities of PNS + SK + Monado
                      </h2>
                      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                        {'Credit: Moses Turner'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.about_this_page}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700"></ul>
      </div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Slide bottom>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest Tutorials and Starter Templates
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary } = frontMatter
              return (
                <li key={slug} className="py-12">
                  <article className="transition hover:translate-x-2 hover:translate-y-2">
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </Slide>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
