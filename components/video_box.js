const Video_Box = ({ src, description, width, height, onMouseEnter, onMouseLeave, author }) => (
  <div className="-m-4 flex space-x-4">
    <div className="aspect-w-16 aspect-h-9">
      <div className="md md:1/2 p-4" style={{ maxWidth: '544px' }}>
        <div
          className={
            '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
          }
        >
          <video
            src={src}
            width="500"
            height="500"
            controls
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          ></video>
          <div className="p-6">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{description}</h2>
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{author}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Video_Box
