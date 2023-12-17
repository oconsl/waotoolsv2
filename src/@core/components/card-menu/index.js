// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import { Icon } from '@iconify/react'
import { Button } from '@mui/material'

const CardMenu = props => {
  // ** Vars
  const { desc, icon, src, subModule, text } = props.data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button size='medium' startIcon={<Icon icon={icon} fontSize={20} />}>
          {desc}
        </Button>
        <Box
          sx={{
            mb: 1.5,
            rowGap: 1,
            width: '90%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            minHeight: '90px'
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
      </CardContent>
    </Card>
  )
}

export default CardMenu
