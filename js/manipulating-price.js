// Memory Function


const bestPrice = 1299;
function memoryCost(price) {
    const withoutMemoryCost = 0;
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostTrxt = memoryCost.innerText;
    const memoryCostNumber = parseFloat(memoryCostTrxt);
    if (price == 0) {
        memoryCost.innerText = withoutMemoryCost + 0;
    }
    else if(price == 180) {
        memoryCost.innerText = withoutMemoryCost + 180;
    }
    return memoryCostNumber;
}
// Storage Function
function storageCost(price) {
    const withoutStorageCost = 0;
    const storageCost = document.getElementById('storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostNumber = parseFloat(storageCostText);
    if (price == 0) {
        storageCost.innerText = withoutStorageCost + 0;
    }
    else if (price == 100) {
        storageCost.innerText = withoutStorageCost + 100;
    }
    else if(price == 180){
        storageCost.innerText = withoutStorageCost + 180;
    }
    return storageCostNumber;
}

// Delivery Function
function deliveryCost(price) {
    const onlyDelivery = 0;
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostNumber = parseFloat(deliveryCostText);
    if (price == 0) {
        deliveryCost.innerText = onlyDelivery + 0;
    }
    else if(price == 20){
        deliveryCost.innerText = onlyDelivery + 20;
    }
    return deliveryCostNumber;
}

function totalCost() {
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceText);
    totalPrice.innerText = bestPrice + parseFloat(memoryCost()) + parseFloat(storageCost()) + parseFloat(deliveryCost()); 
    return totalPriceNumber;
    
}

function footerTotal() {
    const footerTotal = document.getElementById('footer-total');
    const footerTotalText = footerTotal.innerText;
    footerTotal.innerText = totalCost();
}


// memory cost
document.getElementById('8gb-button').addEventListener('click',function () {
    memoryCost(0);
    totalCost();
    footerTotal();
});
document.getElementById('16gb-button').addEventListener('click',function () {
    memoryCost(180);
    totalCost();
    footerTotal();
});
// storage cost
document.getElementById('256gb-ssd-button').addEventListener('click',function () {
    storageCost(0);
    totalCost();
    footerTotal();
});
document.getElementById('512gb-ssd-button').addEventListener('click',function () {
    storageCost(100);
    totalCost();
    footerTotal();
});
document.getElementById('1tb-ssd-button').addEventListener('click',function () {
    storageCost(180);
    totalCost();
    footerTotal();
});
// delivery cost
document.getElementById('delivery-button').addEventListener('click',function () {
    deliveryCost(0);
    totalCost();
    footerTotal();
});
document.getElementById('running-delivery-button').addEventListener('click',function () {
    deliveryCost(20);
    totalCost();
    footerTotal();
});