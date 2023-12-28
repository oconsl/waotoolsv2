import { Icon } from '@iconify/react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { menuList } from 'src/data/general/menu'

const CustomHeader = props => {
  const { title, icon } = props
  const getIcon = menuList?.find(i => i.text === icon)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '1.5em',
          paddingBottom: '1.5em'
        }}
      >
        {getIcon?.icon && (
          <CustomAvatar skin='light' variant='rounded' color='info' sx={{ mr: 3, height: 34, width: 34 }}>
            <Icon icon={getIcon?.icon} />
          </CustomAvatar>
        )}
        <Typography align='center' variant='h5' color='primary'>
          {title?.toUpperCase()}
        </Typography>
      </Box>
    </>
  )
}

export default CustomHeader
