// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports

const CardMenu = props => {
  // ** Vars
  const { desc, icon, src, subModule, text } = props.data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative' }}>
      <div className='cardHeader'>
        <span className='cardHeaderTitle'>{desc}</span>
      </div>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', minHeight: '185px'}}>
        <Box
          sx={{
            display: 'contents'
          }}
        >
          {subModule
            ? subModule.map(module => {
                return (
                  <Typography key={module.name} variant='caption' sx={{ mr: 1.5 }}>
                    {module.name}
                  </Typography>
                )
              })
            : null}
        </Box>
        <Button size="small">Learn more</Button>
      </CardContent>
    </Card>
  )
}

export default CardMenu
