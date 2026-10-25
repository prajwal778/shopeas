/* ============================================================
   ShopEase – Smart Order Management System
   Main JavaScript: Products, Cart, Wishlist, DSA Linked List
   ============================================================ */

'use strict';

// ============================================================
// 1. PRODUCT CATALOG – 36 Products
// ============================================================
const PRODUCTS = [
  // ── AUDIO (6) ──────────────────────────────────────────────
  {
    id: 1, category: 'audio', name: 'Sony WH-CH720N Wireless Headphones',
    price: 8990, originalPrice: 12990, rating: 4.5, ratingCount: 2841,
    badge: 'discount', badgeText: '31% OFF', isNew: false,
    description: 'Industry-leading noise cancellation with up to 35hr battery',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-01'
  },
  {
    id: 2, category: 'audio', name: 'JBL Tune 770NC Headphones',
    price: 5499, originalPrice: 7999, rating: 4.3, ratingCount: 1654,
    badge: 'discount', badgeText: '31% OFF', isNew: false,
    description: 'Adaptive Noise Cancelling with 70hr playback',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-02'
  },
  {
    id: 3, category: 'audio', name: 'boAt Airdopes 141 TWS Earbuds',
    price: 1299, originalPrice: 2990, rating: 4.1, ratingCount: 18520,
    badge: 'hot', badgeText: '🔥 HOT', isNew: false,
    description: 'ENx™ Technology, 42hr total playback, IPX4',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-15'
  },
  {
    id: 4, category: 'audio', name: 'Samsung Galaxy Buds FE',
    price: 6999, originalPrice: 8999, rating: 4.2, ratingCount: 987,
    badge: 'discount', badgeText: '22% OFF', isNew: false,
    description: 'Active Noise Cancellation, 3-mic system, Comfort eartips',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-20'
  },
  {
    id: 5, category: 'audio', name: 'HyperX Cloud III Gaming Headset',
    price: 8499, originalPrice: 10999, rating: 4.6, ratingCount: 3201,
    badge: 'discount', badgeText: '23% OFF', isNew: false,
    description: 'DTS Headphone:X Spatial Audio, 53mm drivers, comfort foam',
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-05'
  },
  {
    id: 6, category: 'audio', name: 'JBL Flip 6 Bluetooth Speaker',
    price: 9999, originalPrice: 13999, rating: 4.7, ratingCount: 4512,
    badge: 'discount', badgeText: '29% OFF', isNew: false,
    description: 'IP67 waterproof, 12hr playtime, PartyBoost enabled',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-10'
  },

  // ── COMPUTING (6) ──────────────────────────────────────────
  {
    id: 7, category: 'computing', name: 'ASUS VivoBook 15 Laptop',
    price: 45990, originalPrice: 54990, rating: 4.3, ratingCount: 2210,
    badge: 'discount', badgeText: '16% OFF', isNew: false,
    description: 'Intel Core i5, 8GB RAM, 512GB SSD, 15.6" FHD',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-01'
  },
  {
    id: 8, category: 'computing', name: 'Lenovo LOQ Gaming Laptop',
    price: 79990, originalPrice: 94990, rating: 4.5, ratingCount: 1320,
    badge: 'discount', badgeText: '16% OFF', isNew: false,
    description: 'Intel Core i7-13620H, RTX 4060, 16GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-05'
  },
  {
    id: 9, category: 'computing', name: 'Apple MacBook Air M2',
    price: 99900, originalPrice: 114900, rating: 4.8, ratingCount: 5640,
    badge: 'hot', badgeText: '🔥 HOT', isNew: false,
    description: 'Apple M2 chip, 8GB RAM, 256GB SSD, 13.6" Liquid Retina',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-08-20'
  },
  {
    id: 10, category: 'computing', name: 'HP Pavilion 15 Laptop',
    price: 62990, originalPrice: 72990, rating: 4.2, ratingCount: 1876,
    badge: 'discount', badgeText: '14% OFF', isNew: false,
    description: 'AMD Ryzen 5 7530U, 8GB RAM, 512GB SSD, OLED display',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-10'
  },
  {
    id: 11, category: 'computing', name: 'Samsung Galaxy Tab S9 FE',
    price: 24999, originalPrice: 34999, rating: 4.4, ratingCount: 987,
    badge: 'discount', badgeText: '29% OFF', isNew: false,
    description: '10.9" Display, 8GB RAM, IP68, S Pen included',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-01'
  },
  {
    id: 12, category: 'computing', name: 'WD 1TB External SSD',
    price: 8499, originalPrice: 11999, rating: 4.6, ratingCount: 3240,
    badge: 'discount', badgeText: '29% OFF', isNew: false,
    description: 'Up to 1,050 MB/s read, USB-C, shock & drop resistant',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-25'
  },

  // ── GAMING (6) ─────────────────────────────────────────────
  {
    id: 13, category: 'gaming', name: 'Cosmic Byte Gaming Controller',
    price: 1799, originalPrice: 2499, rating: 4.1, ratingCount: 4521,
    badge: 'discount', badgeText: '28% OFF', isNew: false,
    description: 'Wired, dual vibration, D-Input/X-Input, PC compatible',
    image: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-01'
  },
  {
    id: 14, category: 'gaming', name: 'Logitech G102 Gaming Mouse',
    price: 1499, originalPrice: 1995, rating: 4.5, ratingCount: 7832,
    badge: 'hot', badgeText: '🔥 HOT', isNew: false,
    description: '8000 DPI LIGHTSYNC RGB, 6 buttons, 85g lightweight',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-08-15'
  },
  {
    id: 15, category: 'gaming', name: 'Redragon K552 Mechanical Keyboard',
    price: 3499, originalPrice: 4999, rating: 4.3, ratingCount: 3120,
    badge: 'discount', badgeText: '30% OFF', isNew: false,
    description: 'Tactile Clicky Blue Switches, TKL, RGB backlighting',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-08'
  },
  {
    id: 16, category: 'gaming', name: 'HyperX FURY S Gaming Mouse Pad',
    price: 999, originalPrice: 1499, rating: 4.6, ratingCount: 5643,
    badge: 'discount', badgeText: '33% OFF', isNew: false,
    description: 'XL size 900×420mm, stitched edges, micro-texture',
    image: 'https://images.unsplash.com/photo-1593640408182-31c228b21eb4?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-12'
  },
  {
    id: 17, category: 'gaming', name: 'Xbox Wireless Controller',
    price: 5490, originalPrice: 5990, rating: 4.7, ratingCount: 2456,
    badge: 'new', badgeText: '✦ NEW', isNew: true,
    description: 'Carbon Black, Bluetooth & USB-C, textured grip',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-20'
  },
  {
    id: 18, category: 'gaming', name: 'Laptop Cooling Pad with RGB',
    price: 1299, originalPrice: 1999, rating: 4.0, ratingCount: 2178,
    badge: 'discount', badgeText: '35% OFF', isNew: false,
    description: '6 fans, adjustable height, RGB lighting, USB hub',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-18'
  },

  // ── MOBILE (6) ─────────────────────────────────────────────
  {
    id: 19, category: 'mobile', name: 'Samsung Galaxy S24 5G',
    price: 74999, originalPrice: 84999, rating: 4.6, ratingCount: 3892,
    badge: 'hot', badgeText: '🔥 HOT', isNew: false,
    description: 'Snapdragon 8 Gen 3, 50MP, 4000mAh, 6.1" Dynamic AMOLED',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-01'
  },
  {
    id: 20, category: 'mobile', name: 'Apple iPhone 16 128GB',
    price: 69900, originalPrice: 79900, rating: 4.7, ratingCount: 6241,
    badge: 'hot', badgeText: '🔥 HOT', isNew: false,
    description: 'A18 chip, 48MP Fusion camera, USB-C, Dynamic Island',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-01'
  },
  {
    id: 21, category: 'mobile', name: 'OnePlus Nord 4 5G',
    price: 29999, originalPrice: 35999, rating: 4.4, ratingCount: 2134,
    badge: 'discount', badgeText: '17% OFF', isNew: false,
    description: 'Snapdragon 7+ Gen 3, 50MP, 5500mAh, 100W SuperVOOC',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-15'
  },
  {
    id: 22, category: 'mobile', name: 'Redmi Note 13 Pro 5G',
    price: 16999, originalPrice: 21999, rating: 4.3, ratingCount: 9821,
    badge: 'discount', badgeText: '23% OFF', isNew: false,
    description: 'Dimensity 7200, 200MP camera, 5100mAh, 67W charging',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-10'
  },
  {
    id: 23, category: 'mobile', name: 'Anker 20W USB-C Fast Charger',
    price: 1499, originalPrice: 1999, rating: 4.5, ratingCount: 12450,
    badge: 'discount', badgeText: '25% OFF', isNew: false,
    description: 'PowerIQ 3.0 PPS, compatible with all USB-C devices',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-20'
  },
  {
    id: 24, category: 'mobile', name: '20,000mAh Slim Power Bank',
    price: 1999, originalPrice: 2999, rating: 4.2, ratingCount: 6782,
    badge: 'discount', badgeText: '33% OFF', isNew: false,
    description: '22.5W fast charging, dual USB-A + USB-C, LED indicator',
    image: 'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-22'
  },

  // ── WEARABLES (6) ──────────────────────────────────────────
  {
    id: 25, category: 'wearables', name: 'Apple Watch SE (2nd Gen)',
    price: 24900, originalPrice: 29900, rating: 4.6, ratingCount: 4120,
    badge: 'discount', badgeText: '17% OFF', isNew: false,
    description: 'S8 chip, crash detection, family setup, 40mm',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-01'
  },
  {
    id: 26, category: 'wearables', name: 'Samsung Galaxy Watch 6',
    price: 19999, originalPrice: 27999, rating: 4.4, ratingCount: 2341,
    badge: 'discount', badgeText: '29% OFF', isNew: false,
    description: 'Sleep coaching, BioActive sensor, 40mm AMOLED',
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-08'
  },
  {
    id: 27, category: 'wearables', name: 'Noise ColorFit Pro 5 Smartwatch',
    price: 2499, originalPrice: 4999, rating: 4.1, ratingCount: 11234,
    badge: 'discount', badgeText: '50% OFF', isNew: false,
    description: 'Bluetooth calling, 1.46" AMOLED, 100+ sports modes',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-15'
  },
  {
    id: 28, category: 'wearables', name: 'Xiaomi Smart Band 8 Pro',
    price: 3499, originalPrice: 4999, rating: 4.3, ratingCount: 4567,
    badge: 'discount', badgeText: '30% OFF', isNew: false,
    description: 'GPS, 1.74" AMOLED, 150+ workout modes, 14 day battery',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-20'
  },
  {
    id: 29, category: 'wearables', name: 'boAt Smart Ring',
    price: 2999, originalPrice: 3999, rating: 3.9, ratingCount: 543,
    badge: 'new', badgeText: '✦ NEW', isNew: true,
    description: 'Sleep & SpO2 tracking, IPX8, 7-day battery, titanium',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-22'
  },
  {
    id: 30, category: 'wearables', name: 'Wireless Charging Stand 3-in-1',
    price: 1799, originalPrice: 2999, rating: 4.2, ratingCount: 1876,
    badge: 'discount', badgeText: '40% OFF', isNew: false,
    description: 'Charges phone + watch + earbuds simultaneously',
    image: 'https://images.unsplash.com/photo-1626379961798-54f819ee896a?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-05'
  },

  // ── DESK SETUP (6) ─────────────────────────────────────────
  {
    id: 31, category: 'desk-setup', name: 'LG 24" Full HD IPS Monitor',
    price: 9999, originalPrice: 13999, rating: 4.5, ratingCount: 3892,
    badge: 'discount', badgeText: '29% OFF', isNew: false,
    description: '75Hz IPS, AMD FreeSync, HDMI+VGA, borderless design',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-01'
  },
  {
    id: 32, category: 'desk-setup', name: 'Samsung 27" QHD Monitor',
    price: 15999, originalPrice: 22999, rating: 4.6, ratingCount: 2341,
    badge: 'discount', badgeText: '30% OFF', isNew: false,
    description: '165Hz, IPS, 1ms response, USB-C 65W PD, HDR10',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-12'
  },
  {
    id: 33, category: 'desk-setup', name: 'Logitech C920 HD Webcam',
    price: 5999, originalPrice: 7999, rating: 4.5, ratingCount: 8901,
    badge: 'discount', badgeText: '25% OFF', isNew: false,
    description: '1080p/30fps, autofocus, dual mic, works with Teams & Zoom',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-18'
  },
  {
    id: 34, category: 'desk-setup', name: 'USB-C 11-in-1 Multiport Hub',
    price: 1499, originalPrice: 2499, rating: 4.3, ratingCount: 4521,
    badge: 'discount', badgeText: '40% OFF', isNew: false,
    description: '4K HDMI, 3× USB-A, SD/MicroSD, Ethernet, 100W PD',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-09-25'
  },
  {
    id: 35, category: 'desk-setup', name: 'Adjustable Aluminum Laptop Stand',
    price: 1299, originalPrice: 1999, rating: 4.4, ratingCount: 3210,
    badge: 'discount', badgeText: '35% OFF', isNew: false,
    description: 'Foldable, 6 height levels, fits 10–17" laptops',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-01'
  },
  {
    id: 36, category: 'desk-setup', name: 'RGB Desk Lamp with USB Charging',
    price: 1499, originalPrice: 2299, rating: 4.2, ratingCount: 1987,
    badge: 'discount', badgeText: '35% OFF', isNew: true,
    description: '10 colour modes, dimmable, USB-A charging port, eye care',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&q=80',
    addedDate: '2026-10-15'
  }
];

