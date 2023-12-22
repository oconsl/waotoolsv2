// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <LinkStyled target='_blank' href='https://github.com/onare'>
          oNare
        </LinkStyled>
        {`, Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512" fill='#FF4C51'><path d="M32.1 29.3C33.5 12.8 47.4 0 64 0H256c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6V448h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H160 80c-17.7 0-32-14.3-32-32s14.3-32 32-32h48V348.4C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7H231.9l-5.3-64H93.4l-5.3 64z"/></svg>
        </Box>
        {` by `}
        <LinkStyled target='_blank' href='https://github.com/DvdVgt'>
          DvdVgt
        </LinkStyled>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <LinkStyled
            target='_blank'
            href='https://docs.google.com/spreadsheets/d/1xm6xgMbUCUfuFLibFPYWBFKyitfCr20KPvIl7l-OtAo/edit#gid=1888561516'
          >
            Contribute
          </LinkStyled>
          <LinkStyled target='_blank' href='https://www.paypal.com/paypalme/oNaare'>
            Donate
          </LinkStyled>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
