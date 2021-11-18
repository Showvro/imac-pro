//update value section
function updateCost(id, value) {
    var costElement = document.getElementById(id)
    costElement.innerText = value;
};

// add discount section 
const discountTotalPrice = document.getElementById('total-cost');
const discountPrice = document.getElementById('promo-price');
const promoInput = document.getElementById('promo-input');
const applyPromo = document.getElementById('apply-promo');

//total price section
function totalPrice() {
    const bestPriceTag = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceTag.innerText);

    const memoryPriceTag = document.getElementById('memory-cost');
    const memoryPrice = parseInt(memoryPriceTag.innerText);

    const storageCostTag = document.getElementById('storage-cost');
    const storageCost = parseInt(storageCostTag.innerText);

    const deliveryCostTag = document.getElementById('delivery-cost');
    const deliveryCost = parseInt(deliveryCostTag.innerText);

    const allPrice = document.getElementById('total-cost');
    allPrice.innerText = bestPrice + memoryPrice + storageCost + deliveryCost;
    discountPrice.innerText = allPrice.innerText;
};

//details calculation section
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateCost('memory-cost', 0);
    totalPrice();
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateCost('memory-cost', 180);
    totalPrice();
});
document.getElementById('ssd-256gb').addEventListener('click', function () {
    updateCost('storage-cost', 0);
    totalPrice()
});
document.getElementById('ssd-512gb').addEventListener('click', function () {
    updateCost('storage-cost', 100)
    totalPrice()
});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    updateCost('storage-cost', 180)
    totalPrice()
});
document.getElementById('free-delivery').addEventListener('click', function () {
    updateCost('delivery-cost', 0)
    totalPrice()
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    updateCost('delivery-cost', 20)
    totalPrice()
});

//promo code discount
applyPromo.addEventListener('click', function () {
    if (promoInput.value == 'stevekaku') {
        const priceRate = parseInt(discountTotalPrice.innerText) * 0.2;
        discountPrice.innerText = parseInt(discountTotalPrice.innerText) - priceRate;
        // input clear 
        promoInput.value = '';
    }
});