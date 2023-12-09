// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
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
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          {/* <LinkStyled target='_blank' href='https://themeselection.com/license/'>
            License
          </LinkStyled>
          <LinkStyled target='_blank' href='https://themeselection.com/'>
            More Themes
          </LinkStyled> */}
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
