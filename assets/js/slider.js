const images = [
  '/assets/images/malioboro.jpg',
  '/assets/images/prambanan.jpg',
  '/assets/images/tugu.jpg',
  '/assets/images/tugu-kecil.jpg',
]

let key = 0

function setImageSlider() {
  const imageSliderElement = document.getElementById('img-slide')
  imageSliderElement.setAttribute('src', images[key])
}

setImageSlider()

const navigatorButtons = document.getElementsByClassName('slider-btn')
for (const navBtn of navigatorButtons) {
  navBtn.addEventListener('click', () => {
    if (navBtn.innerHTML == 'Next') {
      key++
      console.log(images[key])
      if (typeof (images[key]) !== 'undefined') {
        setImageSlider()
      } else {
        key = 0
        setImageSlider()
      }
    }

    if (navBtn.innerHTML == 'Prev') {
      key--
      if (typeof (images[key]) !== 'undefined') {
        setImageSlider()
      } else {
        key = images.length - 1
        setImageSlider()
      }
    }
  })
}
