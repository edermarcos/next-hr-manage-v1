import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Card from './Card'
import { IProps } from '@/lib/props.interface'
import { IUser } from '@/app/users/page'
import { Button } from './ui/button'

interface BasicTableProps extends IProps {
  users: IUser[]
}

const THeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className='w-[100px]'>ID</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>First Name</TableHead>
        <TableHead>Last Name</TableHead>
        <TableHead>Avatar</TableHead>
        <TableHead className='w-[200px]'>Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
}

const TActions = () => {
  return (
    <TableCell className='flex justify-center gap-4'>
      <Button>Editar</Button>
      <Button>Eliminar</Button>
    </TableCell>
  )
}

const BasicTable = ({ users }: BasicTableProps) => {
  return (
    <Card cardCN='p-5'>
      <Table>
        <THeader />
        <TableBody>
          {users.map((user: IUser) => (
            <TRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

const TRow = ({ user }: { user: IUser }) => {
  return (
    <TableRow key={user.id}>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.first_name}</TableCell>
      <TableCell>{user.last_name}</TableCell>
      <TableCell>{user.avatar ? 'Y' : 'N'}</TableCell>
      <TActions />
    </TableRow>
  )
}

export default BasicTable
