import { useState, useEffect } from 'react'
import moment from 'moment'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function Clock(params) {
  const [date, setDate] = useState(
    params?.type === 'local' ? moment().local().format('HH:mm:ss') : moment.utc().format('HH:mm:ss')
  )

  function refreshClock() {
    setDate(params?.type === 'local' ? moment().local().format('HH:mm:ss') : moment.utc().format('HH:mm:ss'))
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)

    return function cleanup() {
      clearInterval(timerId)
    }
  }, [refreshClock])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0.2em' }}
    >
      <Typography color='secondary' variant='caption' sx={{ mr: 1 }}>
        {params.type ? 'L' : 'S'}T:
      </Typography>
      <Typography color='primary' variant='caption' align='center'>
        {date}
      </Typography>
    </Box>
  )
}

export default Clock
