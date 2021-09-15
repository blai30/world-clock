import Head from 'next/head'
import Clock from '@/components/Clock'

export default function Home() {
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
        <Clock label="Pacific" tz="America/Los_Angeles" />
        <Clock label="Eastern" tz="America/New_York" />
        <Clock label="Japan" tz="Asia/Tokyo" />
        <Clock label="UTC" tz="UTC" />
        <Clock label="UTC" tz="UTC" />
        <Clock label="UTC" tz="UTC" />
        <Clock label="UTC" tz="UTC" />
      </main>

      <footer>
      </footer>
    </div>
  )
}
