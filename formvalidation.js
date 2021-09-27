
 var form = document.getElementById("cpa-form");
form.addEventListener('submit', function(e) {
    e.preventDefault();
   
let fname = document.getElementById("name").value;
let email = document.getElementById('email').value;
let number = document.getElementById('number').value;
let quant = document.getElementById('qunty').value;
let pin = document.getElementById('pin').value;
let addr = document.getElementById('add').value;
let size = document.getElementById('siz').value;
let clr = document.getElementById('colr').value;
let tagl = document.getElementById('tag').value;
let gend = document.getElementById('gen').value;
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

   
    if (fname === "") {
        alert("Enter name");
        return;
    }
   
   if(!/^[a-zA-Z]*$/g.test(fname))
    {
        
        alert('Name must have alphabets only');
     
        return;
    }
    if (email === "") {
        alert("Enter email");
        return;
    }
    if (number === "") {
        alert("Enter number");
        return;
    }
    var phoneno = /^\d{10}$/;
    if (!number.match(phoneno)) {
        alert('Phone number must have 10 digits only');
        return;
        
    }
    if (pin === "") {
        alert("Enter pin");
        return;
    }
    var numbers = /^[0-9]+$/;
    if (!pin.match(numbers)) {
        alert("Enter valid pin");
        return;
    }
    recipt = `Thankyou!.. \n Order placed Successfully  Here is Your RECEIPT : \nTagline: ${tagl} \nName:  ${fname} \nGender: ${gend} \nPhoneNumber: ${number} \nEmail: ${email} \nAddress: ${addr} \nPinCode: ${pin} \nSize: ${size} \nColor: ${clr} \nQuantity: ${quant} \nAmount: ₹ 400 \nReceipt issued on Date ${date}`;
    alert(recipt);
 });