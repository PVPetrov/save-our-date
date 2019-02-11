import classNames from 'classnames';

import React from 'react'

const Button = ({classes}) => {
  return (
    <div>
      <button className={classNames('button', classes)}></button>
    </div>
  )
}

export default Button;
