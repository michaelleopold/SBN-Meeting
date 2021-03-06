import React, { useState } from 'react'
import { useRouter } from 'next/router'

// components
import Button from '../../components/button'
import Card from '../../components/card'
import Input from '../../components/input'

interface Props {

}

const CreateMeeting: React.FC<Props> = () => {
    const router = useRouter()

    const [meetingID, setMeetingID] = useState('')

    const onMeetingIDChangeHandler = (e: any) => {
        setMeetingID(e.target.value)
    }

    const createMeetingHandler = () => {
        router.push(`/meeting/${meetingID}`)
    }

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
            <Card style="flex flex-col justify-center w-full max-w-md">
              <div className="mb-10 flex justify-center">
                <h1 className="font-subtitle text-4xl text-gray-700 tracking-wide font-semibold">Input Meeting Name</h1>
              </div>
              <Input
                label="Meeting Name"
                value={meetingID}
                onChange={onMeetingIDChangeHandler}
              />
              <div className="mt-3" />
              <Button title="Create Meeting" handler={createMeetingHandler} style="bg-blue-400 text-white font-bold hover:bg-blue-500 active:bg-blue-400 px-0 w-full py-[0.6rem] tracking-wider text-lg" />
            </Card>
        </div>
    );
}

export default CreateMeeting