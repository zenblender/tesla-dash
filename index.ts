const el = document.querySelector('#content')

function success(position) {
  const latitude  = position.coords.latitude
  const longitude = position.coords.longitude

  const linkLabel = `Latitude: ${latitude} °, Longitude: ${longitude} °`
  const linkHTML = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">${linkLabel}</a>`

  const newEl = document.createElement('div')
  newEl.innerHTML = linkHTML
  el.appendChild(newEl)
}

function error(positionError: PositionError) {
  const newEl = document.createElement('div')
  newEl.innerHTML = `Failed to get location (${JSON.stringify(positionError)}).`
  el.appendChild(newEl)
}

if (!navigator.geolocation) {
  el.textContent = 'Geolocation is not supported by your browser'
} else {
  el.textContent = 'Locating...'
  navigator.geolocation.watchPosition(success, error)
}