// ============================================================
// 2. STATE
// ============================================================
let state = {
  cart: [],          // { id, qty }
  wishlist: [],      // product ids
  currentCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  view: 'grid'
};

// Load from localStorage
function loadState() {
  try {
    const savedCart = localStorage.getItem('shopease_cart');
    const savedWishlist = localStorage.getItem('shopease_wishlist');
    if (savedCart) state.cart = JSON.parse(savedCart);
    if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
  } catch (e) {
    console.warn('Could not load state from localStorage', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('shopease_cart', JSON.stringify(state.cart));
    localStorage.setItem('shopease_wishlist', JSON.stringify(state.wishlist));
  } catch (e) {
    console.warn('Could not save state to localStorage', e);
  }
}

// ============================================================
// 3. UTILITY FUNCTIONS
// ============================================================
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function calcDiscount(original, current) {
  return Math.round(((original - current) / original) * 100);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    '<i class="fa-solid fa-star"></i>'.repeat(full) +
    (half ? '<i class="fa-solid fa-star-half-stroke"></i>' : '') +
    '<i class="fa-regular fa-star"></i>'.repeat(empty)
  );
}

// ============================================================
// 4. PRODUCT CARD RENDERING
// ============================================================
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const noResults = document.getElementById('no-results');
  const resultCount = document.getElementById('result-count');
  if (!grid) return;

  let filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    resultCount.textContent = 'No products found';
    return;
  }

  noResults.style.display = 'none';
  resultCount.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;

  grid.innerHTML = filtered.map((p, idx) => renderProductCard(p, idx)).join('');

  // Apply grid/list view class
  grid.className = `products-grid${state.view === 'list' ? ' list-view' : ''}`;
}

