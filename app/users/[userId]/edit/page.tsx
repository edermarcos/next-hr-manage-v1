import { PageProps } from '@/.next/types/app/layout'

const EditUser = ({ params }: PageProps) => {
  const { userId } = params
  return <div>EditUser: {userId}</div>
}

export default EditUser
