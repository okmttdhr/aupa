export function apiKey() {
  return {
    youtube: 'AIzaSyA7J-vZr9KWMhzoTFmSccdqXtx8kYbEklc',
    giphy: 'dc6zaTOxFJmzC',
  }
}

export function uriSearch() {
  let host = ''
  const productionHost = {
    youtube: 'https://www.googleapis.com/youtube/v3/search',
    giphy: 'http://api.giphy.com/v1/gifs/search',
  }

  switch (process.env.NODE_ENV) {
    case 'e2eTest':
    case 'development':
    case 'production':
    default:
      host = productionHost
      break
  }

  return host
}

export function errorMessage() {
  return
}
