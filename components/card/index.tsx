import React from 'react'

interface Props {
  children: any,
  style?: string
}

const Card: React.FC<Props> = ({ children, style }) => {
    return (
        <div className={`bg-white flex flex-col px-5 py-8 rounded-lg shadow-lg ${style}`}>
            {children}
        </div>
    );
}

export default Card