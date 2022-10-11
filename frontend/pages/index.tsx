import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Gustavo 1',
      photo: 'https://github.com/Gustavo-Nasc.png',
      description: 'Estudante na Fatec Zona Leste',
      valueHour: 100
    },
    {
      id: 2,
      name: 'Gustavo 2',
      photo: 'https://github.com/Gustavo-Nasc.png',
      description: 'Estudante na Fatec Zona Leste',
      valueHour: 200
    },
    {
      id: 3,
      name: 'Gustavo 3',
      photo: 'https://github.com/Gustavo-Nasc.png',
      description: 'Estudante na Fatec Zona Leste',
      valueHour: 300
    },
    {
      id: 4,
      name: 'Gustavo 4',
      photo: 'https://github.com/Gustavo-Nasc.png',
      description: 'Estudante na Fatec Zona Leste',
      valueHour: 400
    }
  ]

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List teachers={teachers}></List>
      </Box>
    </>
  )
}

export default Home
