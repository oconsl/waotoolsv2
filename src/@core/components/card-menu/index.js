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
    <Card 
      sx={{ 
        overflow: 'visible', 
        position: 'relative'
      }}
      >
      <Box className='cardHeader'
        sx={{
          backgroundColor: 'customColors.skyPalettePrimary',
          height: '60px'
        }}
      >
        <Typography className='cardHeaderTitle' color="customColors.skyPaletteTitle" 
          sx={{
            textAlign: 'center',
            width: '100%',
            display: 'block',
            paddingTop: '10%',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}
        >{desc}</Typography>
      </Box>
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
        <Button 
          size="small"
          sx={{
            textAlign: 'left',
            marginLeft: '-10px',
            display: 'block',
            marginRight: '-10px',
            marginTop: '15px',
            position: 'absolute',
            bottom: '10px'
          }}
        >Learn more</Button>
      </CardContent>
    </Card>
  )
}

export default CardMenu
