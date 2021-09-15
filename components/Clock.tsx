import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

const Clock = ({ time, label, tz }) => {
  dayjs.extend(timezone)
  dayjs.extend(utc)

  return (
    <div className="flex flex-col p-4 space-y-2 xl:space-y-4 bg-gray-800 rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg md:text-2xl xl:text-4xl text-gray-700 dark:text-gray-300">{label}</h1>
        <p className="px-3 py-1 rounded-full bg-gray-700 font-normal text-xs md:text-sm xl:text-lg">
          {`UTC${dayjs.tz(time, tz).format('Z')}`}
        </p>
      </div>
      <p className="font-semibold text-xl md:text-4xl xl:text-6xl">
        {dayjs.tz(time, tz).format('h:mm:ss A')}
      </p>
      <p className="font-medium text-lg md:text-2xl xl:text-3xl">
        {dayjs.tz(time, tz).format('ddd, D MMM YYYY')}
      </p>
    </div>
  )
}

export default Clock
