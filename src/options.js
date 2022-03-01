const options = {
  type: 'info',
  classes: 'notification',
  contents: 'message',
  component: '',
}

export const getOption = (option) => {
  return Object.assign({}, options, option)
}
