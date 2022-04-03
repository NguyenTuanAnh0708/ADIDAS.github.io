// cart
let cartIcon=document.querySelector('#cart-icon')
let cart=document.querySelector('.cart')
let closeCart=document.querySelector('#close')
// open cart
cartIcon.onclick=()=>{
   cart.classList.add("active")
}
// close cart
closeCart.onclick=()=>{
    cart.classList.remove("active")
}
const ready=()=>{
    //remove item
    var removeCart=document.getElementsByClassName("cart-product-remove")
    for(var i=0;i<removeCart.length;i++ ){
        var button=removeCart[i]
        button.addEventListener('click', removeCartItem)
    }
}
// remove cart item
const removeCartItem=(event)=>{
    var buttonClicked=event.target
    buttonClicked.parentElement.remove()
    updateTotal();
}  
// cart working
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}
// updatae total
const updateTotal=()=>{
    let cartConten =document.querySelector(".cart-content");
    var carBoxes=cartConten.querySelectorAll(".cart-box")
    var total = 0;
    for(var i=0;i<carBoxes.length;i++){
        var carBox=carBoxes[i]
        var priceElement=carBox.getElementsByClassName(".cart-product-price")[0]
        var price=parseFloat(priceElement.innerText.replace("$",""))
        var quantityElement=carBox.getElementsByClassName(".cart-product-quanity")[0]
        var quantity=quantityElement.value
        total=total+(price * quantity)
        document.querySelector(".total-price").innerText="$"+total
    }
}
