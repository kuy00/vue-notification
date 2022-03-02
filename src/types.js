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
    backgroundColor: '#2ee659',
    image: success,
  },
  error: {
    backgroundColor: '#f52a40',
    image: error,
  },
  warning: {
    backgroundColor: '#ffd04f',
    image: warning,
  },
  info: {
    backgroundColor: '#a1a1a1',
    image: info,
  },
}

export const getType = (type) => {
  return Object.assign({}, properties, types[type])
}