function renderProductCard(p, idx) {
  const isWishlisted = state.wishlist.includes(p.id);
  const inCart = state.cart.find(c => c.id === p.id);
  const discount = p.originalPrice ? calcDiscount(p.originalPrice, p.price) : 0;
  const delay = Math.min(idx * 0.05, 0.5);

  return `
    <article class="product-card" style="animation-delay:${delay}s" data-product-id="${p.id}">
      <div class="product-image-wrapper">
        <img 
          class="product-img" 
          src="${p.image}" 
          alt="${p.name}"
          loading="lazy"
          onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\' viewBox=\\'0 0 400 400\\'><rect fill=\\'%23f1f5f9\\' width=\\'400\\' height=\\'400\\'/><text x=\\'50%25\\' y=\\'50%25\\' font-size=\\'60\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' fill=\\'%2394a3b8\\'>📦</text></svg>'"
        >
        <div class="product-badges">
          ${p.badge === 'discount' ? `<span class="badge badge-discount">${p.badgeText || discount + '% OFF'}</span>` : ''}
          ${p.badge === 'new' ? `<span class="badge badge-new">${p.badgeText || 'NEW'}</span>` : ''}
          ${p.badge === 'hot' ? `<span class="badge badge-hot">${p.badgeText || 'HOT'}</span>` : ''}
        </div>
        <button 
          class="wishlist-btn ${isWishlisted ? 'wishlisted' : ''}" 
          onclick="toggleWishlist(${p.id})" 
          aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
          title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
          id="wishlist-btn-${p.id}"
        >
          <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <span class="product-category-tag">${getCategoryLabel(p.category)}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <div class="stars">${renderStars(p.rating)}</div>
          <span class="rating-count">${p.ratingCount.toLocaleString('en-IN')}</span>
        </div>
        <div class="product-price-row">
          <span class="price-current">${formatPrice(p.price)}</span>
          ${p.originalPrice ? `
            <span class="price-original">${formatPrice(p.originalPrice)}</span>
            <span class="price-savings">${discount}% off</span>
          ` : ''}
        </div>
        <button 
          class="btn-add-cart ${inCart ? 'added' : ''}" 
          onclick="addToCart(${p.id})"
          id="add-cart-btn-${p.id}"
          aria-label="Add ${p.name} to cart"
        >
          <i class="fa-solid fa-${inCart ? 'check' : 'bag-shopping'}"></i>
          ${inCart ? 'In Cart (' + inCart.qty + ')' : 'Add to Cart'}
        </button>
      </div>
    </article>
  `;
}

