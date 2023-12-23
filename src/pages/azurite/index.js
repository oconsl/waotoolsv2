// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Select from '@mui/material/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CloseIcon from '@mui/icons-material/Close'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import MuiTabList from '@mui/lab/TabList'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'
import toast from 'react-hot-toast'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import TableHeader from 'src/views/apps/invoice/list/TableHeader'
import { buildingList, itemTemplates, extraBarracks, azuCalcConf } from 'src/data/building'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CustomHeader from 'src/@core/components/Header'
import {
  Autocomplete,
  Button,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fade,
  InputAdornment,
  OutlinedInput,
  Paper,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  useMediaQuery
} from '@mui/material'
import Iconify from '@iconify/iconify'
import { cyan, green, indigo } from '@mui/material/colors'
import { nFormatter } from 'src/@core/utils/numberFormatter'
import { TabContext, TabPanel } from '@mui/lab'
import nRound from 'src/@core/utils/numberRound'
import moment from 'moment'
import { InfoOutlined } from '@mui/icons-material'

const CustomBox = styled(Box)(({ theme }) => ({
  marginTop: '4px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row'
}))

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0)

  return Math.round(value * multiplier) / multiplier
}

function renderMessage(type) {
  switch (type) {
    case 'azuriteCard':
      return 'This information is available when you click on Map > Limited > Benefits Pack. '
    case 'royalChallenge':
      return 'This information is available when you run the Royal Challenge on any Ancient ruins, daily.'
    case 'azuriteMine':
      return 'This information is available when you click on Azurite Mine > Details > Azurite Production. (both values summed together)'
    case 'azuriteChest':
      return 'This information is available when you click on Pack > Other. '
    default:
      return ''
  }
}

const defaultValues = { mineHour: 0, rcLevel: 0, card: 0, packs: 0, chests: 0, owned: 0, needed: 0, total: 0 }

const minValues = {
  mineHour: 35,
  rcLevel: 10,
  card: 90,
  packs: 99999,
  chests: 5,
  owned: 999999,
  needed: 999999,
  total: 0
}

