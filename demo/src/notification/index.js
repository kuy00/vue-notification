const success = (app, message) => {
  app.$notification({
    type: 'success',
    classes: 'customStyle',
    contents: message,
  })
}

const error = (app, message) => {
  app.$notification({
    type: 'error',
    contents: message,
  })
}

const warning = (app, message) => {
  app.$notification({
    type: 'warning',
    contents: message,
  })
}

const info = (app, message) => {
  app.$notification({
    type: 'info',
    contents: message,
  })
}

const custom = (app, component, message) => {
  app.$notification({
    type: 'custom',
    component: component,
    contents: message,
  })
}

export {
  success,
  error,
  warning,
  info,
  custom,
}
