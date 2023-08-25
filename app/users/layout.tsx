'use client'

import Link from 'next/link'

import BasicLayout from '@/components/BasicLayout'
import { IProps } from '@/lib/props.interface'
import { buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export interface UserLayoutProps extends IProps {}

const MenuSection = () => {
  return (
    <section className='text-right'>
      <Link href='/users/create' className={buttonVariants()}>
        Crear usuario
      </Link>
    </section>
  )
}

const UserLayout = ({ children }: UserLayoutProps) => {
  const pathname = usePathname()

  return (
    <BasicLayout toolbarSection={!pathname.includes('create') && <MenuSection />}>
      {children}
    </BasicLayout>
  )
}

export default UserLayout
