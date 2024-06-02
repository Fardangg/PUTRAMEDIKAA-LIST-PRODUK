document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const productModal = document.getElementById('productModal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');
    const productTitle = document.getElementById('productTitle');
    const productDescription = document.getElementById('productDescription');

    const products = [
        { name: 'Product 1', price: '$10', description: 'Description for Product 1', image: 'product1.jpg' },
        { name: 'Product 2', price: '$20', description: 'Description for Product 2', image: 'product2.jpg' },
        { name: 'Product 3', price: '$30', description: 'Description for Product 3', image: 'product3.jpg' },
        // Add more products here
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        productItem.addEventListener('click', () => {
            productTitle.textContent = product.name;
            productDescription.textContent = product.description;
            productModal.style.display = 'block';
        });

        productList.appendChild(productItem);
    });

    closeModal.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == productModal) {
            productModal.style.display = 'none';
        }
    });
});

function initMap() {
    const location = { lat: -25.344, lng: 131.036 };
    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, {
        zoom: 4,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });

    // Atur ulang ukuran peta saat ukuran layar berubah
    google.maps.event.addDomListener(window, 'resize', function() {
        const center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productName = item.querySelector('h3').textContent.toLowerCase();
        const productDescription = item.querySelector('p').textContent.toLowerCase();
        const isVisible = productName.includes(searchInput) || productDescription.includes(searchInput);
        
        item.style.display = isVisible ? '' : 'none';

        if (isVisible) {
            item.addEventListener('click', () => {
                const name = item.querySelector('h3').textContent;
                const description = item.querySelector('p').textContent;
                displayProductModal(name, description);
            });
        } else {
            item.removeEventListener('click', () => {});
        }
    });
}

function displayProductModal(name, description) {
    const productTitle = document.getElementById('productTitle');
    const productDescription = document.getElementById('productDescription');

    productTitle.textContent = name;
    productDescription.textContent = description;
    const productModal = document.getElementById('productModal');
    productModal.style.display = 'block';
}

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', () => {
    const productModal = document.getElementById('productModal');
    productModal.style.display = 'none';
});



document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const productName = this.getAttribute('data-title');
        document.getElementById('product-title').textContent = productName;
        document.getElementById('modal').style.display = 'block';
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}

// script.js

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('show');
    burger.classList.toggle('active');
}

// Fungsi untuk transisi scroll ke elemen tertentu
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}
