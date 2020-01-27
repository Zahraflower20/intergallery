const images = ['Hassan_F_Portfolio-11.jpg', 'Hassan_F_Portfolio-12.jpg', 'Hassan_F_Portfolio-17.jpg', 'Hassan_F_Portfolio-18.jpg', 'Hassan_F_Portfolio-25.jpg', 'Hassan_F_Portfolio-20.jpg', 'IMG_0298.jpg', 'IMG_1128.JPG', 'IMG_0305.jpg', 'IMG_1112.JPG', 'IMG_1153.JPG', 'IMG_1174.JPG']
const gallery = document.getElementById('gallery')
const Emptyphoto = []
/* <div class="photo-box">
        <div class="photo">1</div>
        <div class="photo">2</div>
        <div class="photo">3</div>
        <div class="photo">4</div>
        <div class="photo">5</div>
        <div class="photo">6</div>
        <div class="photo">7</div>
        <div class="photo">8</div>
        <div class="photo">9</div>
        <div class="photo">10</div>
        <div class="photo">11</div>
        <div class="photo">12</div>
     </div>*/

Emptyphoto.push(`<div class="overlay-display" id="overlay">
    <i class="fas fa-times-circle"></i>
    <img class="img-content" src="https://placehold.it/300" ><h1 id="caption">Parliament Hill and National Gallery of Canada</h1></div>
    
    
  </div>`)

for (const image of images) {
    Emptyphoto.push(`<div id="images/${image}" class="photo"><img src="images/${image}" alt="Paraliment Hill and National Art gallery"></div>`)

}

gallery.innerHTML = Emptyphoto.join('')


const overlay = document.getElementById('overlay')
const overlayimg = document.querySelector('#overlay img')
const button = document.querySelector('.fas')
const captionText = document.getElementById("caption")



button.addEventListener('click',
    function () {
        overlay.classList.remove('show')
        


        
    })

   

const photos = document.querySelectorAll('.photo')




for (const photo of photos) {
    photo.addEventListener('click', function () {
       
        overlay.classList.add('show')
        
        const picture = photo.getAttribute("id")
          overlayimg.setAttribute("src", picture)
          
          captionText.setAttribute("alt", picture)
          

         
    })

    
}