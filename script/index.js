// console.log("working Fine");


//top nav Animation

setInterval(() => {
    let navData = document.getElementById("topleftAnim");
    if (navData.innerHTML == "") {
        navData.innerHTML = "<h1>Magical Christmas Beauty Sale - Up To 50% Off</h1>";

    } else {
        navData.innerHTML = "";
    }
}, 2000);





// ################################banner slide##################

let slideIndex = 0;
showSlides();

function showSlides() {

    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    // for (let i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 8 seconds
}


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
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slidInd - 1].style.display = "block";
    // dots[slidInd - 1].className += " active";
}
// ####################bannerSlide#################






// topband------->


let topbrands = [
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    },
    {
        image: "https://images-static.nykaa.com/uploads/16e6537a-db81-4471-b3d6-54132bcca21b.gif?tr=w-400,cm-pad_resize",
        heading: "On ₹3000: 1 Full-Size, Pouch & Sample!",
        dis: "On ₹5000: 3 Gifts & 10% discount!"
    }

];

let topBand = document.getElementById("topBand");
topbrands.forEach((element) => {
    let card = document.createElement("div");


    let image = document.createElement("img");
    image.setAttribute("src", element.image);

    let head = document.createElement("h3");
    head.innerText = element.heading;

    let textDiv = document.createElement("div");

    let para = document.createElement("p");
    para.innerText = element.dis;

    textDiv.append(head, para)

    card.append(image, textDiv);
    topBand.append(card)


});





// ------------------------best seller---------------------

let bestsellerArr = [
    {
        image: "https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	1521",
        mrp: "MRP:  " + "₹" + 999
    },
    {
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/g/dg_lb_ei_edp_25ml_3423473032793.jpg",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	16921",
        mrp: "MRP:  " + "₹" + 4000
    },
    {
        image: "https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	1521",
        mrp: "MRP:  " + "₹" + 999
    },
    {
        image: "https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	1521",
        mrp: "MRP:  " + "₹" + 999
    },
    {
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/g/dg_lb_ei_edp_25ml_3423473032793.jpg",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	16921",
        mrp: "MRP:  " + "₹" + 4000
    },
    {
        image: "https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	1521",
        mrp: "MRP:  " + "₹" + 999
    }, {
        image: "https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	1521",
        mrp: "MRP:  " + "₹" + 999
    },
    {
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/g/dg_lb_ei_edp_25ml_3423473032793.jpg",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	16921",
        mrp: "MRP:  " + "₹" + 4000
    }, {
        image: "https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	1521",
        mrp: "MRP:  " + "₹" + 999
    }, {
        image: "https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize",
        name: "Dolce & Gabbana The Only One Eau De Parfum",
        qty: "1.1ml Each",
        ratings: "★★★★☆	1521",
        mrp: "MRP:  " + "₹" + 999
    }


];

let bestSeller = document.getElementById("bestSeller");


bestsellerArr.forEach((element) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", element.image);


    let name = document.createElement("h4");
    name.innerText = element.name;


    let qty = document.createElement("p");
    qty.innerText = element.qty;
    qty.style.color = "#546E7A";

    let ratings = document.createElement("h4")
    ratings.innerText = element.ratings;
    ratings.style.color = "#5D4037";

    let price = document.createElement("h3");
    price.innerText = element.mrp;
    price.style.color="#1565C0";

    let textDiv=document.createElement("div");

    let ancClass=document.createElement("a");
    ancClass.setAttribute("class","carousel-item")

    textDiv.append(ancClass,name, qty, ratings, price)
    card.append(image,textDiv );


    bestSeller.append(card);

})




//popup signin and login
function openForm() {
    document.getElementById("myForm").style.display = "block";
   
  }


  function openForml() { document.getElementById("loginForm").style.display = "block";
  document.getElementById("myForm").style.display = "none";

}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    
  }

  function closeForml() {document.getElementById("loginForm").style.display = "none";}
  
  //sign up


  let signup= JSON.parse(localStorage.getItem("signupdetails")) || [];


  document.querySelector("#form1").addEventListener("submit", Submission)

  function Submission(event){
      
      event.preventDefault();

  let email = document.querySelector("#signEmail").value;
  
  let passw=document.querySelector("#signpass").value;
    let SignName=document.getElementById("SignName").value;
      let obj= {
          user: SignName,
          email:email,
            pass:passw
      }

     
  
      if(obj.email==signup.email){
        alert("You are already an User please login")
        openForml();

      }else{





      if(email.indexOf("@")==-1)
      {
          alert("Enter Valid email Id")
         
      }
      else{
          alert("Your Account Created Successfully,Login Now");
          window.location.href= "product.html"
          localStorage.setItem("signupdetails", JSON.stringify(obj))

      }

      // signup.push(obj)


     
  }


}

//sign up success

 document.querySelector("#form2").addEventListener("submit", Submissionl);
 let login= JSON.parse(localStorage.getItem("signupdetails")) || [];
function Submissionl(event){
   

  
    event.preventDefault();

    let email = document.querySelector("#logemail").value;
    
    let passw=document.querySelector("#logPass").value;
     
  
       
    
        if(String(email)==login.email){

            if(String(passw)==login.pass){
                alert("Login Successfull");
            


                window.location.href= "product.html"

            }

        
            
  
        }else{
            alert("Worng email or password");

        }
  





}
//log in Function


