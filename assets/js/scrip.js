
let cartIcon=document.querySelector('#cart-icon')
let cart=document.querySelector('.cart')
let closeCart=document.querySelector('#close')
cartIcon.onclick=()=>{
   cart.classList.add("active")
}
closeCart.onclick=()=>{
    cart.classList.remove("active")
}
const ready=()=>{
    var btnRemoves=document.querySelectorAll(".cart-product-remove")
    for(var i=0;i<btnRemoves.length;i++){
        const btnRemove=btnRemoves[i]
        btnRemove.addEventListener("click",removeCart)
    }
    var cartQuanitys=document.querySelectorAll('.cart-product-quanity');
    for(var i=0;i<cartQuanitys.length;i++){
        var cartQuanity=cartQuanitys[i]
        cartQuanity.addEventListener("change",changed)
    }
    var addbtns=document.querySelectorAll(".bx-cart-add")
    for(var i=0;i<addbtns.length;i++){
        var adbtn=addbtns[i]
        adbtn.addEventListener("click",addToCartClicked)
    }
}
const removeCart=(event)=>{
    var btnRemoveCliked=event.target;
     btnRemoveCliked.parentElement.remove()
     upDateCartTotal() 
}
const addToCartClicked=(event)=>{
    var btn=event.target;
    var product=btn.parentElement
    var img=product.querySelectorAll(".product-img")[0].src
    var title=product.querySelectorAll(".product-title")[0].innerText
    var price=product.querySelectorAll(".price")[0].innerText
    addProduct(img,title,price)
    upDateCartTotal()
}
const addProduct =(img,title,price)=>{
    var cartContent=document.querySelector(".cart-content")
    var addCartbox=document.createElement('div')
    var cartNames=cartContent.querySelectorAll(".cart-product-title")
    for(var i=0;i<cartNames.length;i++){
        if(cartNames[i].innerText==title){
            alert("product is addded")
            return
        }
    }
    cartContent.appendChild(addCartbox)
    addCartbox.classList.add("cart-box")
    var content=`
    <img src="${img}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-product-price">${price}</div>
        <input type="number" value="1" class="cart-product-quanity">
        </div>
        <i class='bx bx-trash cart-product-remove'></i>
    `
    addCartbox.innerHTML=content
    addCartbox.querySelectorAll(".cart-product-remove")[0].addEventListener("click",removeCart)
    addCartbox.querySelectorAll(".cart-product-quanity")[0].addEventListener("change",changed)
}
const upDateCartTotal=()=>{
    var total=0
    var cartContainer=document.querySelector('.cart-content')
    var cartBoxs=cartContainer.querySelectorAll('.cart-box')
    for(var i=0;i<cartBoxs.length;i++){
        var cartBox=cartBoxs[i]
        var cartPrice=cartBox.querySelectorAll('.cart-product-price')[0]
        var cartQuanity=cartBox.querySelectorAll('.cart-product-quanity')[0]
        var price=Number(cartPrice.innerText.replace("$",""))
        total+=(price*cartQuanity.value)
    }
    document.querySelector(".total-price").innerText="$"+total
}
const changed=(event)=>{
    var input=event.target
    if(isNaN(input.value) || input.value<=0){
        input.value=1;
    }
    upDateCartTotal()
}
const btnBy=document.querySelector(".btn-by")
btnBy.addEventListener("click",()=>{
    alert("Maximum call stack size exceeded")
})

if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready)
}
else{
    ready()
}
const body=document.querySelector(".total-price")
body.addEventListener("click",demo)