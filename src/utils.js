export const pixelToPercent = (standard, pixel) => {
  return Math.floor((pixel / standard) * 100)
}

export const parsePosition = (position, width) => {
  const positions = {
    x: ['left', 'right', 'center'],
    y: ['top', 'bottom'],
  }
  const [x, y] = position.split('-')
  const location = {}

  if (positions.x.includes(x)) {
    if (x === 'center') {
      location.left = (50 - Math.floor(width / 2)) + '%'
    } else {
      location[x] = '1%'
    }
  }

  if (positions.y.includes(y)) {
    location[y] = '0%'
  }

  return location
}
