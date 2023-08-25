// https://frontendshape.com/post/how-to-use-navigation-menu-next-13-with-shadcn-ui
'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Card from './Card'

interface MenuItem {
  displayText: string
  href: string
}

const menu: MenuItem[] = [
  {
    displayText: 'Dashboard',
    href: '/',
  },
  {
    displayText: 'Users',
    href: '/users',
  },
  {
    displayText: 'Events',
    href: '/events',
  },
]

const Menu = () => {
  return (
    <Card>
      <section className='flex container mx-auto'>
        <Link href={'/'} className={navigationMenuTriggerStyle()}>
          Intranet
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {menu.map(({ displayText, href }) => (
              <NavigationMenuItem key={displayText}>
                <Link href={href} className={navigationMenuTriggerStyle()}>
                  {displayText}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </Card>
  )
}

export default Menu
