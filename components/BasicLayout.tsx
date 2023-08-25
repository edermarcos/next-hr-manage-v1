import { IProps } from '@/lib/props.interface'
import React from 'react'
import Card from './Card'

interface BasicLayoutProps extends IProps {
  toolbarSection?: React.ReactNode
}

const BasicLayout = ({ children, toolbarSection }: BasicLayoutProps) => {
  return (
    <section className=''>
      <h2 className='text-4xl mb-6 font-bold'>Users Page</h2>

      {toolbarSection && (
        <Card title='List of users' cardCN='mb-4'>
          {toolbarSection}
        </Card>
      )}

      {children}
    </section>
  )
}

export default BasicLayout
