import BasicTable from '@/components/BasicTable'
import React from 'react'

export interface IUser {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

const getUsers = async () => {
  try {
    const response = await fetch('https://reqres.in/api/users?page=1&limit=10')

    if (!response.ok) {
      throw new Error('Error al obtener los usuarios')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error en la solicitud:', error)
    return null
  }
}

const UserIndex = async () => {
  const { data: users } = await getUsers()
  return (
    <>
      <BasicTable users={users} />
    </>
  )
}

export default UserIndex
