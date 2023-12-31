import { Text } from '@chakra-ui/react';

interface Props{
    date: string;
}

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const DateIcon = ({date}: Props) => {
    const month = date.slice(5, 7)
    const day = date.slice(8,10)

  return (
    <div>
        <Text align='center' fontWeight='extrabold' fontSize='md' color='purple.500'>{months[parseInt(month) - 1]}</Text>
        <Text align='center' fontWeight='bold' fontSize='3xl'>{day}</Text>
    </div>
  )
}

export default DateIcon