import React from 'react'

interface Props {

}

const Loading: React.FC<Props> = () => {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <h1 className="text-5xl font-bold font-subtitle">Please Wait...</h1>
      </div>
    );
}

export default Loading