function getCategoryLabel(cat) {
  const labels = {
    'audio': 'Audio',
    'computing': 'Computing',
    'gaming': 'Gaming',
    'mobile': 'Mobile',
    'wearables': 'Wearables',
    'desk-setup': 'Desk Setup'
  };
  return labels[cat] || cat;
}

// ============================================================
// 5. FILTER & SORT
// ============================================================
function getFilteredProducts() {
  let products = [...PRODUCTS];

  // Category filter
  if (state.currentCategory !== 'all') {
    products = products.filter(p => p.category === state.currentCategory);
  }

  // Search filter
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (state.sortBy) {
    case 'price-asc':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      products.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      break;
    default:
      break; // default order
  }

  return products;
}

function filterByCategory(cat) {
  state.currentCategory = cat;
  // Update active category button
  document.querySelectorAll('.category-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });
  renderProducts();
  scrollToProducts();
}

window.filterByCategory = filterByCategory;

function resetFilters() {
  state.currentCategory = 'all';
  state.searchQuery = '';
  state.sortBy = 'default';
  document.getElementById('nav-search').value = '';
  document.getElementById('sort-select').value = 'default';
  document.querySelectorAll('.category-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  renderProducts();
}
window.resetFilters = resetFilters;

function scrollToProducts() {
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.scrollToProducts = scrollToProducts;

function setView(v) {
  state.view = v;
  document.getElementById('view-grid-btn').classList.toggle('active', v === 'grid');
  document.getElementById('view-list-btn').classList.toggle('active', v === 'list');
  renderProducts();
}
window.setView = setView;

// ============================================================
// 6. CART FUNCTIONS
// ============================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
    showToast(`${product.name.split(' ').slice(0, 3).join(' ')} qty updated (${existing.qty})`, 'info');
  } else {
    state.cart.push({ id: productId, qty: 1 });
    showToast(`<strong>${product.name.split(' ').slice(0, 3).join(' ')}</strong> added to cart!`, 'success');
  }

  saveState();
  updateCartUI();
  animateCartBadge();

  // Update this product's button
  const btn = document.getElementById(`add-cart-btn-${productId}`);
  if (btn) {
    const cartItem = state.cart.find(c => c.id === productId);
    btn.className = 'btn-add-cart added';
    btn.innerHTML = `<i class="fa-solid fa-check"></i> In Cart (${cartItem.qty})`;
  }
}
window.addToCart = addToCart;

function removeFromCart(productId) {
  state.cart = state.cart.filter(c => c.id !== productId);
  saveState();
  updateCartUI();
  renderCart();

  // Update product card button
  const btn = document.getElementById(`add-cart-btn-${productId}`);
  if (btn) {
    btn.className = 'btn-add-cart';
    btn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Add to Cart`;
  }
}
window.removeFromCart = removeFromCart;

function updateQty(productId, delta) {
  const item = state.cart.find(c => c.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveState();
  updateCartUI();
  renderCart();

  // Update product card button
  const btn = document.getElementById(`add-cart-btn-${productId}`);
  if (btn) {
    btn.innerHTML = `<i class="fa-solid fa-check"></i> In Cart (${item.qty})`;
  }
}
window.updateQty = updateQty;

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveState();
  updateCartUI();
  renderCart();
  showToast('Cart cleared', 'info');
  renderProducts(); // reset button states
}
window.clearCart = clearCart;

function getCartCount() {
  return state.cart.reduce((sum, c) => sum + c.qty, 0);
}

function getCartSubtotal() {
  return state.cart.reduce((sum, c) => {
    const p = PRODUCTS.find(pr => pr.id === c.id);
    return sum + (p ? p.price * c.qty : 0);
  }, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const subtotal = getCartSubtotal();
  const badge = document.getElementById('cart-badge');
  const drawerCount = document.getElementById('cart-drawer-count');
  const subtotalEl = document.getElementById('cart-subtotal');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (drawerCount) drawerCount.textContent = count;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (checkoutBtn) checkoutBtn.disabled = count === 0;
}

function animateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  badge.style.animation = 'none';
  void badge.offsetWidth; // reflow
  badge.style.animation = 'pulse-badge 0.4s ease';
}

function renderCart() {
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body) return;

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon"><i class="fa-solid fa-bag-shopping"></i></div>
        <h3>Your cart is empty</h3>
        <p>Add some awesome products to get started!</p>
        <button class="btn-primary" onclick="closeCart(); scrollToProducts()">
          <i class="fa-solid fa-bag-shopping"></i> Start Shopping
        </button>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  body.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item" id="cart-item-${p.id}">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}"
          onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'72\\' height=\\'72\\' viewBox=\\'0 0 72 72\\'><rect fill=\\'%23f1f5f9\\' width=\\'72\\' height=\\'72\\'/><text x=\\'50%25\\' y=\\'55%25\\' font-size=\\'28\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' fill=\\'%2394a3b8\\'>📦</text></svg>'"
        >
        <div class="cart-item-details">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-cat">${getCategoryLabel(p.category)}</div>
          <div class="cart-item-price-row">
            <span class="cart-item-price">${formatPrice(p.price * item.qty)}</span>
            <div class="cart-qty-controls">
              <button class="qty-btn" onclick="updateQty(${p.id}, -1)" aria-label="Decrease quantity">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${p.id}, 1)" aria-label="Increase quantity">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})" aria-label="Remove item">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
  }).join('');
}

// ============================================================
// 7. CART DRAWER OPEN / CLOSE
// ============================================================
function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCart();
}
window.openCart = openCart;

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
window.closeCart = closeCart;

// ============================================================
// 8. WISHLIST
// ============================================================
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const idx = state.wishlist.indexOf(productId);
  if (idx === -1) {
    state.wishlist.push(productId);
    showToast(`Added to Wishlist ❤️`, 'success');
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`Removed from Wishlist`, 'info');
  }

  saveState();
  updateWishlistUI();

  // Update wishlist button on card
  const btn = document.getElementById(`wishlist-btn-${productId}`);
  if (btn) {
    const isWished = state.wishlist.includes(productId);
    btn.classList.toggle('wishlisted', isWished);
    btn.innerHTML = `<i class="fa-${isWished ? 'solid' : 'regular'} fa-heart"></i>`;
    btn.setAttribute('aria-label', isWished ? 'Remove from wishlist' : 'Add to wishlist');
  }
}
window.toggleWishlist = toggleWishlist;

function updateWishlistUI() {
  const count = state.wishlist.length;
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// ============================================================
// 9. TOAST NOTIFICATIONS
// ============================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = {
    success: 'fa-circle-check',
    error: 'fa-circle-xmark',
    info: 'fa-circle-info',
    warning: 'fa-triangle-exclamation'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="toast-icon fa-solid ${icons[type] || icons.info}"></i>
    <span class="toast-message">${message}</span>
    <div class="toast-progress"></div>
  `;
  toast.style.setProperty('--toast-color', `var(--${type === 'success' ? 'success' : type === 'error' ? 'danger' : type})`);
  const progressEl = toast.querySelector('.toast-progress');
  if (progressEl) progressEl.style.background = `var(--${type === 'success' ? 'success' : type === 'error' ? 'danger' : type === 'warning' ? 'warning' : 'info'})`;

  container.appendChild(toast);

  // Remove after 3s
  const timer = setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);

  // Click to dismiss early
  toast.addEventListener('click', () => {
    clearTimeout(timer);
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  });
}
window.showToast = showToast;

// ============================================================
// 10. SEARCH
// ============================================================
function initSearch() {
  const input = document.getElementById('nav-search');
  const clearBtn = document.getElementById('search-clear-btn');
  if (!input) return;

  input.addEventListener('input', () => {
    state.searchQuery = input.value;
    clearBtn.style.display = input.value ? 'block' : 'none';
    // Auto-switch to all category when searching
    if (input.value) {
      state.currentCategory = 'all';
      document.querySelectorAll('.category-card').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
      });
    }
    renderProducts();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    state.searchQuery = '';
    clearBtn.style.display = 'none';
    renderProducts();
  });
}

