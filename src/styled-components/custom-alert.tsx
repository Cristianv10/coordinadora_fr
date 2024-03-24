import { Snackbar, Alert } from '@mui/material'
import { useEffect, useState } from 'react'

export interface IAlert {
  status: 'success' | 'error' | 'secondary' | 'warning' | undefined
  message: string
  icon?: JSX.Element | undefined
  backgroundColor?: string
  fontColor?: string
  theme?: 'success' | 'error' | 'secondary' | 'warning' | 'info'
  open?: boolean
  disableAutoHide?: boolean
  fixed?: boolean;
  onClose?: () => void
}

const customTheme = {
  secondary: {
    backgroundColor: '#00000010',
    color: '#828597'
  },
  success: {
    backgroundColor: '#EEFBE5',
    color: '#52B611'
  },
  error: {
    backgroundColor: '#FFEAE9',
    color: '#E04440'
  },
  warning: {
    backgroundColor: '#FFF6E9',
    color: '#EF9713'
  },
  info: {
    backgroundColor: '#E6EDFD',
    color: '#174BC1'
  }
}

const CustomAlert:React.FC<IAlert> = ({fixed = true, ...props}) => {
  const [open, setOpen] = useState(false)

  const handleOnClose = () => {
    if (props.onClose) {
      props.onClose()
    }
  }

  useEffect(() => {
    setOpen(props.open || false)
  }, [props])

  return (
    <Snackbar open={open} autoHideDuration={props.disableAutoHide ? null : 3000} onClose={handleOnClose}>
      <Alert
        onClose={handleOnClose}
        sx={{
          backgroundColor: props.theme ? customTheme[props.theme] || '' : props.backgroundColor,
          color: props.fontColor,
          fontWeight: 500,
          top: '100px',
          right: '36px',
          position: fixed ? 'fixed' : 'unset',
          visibility: open ? 'visible' : 'hidden',
          whiteSpace: 'pre-line',
        }}
        icon={props.icon || ''}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default CustomAlert
