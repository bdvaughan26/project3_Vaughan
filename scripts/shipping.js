function initShippingPage() {
    displayShippingPage();
    const form = document.getElementById('shipping-form');
    if (form) form.addEventListener('submit', submitShippingForm);
    const sameAsBillingCheck = document.getElementById("sameAsBilling");
    sameAsBillingCheck.checked = true
    sameAsBillingCheck.addEventListener("change", checkBillingChecked);
    checkBillingChecked()
}

function displayShippingPage() {
    const summaryBox = document.getElementById('shipping-summary');
    if (!summaryBox) return;

    const cart = getCart();
    let html = cart.map(item => `
        <div class="summary-line">
            <span>${item.name} (${item.size}, ${item.color}) x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>`).join('');

    html += `<div class="summary-line"><strong>Total</strong><strong>$${getCartTotal(cart).toFixed(2)}</strong></div>`;
    summaryBox.innerHTML = html;
}

function submitShippingForm(event) {
    if (!validateShippingForm()){return}
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    document.getElementById('shipping-message').innerHTML = `<div class="message-box">Order placed for ${fullName}!</div>`;
    localStorage.removeItem('cart');
    event.target.reset();
    displayShippingPage();
}

function validateShippingForm() {
    const form = document.getElementById('shipping-form');
            if (form.fullName.value == "") {
                alert("Name is required.");
                return false;
            }
            if (form.address.value == "") {
                alert("Address is required.");
                return false;
            }
            if (form.city.value == "") {
                alert("City is required.");
                return false;
            }
            if (form.state.value == "") {
                alert("State is required.");
                return false;
            }
            if (form.zipCode.value == "") {
                alert("Zip Code is required.");
                return false;
            }

            

            // if (parseInt(form.zipCode.value) === NaN){
            //     alert("Zip Code is not Number.");
            //     return false;
            // }
            
            return true;
        }







function checkBillingChecked() {
    let billingInfoSection = document.getElementById("billingInformation");
const sameAsBillingCheck = document.getElementById("sameAsBilling");
  if (sameAsBillingCheck.checked) {
    billingInfoSection.style.display = "none";
  } else {
    billingInfoSection.style.display = "block";
  }
}