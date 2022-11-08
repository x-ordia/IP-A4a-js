function generateReceipt(){
    if( document.my_form.Name.value === ""){
    alert("Please enter your name!!")
    return false;}
    if( document.my_form.email.value === "") {
    alert( "Please provide your Email!" );
    return false;
    }
    if(document.my_form.tagline.value.length > 10){
    alert("The Message exceeds the limit");
    return false;
    }
    if(document.my_form.number.value.length != 10){
    alert("Please Enter a valid Phone Number");
    return false;
    }
    let name = document.my_form.Name.value
    let contactNo = document.my_form.number.value
    let Address = document.my_form.Address.value
    let quantity = document.my_form.quantity.value
    let dod = document.my_form.dod.value
    let d = new Date();
    var opened = window.open("");
    opened.document.write(`
    <html>
    <body>
    <h2>Your Receipt!!</h2>
    <div style="border: 2px solid black; width:300px; height: 200px;
    display:grid; place-items: center;"><p>You order is Successfully Placed! <br>
    Date of Generation:${d}</p>
    Name: ${name}<br>
    Contact : ${contactNo}<br>
    Address: ${Address}<br>
    Quantity: ${quantity}<br>
    Date of Delivery: ${dod}<br>
    Thank You for Shopping!!
    </div>
    </body>
    </html>
    `);
    }