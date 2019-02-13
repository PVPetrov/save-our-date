import React from 'react'
import classNames from 'classnames'
import './index.css'

const Page = ({classes, children, ...props}) => {
  return (
    <div className={classNames('page', classes)} {...props}>
        {children}
    </div>
  )
}

export default Page
