const cookieImg = document.getElementById('cookie');
const point = document.getElementById('clicker__counter')
const changeSizePlus = function () {
  cookieImg.style.width = '400px'
}
const changeSizeBack = function () {
  cookieImg.style.width = '200px'
}
const changePoint = function() {
  point.textContent++;
}
cookieImg.onclick = () => changePoint()
cookieImg.addEventListener('mousedown', changeSizePlus)
cookieImg.addEventListener('mouseup', changeSizeBack)