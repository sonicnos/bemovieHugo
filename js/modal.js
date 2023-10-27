let template_login_item = document.querySelector('.template_login_item').innerHTML
let template_register_item = document.querySelector('.template_register_item').innerHTML
let register_login_item = document.querySelector('.register_login_item')
let choice = document.querySelector('.choice span')
let btn_modal_movie_off = document.querySelector('.btn_modal_movie_off')
let btn_modal_movie_on = document.querySelector('.btn_modal_movie_on')
let btn_modal_login_off = document.querySelector('.btn_modal_login_off')
let btn_modal_login_on = document.querySelector('.btn_modal_login_on')

document.addEventListener('click', (e)=>{
    e.stopPropagation()
})


// MODAL ON OFF
function verifModal( modal) {
    if (document.querySelector(`.${modal}`).matches('.modal_desactive') == true) {
        document.querySelector(`.${modal}`).className = `modal ${modal} modal_active`
    } else {
        document.querySelector(`.${modal}`).className = `modal ${modal} modal_desactive`
    }
}
btn_modal_movie_off.addEventListener('click', () => verifModal('modal_movie_item'))

btn_modal_movie_on.addEventListener('click', () => verifModal('modal_movie_item'))

btn_modal_login_off.addEventListener('click', ()=> verifModal('modal_register_login'))

btn_modal_login_on.addEventListener('click', ()=> verifModal('modal_register_login'))



// REGISTER LOGIN
document.addEventListener('click', (e)=>{
    e.stopImmediatePropagation()

    if (e.target.className == 'sig') {
        register_login_item.innerHTML = template_register_item
        
    }else if(e.target.className == 'log') {
        register_login_item.innerHTML = template_login_item

    }else if( e.target.innerHTML == choice.innerHTML){
        register_login_item.innerHTML = template_register_item
    }
})







