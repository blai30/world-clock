import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

const Clock = ({ time, label, tz }) => {
  dayjs.extend(timezone)
  dayjs.extend(utc)

  return (
    <div className="p-4 bg-gray-800 rounded-xl">
      <h1 className="font-bold text-xl">{label}</h1>
      <p className="font-semibold text-2xl">
        {dayjs.tz(time, tz).format('h:mm:ss A')}
      </p>
      <p className="font-medium text-lg">
        {dayjs.tz(time, tz).format('ddd, D MMM YYYY')}
      </p>
      <p className="font-light text-sm">
        {`UTC${dayjs.tz(time, tz).format('Z')}`}
      </p>
    </div>
  )
}

export default Clock
