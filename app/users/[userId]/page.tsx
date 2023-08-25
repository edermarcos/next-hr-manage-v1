import { PageProps } from '@/.next/types/app/layout'

const UserDetails = ({ params }: PageProps) => {
  const { userId } = params
  return <div>UserDetails: {userId}</div>
}

export default UserDetails
