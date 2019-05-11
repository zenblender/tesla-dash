const el = document.querySelector('#content')

function success(position) {
  const latitude  = position.coords.latitude
  const longitude = position.coords.longitude

  const linkLabel = `Latitude: ${latitude} °, Longitude: ${longitude} °`
  el.innerHTML = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">${linkLabel}</a>`
}

function error(positionError: PositionError) {
  el.textContent = `Failed to get location (${JSON.stringify(positionError)}).`
}

if (!navigator.geolocation) {
  el.textContent = 'Geolocation is not supported by your browser'
} else {
  el.textContent = 'Locating...'
  navigator.geolocation.getCurrentPosition(success, error)
}
