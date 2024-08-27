import { Steps } from 'antd'
import React from 'react'

const PageStep = ({current}) => {
  return (
    <Steps
    size="small"
    className='text-primary'
    current={current}
    items={[
      {
        title: 'Add details',
      },
      {
        title: 'Add description',
      },
      {
        title: 'FAQ',
      },
    ]}
  />
  )
}

export default PageStep