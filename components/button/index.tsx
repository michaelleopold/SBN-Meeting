import React from 'react'

interface Props {
  title: String,
  style: String,
  handler: () => any,
  disabled?: Boolean
}

const Button: React.FC<Props> = ({ title, style, handler, disabled = false }) => {
    return (
        <button disabled={disabled} onClick={handler} className={`px-6 py-2 flex justify-center items-center rounded-md shadow-lg ${style}`}>
          {title}
        </button>
    );
}

export default Button