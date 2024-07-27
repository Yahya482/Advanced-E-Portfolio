//template_lzz2glr

//service_79ya0le

// EYbfZeQtPfjqtvrc1

function contact(event){
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
    .sendForm(
        'service_79ya0le',
        'template_lzz2glr',
        event.target,
        'EYbfZeQtPfjqtvrc1'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on yahyahussain4@gmail.com"
        )
    })
}

let isModalOpen = false
function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
        
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}