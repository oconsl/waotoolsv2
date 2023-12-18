import { Typography } from '@mui/material'

const CustomHeader = props => {
  const { title } = props

  return (
    <Typography align='center' variant='h5' sx={{ padding: '1em' }}>
      {title?.toUpperCase()}
    </Typography>
  )
}

export default CustomHeader
