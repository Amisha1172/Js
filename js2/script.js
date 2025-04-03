let items = [
  {
    img: "https://img.drz.lazcdn.com/static/np/p/62c32b52b0d71c0b7efbe239e96a496f.jpg_400x400q80.jpg_.webp",
    name: "furniture",
    price: 800,
  },
  {
    img: "https://img.drz.lazcdn.com/static/np/p/62c32b52b0d71c0b7efbe239e96a496f.jpg_400x400q80.jpg_.webp",
    name: "furniture",
    price: 800,
  },
  {
    img: "https://img.drz.lazcdn.com/static/np/p/62c32b52b0d71c0b7efbe239e96a496f.jpg_400x400q80.jpg_.webp",
    name: "furniture",
    price: 800,
  },
  {
    img: "https://img.drz.lazcdn.com/static/np/p/62c32b52b0d71c0b7efbe239e96a496f.jpg_400x400q80.jpg_.webp",
    name: "furniture",
    price: 800,
  },
  {
    img: "https://img.drz.lazcdn.com/static/np/p/62c32b52b0d71c0b7efbe239e96a496f.jpg_400x400q80.jpg_.webp",
    name: "furniture",
    price: 800,
  },
  {
    img: "https://img.drz.lazcdn.com/static/np/p/62c32b52b0d71c0b7efbe239e96a496f.jpg_400x400q80.jpg_.webp",
    name: "furniture",
    price: 800,
  },
];

let container = document.querySelector(".store");

window.addEventListener("DOMContentLoaded", () => {
  let cards = items
    .map((e) => {
      return ` <div class="card">
    <img src="${e.img}" alt="">
    <h1>${e.name}</h1>
    <h4>${e.price}</h4>
</div>`;
    })
    .join(""); 

  console.log(cards);
  container.innerHTML = cards;
});
