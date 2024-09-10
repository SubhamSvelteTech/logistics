import React from 'react'
import LivekitComponent from '../../components/Livekit/LivekitComponent'

const page = ({ params }: { params: { token: string,isSms?:boolean } }) => {
  if(params?.token?.length > 0){
    return (
      <div>
          <LivekitComponent />
      </div>
    )
  }

}

export default page