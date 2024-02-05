//copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML

    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML

    var topNav = document.querySelector('.header-top .wrapper')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML
}

copyMenu()

//show mobile menu
const menuButton = document.querySelector('.trigger')
const closeButton = document.querySelector('.t-close')
const addclass = document.querySelector('.site')
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})

//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small')
submenu.forEach(menu => menu.addEventListener('click', toggle))

function toggle(e) {
    e.preventDefault()
    submenu.forEach( item => item != this ? item.closest('.has-child').classList.remove('expand') : null )
    if (this.closest('.has-child').classList != "expand");
    this.closest('.has-child').classList.toggle('expand')
}
//gunanya closest()?

//swiper/slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  //show search
const searchButton = document.querySelector(".t-search")
const tClose = document.querySelector(".search-close")
const showClass = document.querySelector(".site")
searchButton.addEventListener("click", function () {
    showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
    showClass.classList.remove("showsearch");
});




































//with data in json
const path = 'db.json'

fetch(path).then(res => res.json()).then(res => {
    const apparels = res.products.apparel
    const electronics = res.products.electronics
    const homes = res.products.home
    const shoes = res.products.shoes
    
    let rowProducts1 = ""

    apparels.forEach((el, i) => {
        if(i === 4) return true
        console.log(el.fileName)
        rowProducts1 += `<div class="item">
        <div class="media">
          <div class="thumbnail object-cover">
            <a href="#">
              <img src="assets/products/${el.fileName}" alt="${el.productName}">
            </a>
          </div>
          <div class="hoverable">
            <ul>
              <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
              <li><a href="#"><i class="ri-eye-line"></i></a></li>
              <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
            </ul>
          </div>
          <div class="discount circle flexcenter"><span>32%</span></div>
        </div>
        <div class="content">
          <h3 class="main-links"><a href="#">${el.productName}</a></h3>
          <div class="rating">
            <div class="stars"></div>
            <span class="mini-text">${el.rating}</span>
          </div>
          <div class="price">
            <span class="current">$129.99</span>
            <span class="normal mini-text">${el.price}</span>
          </div>
          <div class="mini-text">
            <p>${el.sold} sold</p>
            <p>${el.freeShipping === true ? 'Free Shipiping' : ''}</p>
          </div>
        </div>
      </div>`
    })

    const htmlPlace = document.querySelector('.row.products.mini')
    htmlPlace.innerHTML = rowProducts1
})