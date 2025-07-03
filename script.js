// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "آيفون 15 برو ماكس",
        category: "electronics",
        price: 4999,
        oldPrice: 5499,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.8,
        reviews: 245,
        badge: "جديد",
        description: "أحدث إصدار من آيفون بتقنيات متطورة وكاميرا احترافية",
        features: ["شاشة 6.7 بوصة", "كاميرا 48 ميجابكسل", "معالج A17 Pro", "ذاكرة 256 جيجا"],
        colors: ["#000000", "#C0C0C0", "#FFD700", "#4169E1"],
        sizes: ["128GB", "256GB", "512GB", "1TB"]
    },
    {
        id: 2,
        name: "سامسو��ج جالاكسي S24 الترا",
        category: "electronics",
        price: 4299,
        oldPrice: 4799,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.7,
        reviews: 189,
        badge: "خصم",
        description: "هاتف ذكي متطور بأداء عالي وبطارية طويلة المدى",
        features: ["شاشة 6.8 بوصة", "كاميرا 200 ميجابكسل", "معالج Snapdragon 8 Gen 3", "ذاكرة 512 جيجا"],
        colors: ["#000000", "#C0C0C0", "#800080", "#008000"],
        sizes: ["256GB", "512GB", "1TB"]
    },
    {
        id: 3,
        name: "فستان صيفي أنيق",
        category: "fashion",
        price: 299,
        oldPrice: 399,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.5,
        reviews: 67,
        badge: "خصم",
        description: "فستان صيفي مريح وأنيق مناسب للمناسبات المختلفة",
        features: ["قماش قطني", "تصميم عصري", "مريح للارتداء", "سهل العناية"],
        colors: ["#FF69B4", "#87CEEB", "#98FB98", "#F0E68C"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        name: "حذاء رياضي نايكي",
        category: "sports",
        price: 599,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.6,
        reviews: 134,
        badge: "مميز",
        description: "حذاء رياضي مريح ومتين مناسب للجري والتمارين الرياضية",
        features: ["تقنية Air Max", "مقاوم للماء", "خفيف الوزن", "تصميم عصري"],
        colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF"],
        sizes: ["40", "41", "42", "43", "44", "45"]
    },
    {
        id: 5,
        name: "لابتوب ديل XPS 13",
        category: "electronics",
        price: 3999,
        oldPrice: 4499,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.9,
        reviews: 298,
        badge: "الأكثر مبيعاً",
        description: "لابتوب عالي الأداء مناسب للعمل والدراسة",
        features: ["معالج Intel i7", "ذاكرة 16 جيجا", "SSD 512 جيجا", "شاشة 4K"],
        colors: ["#C0C0C0", "#000000"],
        sizes: ["13 بوصة", "15 بوصة"]
    },
    {
        id: 6,
        name: "قميص قطني كلاسيكي",
        category: "fashion",
        price: 199,
        oldPrice: 249,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.3,
        reviews: 89,
        badge: "",
        description: "قميص قطني كلاسيكي مناسب للعمل والمناسبات الرسمية",
        features: ["قطن 100%", "مقاوم للتجاعيد", "قصة كلاسيكية", "ألوان متنوعة"],
        colors: ["#FFFFFF", "#87CEEB", "#FFB6C1", "#98FB98"],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 7,
        name: "كرسي مكتب مريح",
        category: "home",
        price: 899,
        oldPrice: 1099,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.4,
        reviews: 156,
        badge: "خصم",
        description: "كرسي مكتب مريح بتصميم عصري ودعم للظهر",
        features: ["دعم قطني", "قابل للتعديل", "عجلات ناعمة", "مواد عالية الجودة"],
        colors: ["#000000", "#8B4513", "#808080"],
        sizes: ["متوسط", "كبير"]
    },
    {
        id: 8,
        name: "ساعة ذكية أبل واتش",
        category: "electronics",
        price: 1599,
        oldPrice: 1799,
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        ],
        rating: 4.7,
        reviews: 203,
        badge: "جديد",
        description: "ساعة ذكية متطورة لتتبع الصحة واللياقة البدنية",
        features: ["مراقب نبضات", "GPS مدمج", "مقاوم للماء", "بطارية 18 ساعة"],
        colors: ["#000000", "#C0C0C0", "#FFD700", "#FF69B4"],
        sizes: ["40mm", "44mm"]
    }
];

