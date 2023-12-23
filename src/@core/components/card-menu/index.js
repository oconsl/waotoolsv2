// ** MUI Imports
import { CardActionArea, CardActions, Divider, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import Link from 'next/link'

// const StyledButton = styled(Button)(({ theme }) => ({
//   textAlign: 'left',
//   marginLeft: '-10px',
//   display: 'block',
//   marginRight: '-10px',
//   marginTop: '15px',
//   position: 'absolute',
//   bottom: '10px'
// }))

// const StyledCardHeader = styled('div')(({ theme }) => ({
//   backgroundColor: '#0278ae',
//   height: '60px'
// }))

// const StyledCardHeaderTitle = styled('span')(({ theme }) => ({
//   textAlign: 'center',
//   width: '100%',
//   display: 'block',
//   paddingTop: '10%',
//   textTransform: 'uppercase',
//   fontWeight: 500,
//   color: '#04364a'
// }))

const CardMenu = props => {
  // ** Vars
  const { desc, icon, color, src, subModule, text } = props.data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative' }}>
      {/* <StyledCardHeader>
        <StyledCardHeaderTitle>{desc}</StyledCardHeaderTitle>
      </StyledCardHeader> */}
      {/* <div style={{}}>
        <Typography
          align='center'
          variant='button'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '0.5em',
            paddingBottom: '0.5em'
          }}
        >
          {desc}
        </Typography>
      </div> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '0.5em',
          paddingBottom: '0.5em'
        }}
      >
        <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3, height: 34, width: 34, color: '#2dc1c3ed' }}>
          <Icon icon={icon} />
        </CustomAvatar>
        <Typography
          variant='h6'
          component={Link}
          href={`/${text}`}
          sx={{ fontWeight: 500, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
        >
          {desc}
        </Typography>
      </Box>{' '}
      <Divider />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', minHeight: '155px' }}>
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
      </CardContent>
      <CardActions>
        <Button size='small' component={Link} href={`/${text}`}>
          CHECK TOOL
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardMenu
