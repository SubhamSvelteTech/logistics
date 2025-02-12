"use client"
import "@livekit/components-styles";
import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const LivekitComponent = () => {
    const { data: session, status } = useSession();
    const [allowed,setAllowed] = useState<boolean>(false)
    const [liveToken,setLiveToken] = useState<string>()
    const router = useRouter()
    let serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL
    const pathname = usePathname()
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        console.log(session?.user?.accessToken?.length,"session....")
        if (status === "authenticated") {
            setLoading(false)
                navigator?.mediaDevices
                  ?.getUserMedia({ audio: true, video: true })
                  .then(function (stream) {
                    // const token = searchParams.get("token");
                    const new_token = pathname.split("/")[2];
                    // if(new_token === "isSms"){
                    //   getLivekitToken()
                    //   setAllowed(true);
                    //   return
                    // }
                    if (new_token.length>5) {
                      setLiveToken(new_token);
                    }
          
                    setAllowed(true);
                  })
                  .catch(function (err) {
                    // router.push("/dashboard");
          
                    console.log(err, "err");
                  });
              } else if(status === "loading"){
                setLoading(true)
                return
              } 
              else {
                router.push("/login");
              }
              return () => setAllowed(false)
        },[session?.user?.accessToken?.length]);
      

        // return () => setLiveToken("");
  
    if(loading){
        return(
            <div>
                <span>Please Wait Call Is Connecting....</span>
            </div>
        )
    }

    if(allowed){
        return(
            <LiveKitRoom
            token={liveToken}
            serverUrl={serverUrl}
            data-lk-theme="default"
            style={{ height: "100vh" }}
            video={false}
            onDisconnected={() => {
              router.push("/work-order")
              // role !== "Patient"
              //   ? setIsShowModal(true)
              //   : router.push("/dashboard");
            }}
            onConnected={() => {
            //   setIsConnected(true);
              const buttons: any = document.getElementsByClassName("lk-button-group");
              const disConnectButton = document.getElementsByClassName("lk-disconnect-button")
              console.log(buttons,"button...")
              let item = buttons[0]
              console.log(item.getElementsByTagName("button"))
              let microPhoneButton  =item.getElementsByTagName("button")[0]
                microPhoneButton.setAttribute('style', 'display:block !important');
                disConnectButton[0].setAttribute('style','display:block !important')
            }}
        
          >
            <VideoConference  id="livekitVideo" />
          </LiveKitRoom>
        )
    }
  
}

export default LivekitComponent