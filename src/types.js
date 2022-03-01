import success from '@/assets/success.svg'
import error from '@/assets/error.svg'
import warning from '@/assets/warning.svg'
import info from '@/assets/info.svg'

const properties = {
  backgroundColor: '',
  image: '',
}

const types = {
  success: {
    backgroundColor: '#21BA45',
    image: success,
  },
  error: {
    backgroundColor: '#C10015',
    image: error,
  },
  warning: {
    backgroundColor: '#F2C13B',
    image: warning,
  },
  info: {
    backgroundColor: '#616161',
    image: info,
  },
}

export const getType = (type) => {
  return Object.assign({}, properties, types[type])
}
