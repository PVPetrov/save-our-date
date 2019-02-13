import React from 'react'
import classNames from 'classnames'
import './index.css'

const Section = ({classes, children, ...props}) => {
  return (
    <div className={classNames('section', classes)} {...props}>
      <div className="border">
      {children}
      </div>
    </div>
  )
}

export default Section