// متغيرات عامة
let currentSlide = 0;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = 'all';
let displayedProducts = 6;

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    displayProducts();
    updateCartCount();
    updateWishlistCount();
    initializeCountdown();
    initializeScrollTop();
    loadCartFromStorage();
});

// تهيئة السلايدر
function initializeSlider() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// تغيير الشريحة
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// الانتقال لشريحة محددة
function currentSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = n - 1;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// عرض المنتجات
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);
    
    const productsToShow = filteredProducts.slice(0, displayedProducts);
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // إضافة تأثير الحركة
    setTimeout(() => {
        const cards = productsGrid.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }, 100);
}

// إنشاء بطاقة منتج
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<div class="product-badge ${product.badge === 'جديد' ? 'new' : ''}">${product.badge}</div>` : ''}
            <div class="product-actions">
                <button class="action-btn" onclick="toggleWishlist(${product.id})" title="إضافة للمفضلة">
                    <i class="fas fa-heart ${isInWishlist(product.id) ? 'text-red' : ''}"></i>
                </button>
                <button class="action-btn" onclick="quickView(${product.id})" title="عرض سريع">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn" onclick="shareProduct(${product.id})" title="مشاركة">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="current-price">${product.price} ريال</span>
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ريال</span>` : ''}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> إضافة للسلة
            </button>
        </div>
    `;
    return card;
}

// توليد النجوم
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// فلترة المنتجات
function filterProducts(category) {
    currentFilter = category;
    displayedProducts = 6;
    
    // تحديث أزرار الفلتر
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    displayProducts();
}

// تحميل المزيد من المنتجات
function loadMoreProducts() {
    displayedProducts += 6;
    displayProducts();
}

// البحث عن المنتجات
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productsGrid = document.getElementById('productsGrid');
    
    if (!searchTerm) {
        displayProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #a0aec0;">لم يتم العثور على منتجات</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// إضافة للسلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification('تم إضافة المنتج للسلة بنجاح!');
}

// إضافة/إزالة من المفضلة
function toggleWishlist(productId) {
    const index = wishlist.findIndex(item => item.id === productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('تم إزالة المنتج من المفضلة');
    } else {
        const product = products.find(p => p.id === productId);
        wishlist.push(product);
        showNotification('تم إضافة المنتج للمفضلة');
    }
    
    updateWishlistCount();
    saveWishlistToStorage();
    displayProducts(); // إعادة عرض المنتجات لتحديث أيقونة القلب
}

// التحقق من وجود المنتج في المفضلة
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// تحديث عداد السلة
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// تحديث عداد المفضلة
function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlistCount');
    wishlistCount.textContent = wishlist.length;
}

// فتح/إغلاق سلة التسوق
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
    
    if (cartSidebar.classList.contains('open')) {
        displayCartItems();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// عرض عناصر السلة
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">سلة التسوق فارغة</p>';
        cartTotal.textContent = '0 ريال';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} ريال</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">حذف</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `${total} ريال`;
}

// تحديث الكمية
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            displayCartItems();
            saveCartToStorage();
        }
    }
}

// إزالة من السلة
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
    saveCartToStorage();
    showNotification('تم إزالة المنتج من السلة');
}

// إتمام الشراء
function checkout() {
    if (cart.length === 0) {
        showNotification('السلة فارغة!', 'error');
        return;
    }
    
    // هنا يمكن إضافة منطق إتمام الشراء
    showNotification('شكراً لك! سيتم التواصل معك قريباً');
    cart = [];
    updateCartCount();
    displayCartItems();
    saveCartToStorage();
    toggleCart();
}

// العرض السريع
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="product-details">
            <div class="product-gallery">
                <div class="main-image">
                    <img src="${product.image}" alt="${product.name}" id="mainProductImage">
                </div>
                <div class="thumbnail-images">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                            <img src="${img}" alt="${product.name}">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="product-details-info">
                <h2>${product.name}</h2>
                <div class="product-details-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">(${product.reviews} تقييم)</span>
                </div>
                <div class="product-details-price">
                    <span class="current-price">${product.price} ريال</span>
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ريال</span>` : ''}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    <h4>المميزات:</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-options">
                    ${product.colors ? `
                        <div class="option-group">
                            <label class="option-label">اللون:</label>
                            <div class="color-options">
                                ${product.colors.map(color => `
                                    <div class="color-option" style="background-color: ${color}" onclick="selectOption(this)"></div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${product.sizes ? `
                        <div class="option-group">
                            <label class="option-label">المقاس:</label>
                            <div class="size-options">
                                ${product.sizes.map(size => `
                                    <div class="size-option" onclick="selectOption(this)">${size}</div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
                <div class="quantity-selector">
                    <label class="option-label">الكمية:</label>
                    <div class="quantity-controls">
                        <button onclick="changeModalQuantity(-1)">-</button>
                        <input type="number" value="1" min="1" id="modalQuantity">
                        <button onclick="changeModalQuantity(1)">+</button>
                    </div>
                </div>
                <div class="product-actions-modal">
                    <button class="btn-primary add-to-cart-modal" onclick="addToCartFromModal(${product.id})">
                        <i class="fas fa-shopping-cart"></i> إضافة للسلة
                    </button>
                    <button class="btn-secondary add-to-wishlist" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i> المفضلة
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// إغلاق نافذة المنتج
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// تغيير الصورة الرئيسية
function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('mainProductImage').src = imageSrc;
    
    // إزالة الفئة النشطة من جميع المصغرات
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // إضافة الفئة النشطة للمصغرة المحددة
    thumbnail.classList.add('active');
}

// اختيار خيار
function selectOption(element) {
    const siblings = element.parentNode.children;
    Array.from(siblings).forEach(sibling => {
        sibling.classList.remove('selected');
    });
    element.classList.add('selected');
}

// تغيير الكمية في النافذة المنبثقة
function changeModalQuantity(change) {
    const quantityInput = document.getElementById('modalQuantity');
    let currentValue = parseInt(quantityInput.value);
    currentValue += change;
    if (currentValue < 1) currentValue = 1;
    quantityInput.value = currentValue;
}

// إضافة للسلة من النافذة المنبثقة
function addToCartFromModal(productId) {
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`تم إضافة ${quantity} من ${product.name} للسلة!`);
    closeProductModal();
}

