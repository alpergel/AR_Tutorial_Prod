import Image from './Image'
import Link from './Link'
import ReactPlayer from 'react-player'
import React from 'react'

const Video_Card = ({ title, description, imgSrc, href }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={
        '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
      }
    >
      <ReactPlayer url="https://www.youtube.com/watch?v=wWgIAphfn2U" />
    </div>
  </div>
)

export default Video_Card
