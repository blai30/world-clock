import { useEffect, useState } from 'react'
import Head from 'next/head'
import Clock from '@/components/Clock'

export default function Home() {
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now())
    }, 1000)
  }, [])

  return (
    <div className="m-4">
      <Head>
        <title>World Clock</title>
        <meta name="description" content="Displays clocks around the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        // className="prose dark:prose-dark"
        className="grid md:grid-cols-4 gap-4"
      >
        <Clock time={time} label="Pacific" tz="America/Los_Angeles" />
        <Clock time={time} label="Mountain" tz="America/Denver" />
        <Clock time={time} label="Central" tz="America/Chicago" />
        <Clock time={time} label="Eastern" tz="America/New_York" />
        <Clock time={time} label="China" tz="Asia/Hong_Kong" />
        <Clock time={time} label="Japan" tz="Asia/Tokyo" />
        <Clock time={time} label="Korea" tz="Asia/Seoul" />
        <Clock time={time} label="UTC" tz="UTC" />
      </main>

      <footer>
      </footer>
    </div>
  )
}
