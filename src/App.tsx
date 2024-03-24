import CatastropheContainerInputs from '../src/styled-components/general-components'
import { yupResolver } from '@hookform/resolvers/yup'
import Icon from '../src/styled-components/icon'
import CustomAlert, { IAlert } from '../src/styled-components/custom-alert'
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
const schema = yup.object().shape({
  catastropheName: yup.string().required('Catastrophe Name is required'),
  Type: yup.string().required('Type is required'),
  location: yup.string().required('Location is required')
})

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const delayMs = (ms: number) => {
    return new Promise<void>(resolve => setTimeout(resolve, ms))
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const [badgeData, setBadgeData] = useState<IAlert>({
    message: '',
    theme: 'success',
    open: false,
    status: 'error'
  })

  const cleanBadge = () => {
    setBadgeData({
      message: '',
      status: undefined,
      icon: undefined,
      open: false
    })
  }

  const onSubmit = async (data: any) => {
    console.log('Submit button clicked')
    try {
      setBadgeData({
        message: `SAVING INFORMATION`,
        status: 'secondary',
        open: true,
        icon: <CircularProgress size={20} color='secondary' />,
        backgroundColor: '#828597',
        theme: 'info',
        disableAutoHide: true
      })
      const body = {
        name: data.catastropheName,
        idTypeOfCatastrophe: Number(data.Type),
        location: data.location
      }
      console.log('Submitting data:', body)
      const result = 0
      console.log('Submission result:', result)
      if (result) {
        await delayMs(1500)
        setBadgeData({
          message: `THE INFORMATION HAS BEEN SAVED`,
          status: 'success',
          theme: 'success',
          open: true,
          icon: <Icon icon='ic:baseline-check-circle' />
        })
        reset()
        await delayMs(2000)
        cleanBadge()
        reset()
      }
    } catch (err) {
      console.error('Error:', err)
      if (!(err instanceof Error)) return
      setBadgeData({
        message: `ERROR`,
        status: 'success',
        theme: 'success',
        open: true,
        icon: <Icon icon='ic:baseline-check-circle' />
      })
      await delayMs(2000)
      cleanBadge()
    }
  }


  return (
    <>
      <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
              <CatastropheContainerInputs>
                <FormControl fullWidth>
                  <Controller
                    name='catastropheName'
                    control={control}
                    defaultValue={''}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        label='Catastrophe Name'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.catastropheName)}
                        sx={{
                          '& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-ntchedOutline': {
                            borderColor: '#2535A8'
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#2535A8' }
                        }}
                      />
                    )}
                  />
                  {errors.catastropheName && (
                    <FormHelperText sx={{ color: 'error.main' }}>
                      {errors.catastropheName &&
                        typeof errors.catastropheName.message === 'string' &&
                        errors.catastropheName.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </CatastropheContainerInputs>
              <CatastropheContainerInputs>
                <FormControl fullWidth>
                  <InputLabel>Type</InputLabel>
                  <Controller
                    name='Type'
                    control={control}
                    defaultValue={''}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Select
                        label='Type'
                        name='Type'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.Type)}
                        sx={{
                          '& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-ntchedOutline': {
                            borderColor: '#2535A8'
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#2535A8' }
                        }}
                      >
                        <MenuItem key={1} value={1}>
                          Tropical Storm
                        </MenuItem>
                        <MenuItem key={2} value={2}>
                          Hurricane
                        </MenuItem>
                        <MenuItem key={3} value={3}>
                          EarthQuake
                        </MenuItem>
                      </Select>
                    )}
                  />
                  {errors.Type && (
                    <FormHelperText sx={{ color: 'error.main' }}>
                      {errors.Type && typeof errors.Type.message === 'string' && errors.Type.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </CatastropheContainerInputs>
              <CatastropheContainerInputs>
                <FormControl fullWidth>
                  <Controller
                    name='location'
                    control={control}
                    defaultValue={''}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        label='Location'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.location)}
                        sx={{
                          '& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-ntchedOutline': {
                            borderColor: '#2535A8'
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#2535A8' }
                        }}
                      />
                    )}
                  />
                  {errors.location && (
                    <FormHelperText sx={{ color: 'error.main' }}>
                      {errors.location && typeof errors.location.message === 'string' && errors.location.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </CatastropheContainerInputs>

              <>
                <Button variant='contained' type='submit'>
                  CREATE ACCOUNT
                </Button>
              </>
            </form>
      </Box>
    </>
  );
}


export default App;