import dayjs from 'dayjs'

const Clock = ({ time, label, tz }) => {
  return (
    <div className="flex flex-col p-6 space-y-2 xl:space-y-6 bg-gray-800 rounded-xl">
      <div className="flex items-center justify-between">
        {/* Label */}
        <h1 className="font-semibold text-md md:text-xl xl:text-2xl text-gray-700 dark:text-gray-300">{label}</h1>

        {/* Timezone offset */}
        <p className="px-3 py-1 rounded-full bg-gray-700 font-normal text-xs md:text-sm xl:text-md">
          {`UTC${dayjs.tz(time, tz).format('Z')}`}
        </p>
      </div>

      {/* Time */}
      <p className="font-normal text-xl md:text-4xl xl:text-6xl">
        {dayjs.tz(time, tz).format('h:mm:ss A')}
      </p>

      {/* Date */}
      <p className="font-light text-lg md:text-2xl xl:text-3xl">
        {dayjs.tz(time, tz).format('ddd, MMM D, YYYY')}
      </p>
    </div>
  )
}

export default Clock
