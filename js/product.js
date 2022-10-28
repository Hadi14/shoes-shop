// ✌ :))
const h1 = document.querySelector('h1');
const ptag = document.querySelector('p');
const img = document.querySelector('img');
const products = [
    { id: 1, title: "Sport Shoo", price: 20 },
    { id: 2, title: "Women Shoo", price: 25 },
    { id: 3, title: "Boost", price: 15 }
]

let s = new URLSearchParams(location.search);
let id = s.get('id');
let x = products.find((item) => {
    return item.id == id;
})
// console.log(x)
h1.innerHTML = x.title;
// ptag.innerHTML=x.
img.src = ('./images/' + x.id + '.png')