const products = [
 {
   name: 'Sony Playstation 5',
   url: 'images/playstation_5.png',
   category: 'games',
   price: 499.99,
 },
 {
   name: 'Samsung Galaxy',
   url: 'images/samsung_galaxy.png',
   category: 'smartphones',
   price: 399.99,
 },
 {
   name: 'Cannon EOS Camera',
   url: 'images/cannon_eos_camera.png',
   category: 'cameras',
   price: 749.99,
 },
 {
   name: 'Sony A7 Camera',
   url: 'images/sony_a7_camera.png',
   category: 'cameras',
   price: 1999.99,
 },
 {
   name: 'LG TV',
   url: 'images/lg_tv.png',
   category: 'televisions',
   price: 799.99,
 },
 {
   name: 'Nintendo Switch',
   url: 'images/nintendo_switch.png',
   category: 'games',
   price: 299.99,
 },
 {
   name: 'Xbox Series X',
   url: 'images/xbox_series_x.png',
   category: 'games',
   price: 499.99,
 },
 {
   name: 'Samsung TV',
   url: 'images/samsung_tv.png',
   category: 'televisions',
   price: 1099.99,
 },
 {
   name: 'Google Pixel',
   url: 'images/google_pixel.png',
   category: 'smartphones',
   price: 499.99,
 },
 {
   name: 'Sony ZV1F Camera',
   url: 'images/sony_zv1f_camera.png',
   category: 'cameras',
   price: 799.99,
 },
 {
   name: 'Toshiba TV',
   url: 'images/toshiba_tv.png',
   category: 'televisions',
   price: 499.99,
 },
 {
   name: 'iPhone 14',
   url: 'images/iphone_14.png',
   category: 'smartphones',
   price: 999.99,
 },
];

const productWrapper = document.querySelector('#products-wrapper');
const filterContainer = document.querySelector('#filters-container');
const checkboxes = document.querySelectorAll('.check');
const searchInput = document.querySelector('#search');
const cartCountDiv = document.querySelector('#cart-count');

searchInput.addEventListener('input',filterProducts);
filterContainer.addEventListener('change',filterProducts);

let cartItemCount = 0;

const productElements = [];

products.forEach(product => {
const productElement = createProductElement(product);
productElements.push(productElement);
productWrapper.appendChild(productElement);
})

function createProductElement(product) {
  const div = document.createElement('div');
  div.className = `item space-y-2`;

  div.innerHTML = `
  <div 
    class="bg-gray-100 flex-justify-center relative      overflow-hidden group cursor-pointer border rounded-xl">    
    <img 
    src="${product.url}" 
    alt="${product.name}" 
    class="w-full-h-full object-cover">    
    </img>
    <span
    class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
    >Add To Cart</span>
  </div>
<p class="text-xl">${product.name}</p>
<strong>$${product.price.toLocaleString()}</strong>
  `
  div.querySelector('.status').addEventListener('click',updateCart);

  return div
}

function updateCart(e) {
  const statusEl = e.target
  if(statusEl.classList.contains('added')) {
    statusEl.classList.remove('added');
    statusEl.textContent = "Add To Cart"
    statusEl.classList.add('bg-gray-800');
    statusEl.classList.remove('bg-red-600');

    cartItemCount--
  }else {
    statusEl.classList.add('added');
    statusEl.textContent = "Remove From Cart"
    statusEl.classList.remove('bg-gray-800');
    statusEl.classList.add('bg-red-600');

    cartItemCount++
  }
  cartCountDiv.innerHTML = cartItemCount.toString();
}

function filterProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const checkedCategories = Array.from(checkboxes)
  .filter((check) => check.checked)
  .map(check => check.id);

  productElements.forEach((productElement,index) => {
    const product = products[index];

    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const isIncheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.category);

    if(matchesSearchTerm && isIncheckedCategory) {
      productElement.classList.remove('hidden');
    } else {
      productElement.classList.add('hidden');
    }
  })
}