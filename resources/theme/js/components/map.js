export const displayLeafletMap = () => {
  const mapParent = document.querySelector('.page-home')
  if (mapParent) {
    const map = L.map('map').setView([6.26, 1.25], 10)

    const marker = L.marker([6.42, 1.21]).addTo(map)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
  }
}


