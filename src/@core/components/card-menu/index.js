// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import { Icon } from '@iconify/react'
import { Button } from '@mui/material'

// ** Styled component for the image
const Img = styled('img')({
  right: 7,
  bottom: 0,
  height: 177,
  position: 'absolute'
})

const CardMenu = props => {
  // ** Vars
  const { desc, icon, src, subModule, text } = props.data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* <Typography sx={{ mb: 6.5, fontWeight: 600 }}>{desc}</Typography> */}
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
          {/* <Typography
            component='sup'
            variant='caption'
            sx={{ color: desc === 'negative' ? 'error.main' : 'success.main' }}
          >
            {desc}
          </Typography> */}
        </Box>
        {/* <CustomChip
          size='small'
          skin='light'
          label={'menu'}
          color={'primary'}
          sx={{ height: 20, fontWeight: 500, fontSize: '0.75rem', '& .MuiChip-label': { lineHeight: '1.25rem' } }}
        /> */}
        {/* <Img src={src} alt={desc} /> */}
      </CardContent>
    </Card>
  )
}

export default CardMenu
