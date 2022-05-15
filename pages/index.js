import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Slide from 'react-reveal/Slide'
import NewsletterForm from '@/components/NewsletterForm'
import React from 'react'
import { useCallback } from 'react'
import Video_Box from '@/components/video_box'
import useEmblaCarousel from 'embla-carousel-react'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const startPreview = (e) => {
    const vid = e.target
    vid.muted = true
    vid.play()
  }

  //  onMouseOut
  const stopPreview = (e) => {
    const vid = e.target
    vid.muted = false
    vid.currentTime = 0
    vid.pause()
  }
  const sampleVideo1 =
    'https://res.cloudinary.com/dssy0cdnx/video/upload/v1652454608/moses_video_xjnltd.mp4'

  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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
          <div className="p-1">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
              Sample videos to get you excited about AR:
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Video_Box
              src={sampleVideo1}
              description={'Painting with Monado Hand Tracking and Stereokit (prototype)'}
              width={500}
              height={500}
              onMouseEnter={startPreview}
              onMouseLeave={stopPreview}
              author="Credit: Moses Turner"
            />
            <Video_Box
              src={sampleVideo1}
              description={'test'}
              width={500}
              height={500}
              onMouseEnter={startPreview}
              onMouseLeave={stopPreview}
              author="Credit: Moses Turner"
            />
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
              Lets get started!
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Click on the post below to start your OSS augmented reality journey. If you have
              already began the first part of this tutorial series, please click the "next" button
              below until you find the next part that you would like to read. Or, you can also click
              the "All tutorials" tab in the page header, and select the next tutorial that you
              would like to read on that page. Enjoy!
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700"></ul>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <li key="tutorial-vocab" className="py-12">
                    <article className="transition hover:translate-x-2 hover:translate-y-2">
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime="2022-05-13">{formatDate('2022-05-13')}</time>
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/blog/tutorial-vocab`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  1. Tutorial Vocab
                                </Link>
                              </h2>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                              Please read through this first post to learn and understand all of the
                              commonly used libraries, vocabulary terms, and abbreviations
                              throughout the rest of the tutorial series.
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/tutorial-vocab`}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`Read Tutorial Vocab`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                </div>
                <div className="embla__slide">
                  <li key="tutorial-vocab" className="py-12">
                    <article className="transition hover:translate-x-2 hover:translate-y-2">
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime="2022-05-13">{formatDate('2022-05-13')}</time>
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/blog/tutorial-vocab`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  2. ARTICLE FILL
                                </Link>
                              </h2>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                              Please read through this first post to learn and understand all of the
                              commonly used libraries, vocabulary terms, and abbreviations
                              throughout the rest of the tutorial series.
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/tutorial-vocab`}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`Read Tutorial Vocab`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                </div>
                <div className="embla__slide">
                  <li key="tutorial-vocab" className="py-12">
                    <article className="transition hover:translate-x-2 hover:translate-y-2">
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime="2022-05-13">{formatDate('2022-05-13')}</time>
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/blog/tutorial-vocab`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  3. ARTICLE FILL
                                </Link>
                              </h2>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                              Please read through this first post to learn and understand all of the
                              commonly used libraries, vocabulary terms, and abbreviations
                              throughout the rest of the tutorial series.
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/tutorial-vocab`}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`Read Tutorial Vocab`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                </div>
              </div>
            </div>
            <div className="forward-back-button">
              <button className="embla__prev" onClick={scrollPrev}>
                Prev
              </button>
              <button className="embla__next" onClick={scrollNext}>
                Next
              </button>
            </div>
          </div>
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
    </>
  )
}
