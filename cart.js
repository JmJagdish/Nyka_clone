let data = JSON.parse(localStorage.getItem("Cart")) || []


let grandTotalP=new Array(data.length);

let ifrem=document.getElementById("PaymentG1");


display(data)




function display(data) {
    let CartProduct = document.getElementById("CartProduct");
    let qty = 1;

    data.forEach((element, index) => {


        let card = document.createElement("div");
        let text1 = document.createElement("div");
        // text1.style.display="flex";
        text1.style.justifyContent = "space-between";

        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        image.style.width = "80%";
        image.style.display = "block%";
        image.style.margin = "5px auto";





        let price = document.createElement("p");
        price.innerText = "PRICE :" + element.price;

        // let quantity=document.createElement("p");
        // quantity.innerText="Quantity :"+qty;
        let totalprice = document.createElement("h3");

        let incrementBTN = document.createElement("button");
        incrementBTN.innerText = "+";
        let decrementBTN = document.createElement("button");
        decrementBTN.innerText = "-";
        let quentity = document.createElement("span");

        let QuantityValue = 0;
        quentity.innerText = QuantityValue;
        quentity.innerText = "Quantity :"+QuantityValue;

        incrementBTN.addEventListener("click", () => {
            QuantityValue++;
            quentity.innerText = "Quantity :"+QuantityValue;
            grandTotalP[index]=(element.price * QuantityValue);
            totalprice.innerText = "Total :" + (element.price * QuantityValue)
            console.log(grandTotalP)
            ifrem.contentDocument.location.reload(true);
            localStorage.setItem("grandTotalP",JSON.stringify(grandTotalP))
        });

        decrementBTN.addEventListener("click", () => {
            if (QuantityValue != 0) {
                QuantityValue--;
                quentity.innerText = "Quantity :"+QuantityValue;
                grandTotalP[index]=(element.price * QuantityValue);

                quentity.innerText = "Quantity :"+QuantityValue;

                ifrem.contentDocument.location.reload(true);
                totalprice.innerText = "Total :" + (element.price * QuantityValue)

                localStorage.setItem("grandTotalP",JSON.stringify(grandTotalP))
            }
           
        });


        





       
        // totalprice.innerText = "Total :" + (element.price * QuantityValue)

        text1.append(price, quentity, decrementBTN, incrementBTN);
        card.append(image, text1, totalprice)

        CartProduct.append(card)

        
       

    });


}




//account sec

let  userData= JSON.parse(localStorage.getItem("signupdetails")) || null

  if(userData)
  {
      let showUserName= document.querySelector(".accountSec")
      showUserName.innerHTML="<p>"+"&#8486;"+userData.user+"</p>";

      showUserName.style.fontSize="14px";
      showUserName.style.color="red";
      

  }