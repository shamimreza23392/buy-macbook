
function memoryPrice(price) {
    const price8gb = 0;
    const reglurPrice = document.getElementById('memory-cost')
    const reglurPriceText = reglurPrice.innerText
    // let reglurPriceNumber = parseFloat(reglurPriceText);
    if (price == 0) {
        reglurPrice.innerText = price8gb;
    }
    else{
        reglurPrice.innerText = price8gb + price;
    }
    return reglurPrice.innerText;
};

// sotrage Function

function storagePrice(price) {
    const storage256Gb = 0;
    const storagePrice = document.getElementById('storage-cost');
    const storagePricesText = storagePrice.innerText;
    const storagePriceNumber = parseFloat(storagePricesText);
    if (price == 0) {
        storagePrice.innerText = storage256Gb;
    }
    else if (price == 100) {
        storagePrice.innerText = storage256Gb + 100;
    }
    else{
        storagePrice.innerText = storage256Gb + 180;
    }
    return storagePrice.innerText;
};

// delivary Function

function deliveryCost(cost) {
    const normalDelivery = 0;
    const runningDeliveryCost = document.getElementById('delivery-cost');
    const runningDeliveryCostText = runningDeliveryCost.innerText;
    const runningDeliveryCostNumber = parseFloat(runningDeliveryCostText);
    if (cost == 0) {
        runningDeliveryCost.innerText =normalDelivery;
    }
    else{
        runningDeliveryCost.innerText = normalDelivery + 20;
    }
    return runningDeliveryCost.innerText;
}


function updateTotal(){
    let totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceText);
    totalPrice = 1299 + totalPriceNumber + memoryPrice() + storagePrice() + deliveryCost();

}

// Memory input
document.getElementById('8gb-button').addEventListener('click',function () {
    memoryPrice(0)
});
document.getElementById('16gb-button').addEventListener('click',function () {
    memoryPrice(180)
});

// Storage input

document.getElementById('256gb-ssd-button').addEventListener('click', function () {
    storagePrice(0)
});
document.getElementById('512gb-ssd-button').addEventListener('click', function () {
    storagePrice(100)
});
document.getElementById('1tb-ssd-button').addEventListener('click', function () {
    storagePrice(180)
});

// delivery input
document.getElementById('delivery-button').addEventListener('click', function () {
    deliveryCost(0)
});
document.getElementById('running-delivery-button').addEventListener('click', function () {
    deliveryCost(20)
});
