var div = document.getElementById("sell")
var btn = document.querySelectorAll(".category-info #bttn")
var product = document.getElementById("bodyOfCard")
var price = document.getElementById("price")
var x = 1
var y 
var total = 0
btn.forEach(function (z) {
    z.onclick = function () {
        y = this.getAttribute("value")
        total += +y
        div.innerHTML = total + " EGP"
        product.innerHTML += x++ + "- " + z.getAttribute("name") + "</br>"
        price.innerHTML += y + " EGP" + "</br>"

    }
}
)