// ============================================================
// 11. NAVBAR SCROLL
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Category buttons
  document.querySelectorAll('.category-card').forEach(btn => {
    btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
  });

  // Sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.sortBy = sortSelect.value;
      renderProducts();
    });
  }
}

// ============================================================
// 12. HERO COUNTER ANIMATION
// ============================================================
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target || 0);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      counter.textContent = Math.floor(current).toLocaleString('en-IN');
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// ============================================================
// 13. SCROLL REVEAL (IntersectionObserver)
// ============================================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counters when hero stats come into view
        if (entry.target.classList.contains('hero-stats')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Hero stats special case
  const stats = document.querySelector('.hero-stats');
  if (stats) observer.observe(stats);
}

// ============================================================
// 14. NEWSLETTER
// ============================================================
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  showToast(`🎉 Subscribed! You'll get the best deals.`, 'success');
  input.value = '';
}
window.handleNewsletter = handleNewsletter;

// ============================================================
// 15. CHECKOUT (demo)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      showToast('🛒 Proceeding to checkout… (demo mode)', 'info');
    });
  }
});

// ============================================================
// ============================================================
// DSA SECTION – LINKED LIST
// ============================================================
// ============================================================

// Node class for the linked list
class OrderNode {
  constructor(orderId, productName, price) {
    this.orderId = orderId;
    this.productName = productName;
    this.price = price;
    this.next = null;
  }
}

