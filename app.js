//template_lzz2glr

//service_79ya0le

// EYbfZeQtPfjqtvrc1

function contact(event){
    event.preventDefault()
    // emailjs
    // .sendForm(
    //     'service_79ya0le',
    //     'template_lzz2glr',
    //     event.target,
    //     'EYbfZeQtPfjqtvrc1'
    // ).then(()=>{
    //     console.log('this worked1')
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        console.log('it worked 1')
        }, 1000)
}