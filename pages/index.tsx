import '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router';

// components
import Button from '../components/button'
import Card from '../components/card'

// images
import sbnLogoPic from '../public/images/home/sbn.png'

const Home: NextPage = () => {
  const router = useRouter()

  const createMeetingHandler = () => {
    router.push('/meeting/create')
  }

  const joinMeetingHandler = () => {
    router.push('/meeting/join')
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">

    <Card>
      <div className="mb-16 mt-10 flex flex-col items-center">
          <h1 className="font-mono text-6xl text-gray-700 font-extrabold">SBN MEETING</h1>
      </div>
      <div id="button container" className="flex justify-center items-center flex-col">
        <Button title="Join Meeting" handler={joinMeetingHandler} style="bg-blue-400 text-white font-bold hover:bg-blue-500 active:bg-blue-400 px-0 w-[16rem] py-[0.6rem] tracking-wider text-lg" />
        <div className="my-[0.8rem]">
          <h1 className="text-gray-500 font-mono">or</h1>
        </div>
        <Button disabled={true} title="Create Meeting" handler={createMeetingHandler} style="bg-gray-400 opacity-50 text-white font-bold px-0 w-[16rem] py-[0.6rem] tracking-wider text-lg cursor-not-allowed" />
        <h1 className="mt-1 text-gray-500 text-xs font-mono">(admin only)</h1>
      </div>
      <div className="flex flex-row items-center mt-20 justify-center">
        <h1 className="font-subtitle text-sm text-gray-700 mr-4">Powered by</h1>
        <Image
          src={sbnLogoPic}
          alt="SBN Logo"
          height={35}
          width={75}
        />
      </div>
    </Card>

    </div>
  )
}

export default Home