// مشاركة المنتج
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: product.description,
            url: window.location.href
        });
    } else {
        // نسخ الرابط للحافظة
        navigator.clipboard.writeText(window.location.href);
        showNotification('تم نسخ رابط المنتج!');
    }
}

// تهيئة العد التنازلي
function initializeCountdown() {
    const countdownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 أيام من الآن
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<p>انتهى العرض!</p>';
        }
    }, 1000);
}

// تهيئة زر التمرير للأعلى
function initializeScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
}

// التمرير للأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// التمرير لقسم معين
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// عرض الإشعارات
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// حفظ السلة في التخزين المحلي
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// حفظ المفضلة في التخزين المحلي
function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// تحميل السلة من التخزين المحلي
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// إغلاق النوافذ المنبثقة عند النقر خارجها
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    const cartSidebar = document.getElementById('cartSidebar');
    
    if (event.target === modal) {
        closeProductModal();
    }
    
    if (!cartSidebar.contains(event.target) && !event.target.closest('.cart')) {
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }
}

// البحث عند الضغط على Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// تحسين الأداء - تحميل الصور بشكل تدريجي
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// تهيئة تحميل الصور التدريجي
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// إضافة تأثيرات الحركة عند التمرير
function animateOnScroll() {
    const elements = document.querySelectorAll('.category-card, .product-card, .offer-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// تهيئة تأثيرات الحركة
document.addEventListener('DOMContentLoaded', animateOnScroll);