const AzuriteCalculator = props => {
  const [azuCalculator, setAzuCalculator] = useState(defaultValues)
  const [openInfo, setOpenInfo] = useState(false)
  const [openInfoData, setOpenInfoData] = useState({ info: '', message: '' })

  const handleCalculatorChange = (e, type, level = undefined) => {
    let newObj = {}
    const enterValue = +e.target.value > minValues[type] ? minValues[type] : +e.target.value
    const enterCheck = e.target.checked
    if (type === 'mineHour') {
      newObj = { ...azuCalculator, mineHour: enterValue }
    } else if (type === 'rcLevel') {
      newObj = { ...azuCalculator, rcLevel: enterValue }
    } else if (type === 'card') {
      newObj = { ...azuCalculator, card: enterCheck }
    } else if (type === 'packs') {
      newObj = { ...azuCalculator, packs: enterValue }
    } else if (type === 'chests') {
      newObj = { ...azuCalculator, chests: enterValue }
    } else if (type === 'owned') {
      newObj = { ...azuCalculator, owned: enterValue }
    } else if (type === 'needed') {
      newObj = { ...azuCalculator, needed: enterValue }
    }

    const total =
      (newObj.mineHour > 0 ? nRound(newObj.mineHour * 24, 2) : 0) +
      (newObj.rcLevel > 0 ? azuCalcConf?.royalChallenge?.find(rc => rc.level === newObj.rcLevel)?.azurite : 0) +
      (newObj.card ? azuCalcConf?.card : 0) +
      (newObj.packs > 0 ? newObj.packs : 0) +
      (newObj.chests > 0 ? newObj.chests * 100 : 0)
    const totalObj = { ...newObj, total: total }

    setAzuCalculator(totalObj)
  }

  const handleDialogOpen = (e, info) => {
    setOpenInfo(true)
    const messageDetail = renderMessage(info)
    setOpenInfoData({ info: info, message: messageDetail })
  }

  const handleDialogClose = (e, slot) => {
    setOpenInfo(false)
  }

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CustomHeader icon='azurite' title='AZURITE CALCULATOR' />
            <Divider />
          </Card>
        </Grid>
      </Grid>
      <>
        <Card>
          <Grid container spacing={3} style={{ minWidth: '320px', padding: '1rem' }}>
            <Grid item xs={12} md={6} lg={8}>
              <Paper elevation={12} sx={{ padding: '1rem' }}>
                <CustomBox>
                  <div style={{ minWidth: '200px', marginRight: '5px' }}>
                    <Typography variant='body2' color='primary' align='right'>
                      Azurite Mine per Hour:
                    </Typography>
                  </div>
                  <TextField
                    id='mine-per-hour'
                    size='small'
                    variant='outlined'
                    type='number'
                    value={azuCalculator.mineHour}
                    inputProps={{
                      min: 0,
                      max: 20000
                    }}
                    onChange={e => {
                      handleCalculatorChange(e, 'mineHour')
                    }}
                  />
                  <IconButton
                    aria-label='mine-info-button'
                    onClick={e => {
                      handleDialogOpen(e, 'azuriteMine')
                    }}
                  >
                    <InfoOutlined color='primary' />
                  </IconButton>
                </CustomBox>
                <CustomBox>
                  <div style={{ minWidth: '200px', marginRight: '5px' }}>
                    <Typography variant='body2' color='primary' align='right'>
                      Royal Challenge Wave(s):
                    </Typography>
                  </div>
                  <TextField
                    align='left'
                    id='rc-select'
                    size='small'
                    variant='outlined'
                    select
                    value={azuCalculator.rcLevel}
                    inputProps={{
                      min: 1,
                      max: 10
                    }}
                    onChange={e => {
                      handleCalculatorChange(e, 'rcLevel')
                    }}
                  >
                    {azuCalcConf?.royalChallenge?.map(option => (
                      <MenuItem key={option.level} value={option.level}>
                        {option.level}
                      </MenuItem>
                    ))}
                  </TextField>
                  <IconButton
                    aria-label='rc-info-button'
                    onClick={e => {
                      handleDialogOpen(e, 'royalChallenge')
                    }}
                  >
                    <InfoOutlined color='primary' />
                  </IconButton>
                </CustomBox>
                <CustomBox>
                  <div style={{ minWidth: '200px', marginRight: '5px' }}>
                    <Typography variant='body2' color='primary' align='right'>
                      Monthly Azurite Card:
                    </Typography>
                  </div>
                  <Switch
                    checked={azuCalculator?.card ? true : false}
                    onChange={e => {
                      handleCalculatorChange(e, 'card')
                    }}
                    name='monthly-card-checked'
                    color='primary'
                  />
                  <IconButton
                    aria-label='card-info-button'
                    onClick={e => {
                      handleDialogOpen(e, 'azuriteCard')
                    }}
                  >
                    <InfoOutlined color='primary' />
                  </IconButton>
                </CustomBox>
                <CustomBox>
                  <div style={{ minWidth: '200px', marginRight: '5px' }}>
                    <Typography variant='body2' color='primary' align='right'>
                      Azurite from packs (daily):
                    </Typography>
                  </div>
                  <TextField
                    id='azurite-from-packs'
                    size='small'
                    variant='outlined'
                    type='number'
                    value={azuCalculator.packs}
                    inputProps={{
                      min: 0,
                      max: 20000
                    }}
                    onChange={e => {
                      handleCalculatorChange(e, 'packs')
                    }}
                  />
                </CustomBox>
                <CustomBox>
                  <div style={{ minWidth: '200px', marginRight: '5px' }}>
                    <Typography variant='body2' color='primary' align='right'>
                      Azurite Daily Chests:
                    </Typography>
                  </div>
                  <TextField
                    align='left'
                    id='chests-select'
                    size='small'
                    variant='outlined'
                    type='number'
                    select
                    value={azuCalculator.chests}
                    inputProps={{
                      min: 1,
                      max: 5
                    }}
                    onChange={e => {
                      handleCalculatorChange(e, 'chests')
                    }}
                  >
                    {azuCalcConf?.chests?.map(option => (
                      <MenuItem key={option.level} value={option.level}>
                        {option.level}
                      </MenuItem>
                    ))}
                  </TextField>
                  <IconButton
                    aria-label='chest-info-button'
                    onClick={e => {
                      handleDialogOpen(e, 'azuriteChest')
                    }}
                  >
                    <InfoOutlined color='primary' />
                  </IconButton>
                </CustomBox>

                <CustomBox>
                  <div style={{ minWidth: '200px', marginRight: '5px' }}>
                    <Typography variant='body2' color='primary' align='right'>
                      Azurite Owned:
                    </Typography>
                  </div>
                  <TextField
                    id='azurite-owned'
                    size='small'
                    variant='outlined'
                    type='number'
                    value={azuCalculator.owned}
                    inputProps={{
                      min: 0,
                      max: 999999
                    }}
                    onChange={e => {
                      handleCalculatorChange(e, 'owned')
                    }}
                  />
                </CustomBox>

                <CustomBox>
                  <div style={{ width: '200px', marginRight: '5px' }}>
                    <Typography variant='body2' color='primary' align='right'>
                      Azurite Needed:
                    </Typography>
                  </div>
                  <TextField
                    id='azurite-needed'
                    size='small'
                    variant='outlined'
                    type='number'
                    value={azuCalculator.needed}
                    inputProps={{
                      min: 0,
                      max: 999999
                    }}
                    onChange={e => {
                      handleCalculatorChange(e, 'needed')
                    }}
                  />
                </CustomBox>
                {azuCalculator.owned > 0 && azuCalculator.needed > 0 && (
                  <CustomBox>
                    <div style={{ width: '200px', marginRight: '5px' }}>
                      <Typography variant='body2' color='primary' align='right'>
                        Missing Azurite (Needed - Owned):
                      </Typography>
                    </div>
                    <Typography variant='h5' sx={{ marginLeft: '5px' }}>
                      {(azuCalculator.needed - azuCalculator.owned > 0
                        ? azuCalculator.needed - azuCalculator.owned
                        : 'None'
                      ).toLocaleString()}
                    </Typography>
                  </CustomBox>
                )}

                <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />

                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ minWidth: '200px' }}>
                      <Typography variant='body2' color='primary' align='center'>
                        Azurite Daily:
                      </Typography>
                    </div>
                    <Typography variant='h6' color='textPrimary' align='center' style={{ marginLeft: '10px' }}>
                      {azuCalculator.total.toLocaleString()}
                    </Typography>
                  </div>
                  <div>
                    <div style={{ minWidth: '200px' }}>
                      <Typography variant='body2' color='primary' align='center' style={{ marginLeft: '10px' }}>
                        Azurite Weekly:
                      </Typography>
                    </div>
                    <Typography variant='h6' color='textPrimary' align='center' style={{ marginLeft: '10px' }}>
                      {(azuCalculator.total * 7).toLocaleString()}
                    </Typography>
                  </div>
                  <div>
                    <div style={{ minWidth: '200px' }}>
                      <Typography variant='body2' color='primary' align='center' style={{ marginLeft: '10px' }}>
                        Azurite Monthly (30d):
                      </Typography>
                    </div>
                    <Typography variant='h6' color='textPrimary' align='center' style={{ marginLeft: '10px' }}>
                      {(azuCalculator.total * 30).toLocaleString()}
                    </Typography>
                  </div>
                  {azuCalculator.needed > 0 &&
                    azuCalculator.needed > azuCalculator.owned &&
                    azuCalculator.total > 0 && (
                      <div>
                        <div style={{ minWidth: '200px' }}>
                          <Typography variant='body2' color='primary' align='center' style={{ marginLeft: '10px' }}>
                            Days needed to complete missing azurite (Needed - owned)/Daily output:
                          </Typography>
                        </div>
                        <Typography variant='body2' color='textPrimary' align='center' style={{ marginLeft: '10px' }}>
                          {Math.round(
                            (azuCalculator.needed - azuCalculator.owned) / azuCalculator.total
                          ).toLocaleString()}
                          d to get {(azuCalculator.needed - azuCalculator.owned).toLocaleString()} azurite.
                        </Typography>
                      </div>
                    )}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Card>
        <Dialog fullWidth open={openInfo} onClose={handleDialogClose}>
          <DialogTitle>{`Info`}</DialogTitle>
          <DialogContent>
            <form>
              <FormControl>
                <Typography variant='body2' color='textPrimary' align='justify' style={{ marginLeft: '10px' }}>
                  {openInfoData?.message}
                </Typography>
                <Divider light />
                <div style={{ marginBottom: '10px' }}></div>
                <CardMedia
                  image={`/images/azurite/${openInfoData?.info}.jpg`}
                  title={openInfoData?.info}
                  sx={{
                    minHeight: '320px',
                    maxWidth: '370px',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain'
                  }}
                />
                <div
                  style={{
                    height: '64px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    filter: 'contrast(75%)',
                    backgroundImage: `url('/img/azurite/${openInfoData?.info}.jpg}'`,
                    position: 'absolute',
                    top: '0px',
                    width: '100%',
                    zIndex: -2
                  }}
                />
              </FormControl>
            </form>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleDialogClose} color='primary'>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </>
  )
}

export default AzuriteCalculator
