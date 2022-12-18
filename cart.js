let data= JSON.parse(localStorage.getItem("Cart")) || []

display(data)


function display(data){
    let CartProduct=document.getElementById("CartProduct");
   let qty=1;

data.forEach((element,index) => {
    

    let card=document.createElement("div");
    let text1=document.createElement("div");
    // text1.style.display="flex";
    text1.style.justifyContent="space-between";

    let image=document.createElement("img");
    image.setAttribute("src",element.image);
    image.style.width="80%";
    image.style.display="block%";
    image.style.margin="5px auto";
    

    


    let price=document.createElement("p");
    price.innerText="PRICE :"+element.price;
     
    let quantity=document.createElement("p");
    quantity.innerText="Quantity :"+qty;


    let btnAdd=document.createElement("button");

    btnAdd.innerText="+";
    btnAdd.setAttribute("class","btnAdd");

    btnAdd.addEventListener("click",()=>{
      //

        //ading more feature

    })







    let btnSub=document.createElement("button");
    btnSub.innerText="-";
    btnSub.setAttribute("class","btnSub");

    btnAdd.addEventListener("click",()=>{
       //


    })







    let totalprice=document.createElement("h3");
    totalprice.innerText="Total :"+(element.price*(element.quantity))

text1.append(price,quantity,btnSub,btnAdd);
    card.append(image,text1,totalprice)
    
    CartProduct.append(card)




});


}
