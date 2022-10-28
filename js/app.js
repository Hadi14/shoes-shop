// DOM => Document Object Model
// BOM => Browser Object Model
const pc = document.querySelector('.container');
const products = [
    { id: 1, title: "Sport Shoo", price: 20 },
    { id: 2, title: "Women Shoo", price: 25 },
    { id: 3, title: "Boost", price: 15 }
]

products.forEach((pr) => {
    let tag = ' <div class="product-card">' +
        '<h1>' + pr.title + '</h1>' +
        '<p>Lorem ipsum, or lipsum as it is sometimes known</p>' +
        '<div class="product-pic" style="background-image: url(images/' + pr.id + '.png);"></div>' +
        '<div class="product-info">' +
        '<div class="product-price">$' + pr.price + '</div>' +
        '<a href="product.html?id=' + pr.id + '" class="product-button">See More</a></div></div>';
    pc.insertAdjacentHTML('beforeend', tag);
})