// DSA State
const dsaState = {
  head: null,
  orderCounter: 1,
  demoProductNames: [
    'Sony Headphones', 'iPhone 16', 'MacBook Air', 'Xbox Controller',
    'JBL Speaker', 'Logitech Mouse', 'Samsung Galaxy', 'Apple Watch SE',
    'WD SSD', 'RGB Keyboard', 'LG Monitor', 'USB-C Hub'
  ],
  demoIdx: 0
};

// Get linked list length
function getListLength() {
  let count = 0;
  let curr = dsaState.head;
  while (curr) { count++; curr = curr.next; }
  return count;
}

// Get all nodes as array
function getNodesArray() {
  const nodes = [];
  let curr = dsaState.head;
  while (curr) { nodes.push(curr); curr = curr.next; }
  return nodes;
}

// Insert at tail
function insertNode(productName, price) {
  const newNode = new OrderNode(`#ORD-${String(dsaState.orderCounter).padStart(3, '0')}`, productName, price);
  dsaState.orderCounter++;

  if (!dsaState.head) {
    dsaState.head = newNode;
  } else {
    let curr = dsaState.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }
}

// Add order from input
function addOrder() {
  const nameInput = document.getElementById('order-name');
  const priceInput = document.getElementById('order-price');

  const name = nameInput.value.trim() || 'Sample Product';
  const price = parseInt(priceInput.value) || Math.floor(Math.random() * 9000 + 999);

  if (name.length < 2) {
    showDsaError('Product name must be at least 2 characters.');
    return;
  }

  insertNode(name, price);
  nameInput.value = '';
  priceInput.value = '';
  clearDsaError();
  updateDsaUI();
  showToast(`Order for "${name}" added to pending list`, 'success');
}
window.addOrder = addOrder;

