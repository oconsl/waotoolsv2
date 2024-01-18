// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardMenu from 'src/@core/components/card-menu/index'
import { menuList } from '../data/general/menu'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const Home = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} columns={8}>
        {menuList.map(menu => {
          return (
            <Grid key={menu.desc} item xs={12} sm={6} md={2} 
              sx={{ 
                pt: theme => `${theme.spacing(12.25)} !important`,
                "&:nth-child(2n) .cardHeader": { backgroundColor: 'customColors.skyPaletteSecondary' },
                "&:nth-child(3n) .cardHeader": { backgroundColor: 'customColors.skyPaletteTertiary' },
                "&:nth-child(4n) .cardHeader": { backgroundColor: 'customColors.skyPaletteQuaternary' }
              }}
            >
              <CardMenu data={menu} />
            </Grid>
          )
        })}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Home
