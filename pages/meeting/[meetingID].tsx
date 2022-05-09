import React, { useEffect, useRef, useState } from 'react'
// @ts-ignore
import { JitsiMeeting } from '@jitsi/react-sdk'
import { useRouter } from 'next/router'

// components
import Loading from '../../components/loading'

interface Props {

}

const asyncTimeout = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const Meeting: React.FC<Props> = () => {
    const router = useRouter()
    const query: any = router.query

    const [jitsi, setJitsi]: any = useState(null)

    const handleCloseMeeting = () => {
      router.replace('/')
    }

    useEffect(() => {
      if (jitsi) {
        jitsi.addEventListener('readyToClose', handleCloseMeeting);
        jitsi.addEventListener('videoConferenceLeft', handleCloseMeeting)
      }
  
      return () => {
        jitsi?.removeEventListener('readyToClose', handleCloseMeeting);
        jitsi?.removeEventListener('videoConferenceLeft', handleCloseMeeting)
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jitsi]);

    return (
      <JitsiMeeting
        domain = "meetup.hopto.org"
        roomName = {query.meetingID}
        getIFrameRef = { function (iframeRef: HTMLDivElement) { iframeRef.style.height = '100vh'; } }
        onApiReady = {(haha) => {
          setJitsi(haha)
        }}

        interfaceConfigOverwrite={{
          DISPLAY_WELCOME_FOOTER: false,
          HIDE_DEEP_LINKING_LOGO: true,
          JITSI_WATERMARK_LINK: '#',
          MOBILE_APP_PROMO: false,
          NATIVE_APP_NAME: 'SBN MEETING',
          PROVIDER_NAME: 'PT. SBN',
          SHOW_JITSI_WATERMARK: false
        }}
        configOverwrite={{
          disablePolls: true,
          disableSelfView: true,

        }}
        spinner= {() => <Loading />}
      />
    );
}

export default Meeting

// import React from 'react'

// interface Props {

// }

// const Meeting: React.FC<Props> = () => {
//   return (
//     <div className="">
//       <h1>Meeting</h1>
//     </div>
//   );
// }

// export default Meeting