// Add demo order
function addDemoOrder() {
  const names = dsaState.demoProductNames;
  const name = names[dsaState.demoIdx % names.length];
  dsaState.demoIdx++;
  const price = Math.floor(Math.random() * 9000 + 999);
  insertNode(name, price);
  clearDsaError();
  updateDsaUI();
  showToast(`Demo order "${name}" added!`, 'info');
}
window.addDemoOrder = addDemoOrder;

// Reset linked list
function resetLinkedList() {
  dsaState.head = null;
  dsaState.orderCounter = 1;
  dsaState.demoIdx = 0;
  clearDsaError();
  document.getElementById('deleted-order-info').style.display = 'none';
  // Clear step highlights
  document.querySelectorAll('.algo-step').forEach(s => s.classList.remove('active'));
  updateDsaUI();
  showToast('Linked list reset!', 'info');
}
window.resetLinkedList = resetLinkedList;

// ── TWO-POINTER DELETE Nth FROM END ────────────────────────────
async function deleteNthFromEnd() {
  const nInput = document.getElementById('delete-n');
  const n = parseInt(nInput.value);
  const len = getListLength();

  // Validate
  if (isNaN(n) || n < 1) {
    showDsaError('Please enter a valid positive integer for n.');
    return;
  }
  if (len === 0) {
    showDsaError('The linked list is empty. Add some orders first.');
    return;
  }
  if (n > len) {
    showDsaError(`n = ${n} exceeds list length = ${len}. Please enter n ≤ ${len}.`);
    return;
  }

  clearDsaError();

  // ── ALGORITHM: Two pointers with dummy node ──────────────────
  // Step 1: Create dummy node
  await highlightStep(1);
  const dummy = new OrderNode('dummy', 'dummy', 0);
  dummy.next = dsaState.head;

  // Step 2: Init fast & slow to dummy
  await highlightStep(2);
  let fast = dummy;
  let slow = dummy;

  // Track indices for visualization
  let fastIdx = -1; // -1 = dummy
  let slowIdx = -1;

  renderLinkedListWithPointers(fastIdx, slowIdx, -1);

  // Step 3: Advance fast by n+1 steps
  await highlightStep(3);
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
    fastIdx++;
  }
  renderLinkedListWithPointers(fastIdx, slowIdx, -1);
  await delay(600);

  // Step 4: Move both until fast == null
  await highlightStep(4);
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
    fastIdx++;
    slowIdx++;
    renderLinkedListWithPointers(fastIdx, slowIdx, -1);
    await delay(500);
  }

  // Step 5: Delete slow.next
  await highlightStep(5);
  const deletedNode = slow.next;
  const deleteIdx = slowIdx + 1;

  // Highlight the node to delete
  renderLinkedListWithPointers(fastIdx, slowIdx, deleteIdx);
  await delay(800);

  // Actually delete
  slow.next = slow.next.next;
  dsaState.head = dummy.next;

  // Show deleted info
  document.getElementById('deleted-order-info').style.display = 'flex';
  document.getElementById('deleted-order-name').textContent =
    `${deletedNode.orderId} – ${deletedNode.productName} (${formatPrice(deletedNode.price)})`;

  // Re-render clean list
  await delay(800);
  updateDsaUI();
  document.querySelectorAll('.algo-step').forEach(s => s.classList.remove('active'));
  showToast(`🗑️ Order ${deletedNode.orderId} (${deletedNode.productName}) deleted from position ${n} from end`, 'success');
  nInput.value = '';
}
window.deleteNthFromEnd = deleteNthFromEnd;

