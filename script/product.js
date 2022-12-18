// ################################banner slide##################

// var slideIndex = 0;
// showSlides();

// function showSlides() {

//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 8000); // Change image every 8 seconds
// }


//-----------------------------------------

let slidInd = 1;
showSlide(slidInd);

function plusSlides(n) {
    showSlide(slidInd += n);
}

function currentSlide(n) {
    showSlide(slidInd = n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slidInd = 1 }
    if (n < 1) { slidInd = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slidInd - 1].style.display = "block";
    dots[slidInd - 1].className += " active";
}
// ####################bannerSlide#################

// -----------------sort by price----
function sortByPrice() {
    let fPrice = document.querySelector("#price").value;


    if (fPrice == "Low") {
        productArr.sort(function (a, b) {

            return a.price - b.price

        })

        displayData(productArr);
    }

    if (fPrice == "High") {
        productArr.sort(function (a, b) {

            return b.price - a.price
        })

        displayData(productArr);
    }



}

// ---------------sort by name--------------
// ----------->






// -----------------sorting end-------------------------

let productArr = [];
fetch("product.json").then((res) => {
    return res.json();

}).then((actualData) => {
    productArr = actualData;
    displayData(actualData)
}).catch((error) => {
    console.log(error);
});



function displayData(data) {
    let allproduct = document.getElementById("allproduct");
    allproduct.innerHTML=null;
    data.forEach((ele) => {
        let card = document.createElement("div");
     let text1 = document.createElement("div");
        let text2=document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", ele.image);
        





        let name = document.createElement("p");
        name.style.fontSize = "18px";
        name.innerText = ele.name;

        let mrp = document.createElement("p");
        mrp.innerText = "MRP: ₹ " + ele.mrp
        mrp.style.textDecoration = "line-through"
        mrp.style.color = "grey";

        let price = document.createElement("p")
        price.innerText= "MRP: ₹ "+ele.price
        price.style.fontSize= "18px";



        let discount = document.createElement("p")
        discount.innerText= ele.discount + " % Off"
        discount.style.color= "#4CAF50";
        

        let gift=document.createElement("p");
        gift.innerText=ele.gift;



      text1.append(name,mrp,price,discount);

      let ratings = document.createElement("p")
      ratings.innerText= ele.ratings;
      ratings.style.fontSize= "18px"

      let reviews = document.createElement("p")
      reviews.innerText= ele.reviews;
      text2.append(gift,ratings,reviews);
    

      let button=document.createElement("button");
        button.innerText="Add to Cart"


        button.addEventListener("click",()=>{
            console.log("btn")
            //add to cart function;
            addToCart(ele);



        })

      card.append(image,text1,text2,button)
      allproduct.append(card);
    });



}



let cartData=JSON.parse(localStorage.getItem("Cart"))||[];

function addToCart(ele)
   {
    let allreadyInTheCart=false;

    for(let i=0;i<cartData.length;i++){
        if(cartData[i].id==ele.id){
            allreadyInTheCart=true;
            break;
        }
        
    }
    if(allreadyInTheCart){
            alert("Product All Ready in the Cart");
            console.log(ele)
        }else{
            alert("Product Added In The Cart");
            cartData.push(ele);
            console.log(ele)
        }

    localStorage.setItem("Cart",JSON.stringify(cartData));


}




