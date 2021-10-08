
const modal = document.querySelector('.modal')

const toggleModals = document.querySelectorAll('.js-toggle-modal')

toggleModals.forEach(toggle => { 
  toggle.addEventListener('click', function () {
  	let targetModalId = this.getAttribute('href')
  	targetModalId = targetModalId.slice(1,targetModalId.length)
    let targetModal = document.getElementById(targetModalId)
    console.log('Toggle click')
    
    targetModal.classList.toggle('active')
  }, false)
})