// Async helpers
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function highlightStep(stepNum) {
  document.querySelectorAll('.algo-step').forEach(s => s.classList.remove('active'));
  const stepEl = document.getElementById(`step-${stepNum}`);
  if (stepEl) {
    stepEl.classList.add('active');
    stepEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  await delay(300);
}

// ── RENDER LINKED LIST ─────────────────────────────────────────
function updateDsaUI() {
  renderLinkedListWithPointers(-99, -99, -1);
  document.getElementById('list-length').textContent = getListLength();
}

function renderLinkedListWithPointers(fastIdx, slowIdx, deleteIdx) {
  const container = document.getElementById('ll-container');
  if (!container) return;

  const nodes = getNodesArray();

  if (nodes.length === 0) {
    container.innerHTML = `
      <div class="empty-ll">
        <i class="fa-solid fa-link-slash"></i>
        <p>No orders yet. Add some demo orders to get started!</p>
      </div>
    `;
    return;
  }

  let html = '<div class="ll-display">';

  nodes.forEach((node, idx) => {
    const isFast   = idx === fastIdx;
    const isSlow   = idx === slowIdx;
    const isDelete = idx === deleteIdx;

    let boxClass = 'node-box';
    if (isDelete) boxClass += ' delete-highlight';
    else if (isFast && isSlow) boxClass += ' fast-highlight slow-highlight';
    else if (isFast) boxClass += ' fast-highlight';
    else if (isSlow) boxClass += ' slow-highlight';

    let arrowClass = 'node-arrow';
    if (isFast) arrowClass += ' fast-arrow';
    else if (isSlow) arrowClass += ' slow-arrow';

    // Pointer labels above node
    let labels = '';
    if (isFast && isSlow) labels = `<span class="pointer-label fast">fast</span><span class="pointer-label slow">slow</span>`;
    else if (isFast) labels = `<span class="pointer-label fast">fast</span>`;
    else if (isSlow) labels = `<span class="pointer-label slow">slow</span>`;

    html += `
      <div class="ll-node-wrapper">
        <div class="ll-node-pointer-labels">${labels}</div>
        <div class="ll-node">
          <div class="${boxClass}" id="node-${idx}">
            <div class="node-order-id">${node.orderId}</div>
            <div class="node-name">${truncate(node.productName, 12)}</div>
            <div class="node-price">${formatPrice(node.price)}</div>
          </div>
          ${idx < nodes.length - 1 ? `<div class="${arrowClass}"><i class="fa-solid fa-arrow-right"></i></div>` : ''}
        </div>
      </div>
    `;
  });

  // NULL terminator
  html += `
    <div class="null-node">
      <div class="node-arrow"><i class="fa-solid fa-arrow-right"></i></div>
      <div class="null-box">NULL</div>
    </div>
  `;

  html += '</div>';
  container.innerHTML = html;
}

function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '…' : str;
}

// DSA Error helpers
function showDsaError(msg) {
  const el = document.getElementById('dsa-error');
  if (el) el.textContent = msg;
}
function clearDsaError() {
  const el = document.getElementById('dsa-error');
  if (el) el.textContent = '';
}

// ============================================================
// 16. INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  updateDsaUI();
  initNavbar();
  initSearch();
  initReveal();

  // Trigger counter animation on page load after short delay
  setTimeout(animateCounters, 800);

  // Enter key in DSA inputs
  document.getElementById('order-name')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('order-price')?.focus();
  });
  document.getElementById('order-price')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') addOrder();
  });
  document.getElementById('delete-n')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') deleteNthFromEnd();
  });

  // Close cart on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
  });

  console.log('%cShopEase 🛍️', 'color:#2563eb;font-size:20px;font-weight:800;');
  console.log('%cSmart Order Management System | DSA Assignment', 'color:#7c3aed;font-size:13px;');
  console.log('%c36 products | Linked list with two-pointer delete | LocalStorage persistence', 'color:#475569;font-size:11px;');
});
