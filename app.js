/* ====================== DATA ====================== */
const products = [
  // Combo
  { id: 1, cat: 'combo', name: 'Olov Combo', desc: 'Burger + kartoshka + ichimlik', price: 65000, weight: 650, rating: 4.9, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80' },
  { id: 2, cat: 'combo', name: 'Family Combo', desc: '2 burger + 2 kartoshka + 2 ichimlik', price: 119000, weight: 1200, rating: 4.8, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80' },
  { id: 3, cat: 'combo', name: 'Kids Combo', desc: 'Mini burger + sok + o\'yinchoq', price: 45000, weight: 380, rating: 4.7, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
  { id: 4, cat: 'combo', name: 'Double Fire Combo', desc: 'Double burger + large fries + cola', price: 89000, weight: 850, rating: 4.9, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80' },

  // Lavash
  { id: 5, cat: 'lavash', name: 'Classic Lavash', desc: 'Mol go\'shti, sabzavotlar, maxsus sous', price: 32000, weight: 320, rating: 4.8, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80' },
  { id: 6, cat: 'lavash', name: 'Chicken Lavash', desc: 'Tovuq go\'shti, yangi salat', price: 29000, weight: 300, rating: 4.7, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80' },
  { id: 7, cat: 'lavash', name: 'Spicy Lavash', desc: 'Achchiq sous bilan', price: 34000, weight: 330, rating: 4.9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxUcnZJqSNY2dinpWE-askWJfT8xNd55ebGsC-g1exQ&s' },
  { id: 8, cat: 'lavash', name: 'Cheese Lavash', desc: 'Pishloq va go\'sht', price: 36000, weight: 340, rating: 4.8, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80' },

  // Burger
  { id: 9, cat: 'burger', name: 'Olov Burger', desc: '200g mol go\'shti, cheddar, sous', price: 48000, weight: 280, rating: 4.9, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
  { id: 10, cat: 'burger', name: 'Double Cheese', desc: 'Ikki qavatli pishloqli', price: 58000, weight: 340, rating: 4.8, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80' },
  { id: 11, cat: 'burger', name: 'Chicken Burger', desc: 'Tovuq kotleti, salat', price: 42000, weight: 260, rating: 4.7, img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80' },
  { id: 12, cat: 'burger', name: 'BBQ Burger', desc: 'BBQ sous, piyoz, bekon', price: 52000, weight: 300, rating: 4.9, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80' },

  // Hot-dog
  { id: 13, cat: 'hotdog', name: 'Classic Hot-dog', desc: 'Sosis, ketchup, xantal', price: 22000, weight: 180, rating: 4.6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDroMdklnX4DxkQKKi_vbzKpabtDhz9XCR4heReEwJw&s=10' },
  { id: 14, cat: 'hotdog', name: 'Cheese Hot-dog', desc: 'Pishloqli sosis', price: 26000, weight: 200, rating: 4.7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd7Ghg8EzHrK0RPZdHLSCCYKQeosVJHd32Useh7SXA4j6HVOwebE4Ma8&s=10' },
  { id: 15, cat: 'hotdog', name: 'Spicy Dog', desc: 'Achchiq sous bilan', price: 25000, weight: 190, rating: 4.8, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80' },
  { id: 16, cat: 'hotdog', name: 'Jumbo Dog', desc: 'Katta sosis, qo\'shimchalar', price: 32000, weight: 250, rating: 4.7, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80' },

  // Donar
  { id: 17, cat: 'donar', name: 'Mol Donar', desc: 'Mol go\'shti, non, sabzavot', price: 38000, weight: 350, rating: 4.8, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80' },
  { id: 18, cat: 'donar', name: 'Tovuq Donar', desc: 'Tovuq go\'shti', price: 35000, weight: 330, rating: 4.7, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80' },
  { id: 19, cat: 'donar', name: 'Mix Donar', desc: 'Aralash go\'sht', price: 40000, weight: 360, rating: 4.9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPfKXo_eGgwHe7s1G5yIni8pWQAdo2oBwct36bN30JQ&s=10' },
  { id: 20, cat: 'donar', name: 'Plate Donar', desc: 'Tarelkada, garnir bilan', price: 55000, weight: 500, rating: 4.8, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80' },

  // Sendvich
  { id: 21, cat: 'sendvich', name: 'Club Sandwich', desc: 'Tovuq, bekon, tuxum', price: 36000, weight: 280, rating: 4.7, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
  { id: 22, cat: 'sendvich', name: 'Cheese Sandwich', desc: 'Uch xil pishloq', price: 28000, weight: 220, rating: 4.6, img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400&q=80' },
  { id: 23, cat: 'sendvich', name: 'Veggie Sandwich', desc: 'Sabzavotli', price: 24000, weight: 200, rating: 4.5, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' },
  { id: 24, cat: 'sendvich', name: 'Tuna Sandwich', desc: 'Tuna baliq', price: 34000, weight: 250, rating: 4.6, img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80' },

  // Souslar
  { id: 25, cat: 'sous', name: 'Ketchup', desc: 'Klassik tomat sous', price: 5000, weight: 50, rating: 4.5, img: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80' },
  { id: 26, cat: 'sous', name: 'Mayonez', desc: 'Kremli mayonez', price: 5000, weight: 50, rating: 4.5, img: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80' },
  { id: 27, cat: 'sous', name: 'BBQ Sous', desc: 'Shirin-achchiq', price: 6000, weight: 50, rating: 4.7, img: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80' },
  { id: 28, cat: 'sous', name: 'Achchiq Sous', desc: 'O\'tkir ta\'m', price: 6000, weight: 50, rating: 4.8, img: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80' },

  // Kruassan
  { id: 29, cat: 'kruassan', name: 'Classic Croissant', desc: 'Yog\'li, yumshoq', price: 18000, weight: 80, rating: 4.7, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80' },
  { id: 30, cat: 'kruassan', name: 'Chocolate Croissant', desc: 'Shokoladli', price: 22000, weight: 90, rating: 4.8, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
  { id: 31, cat: 'kruassan', name: 'Cheese Croissant', desc: 'Pishloqli', price: 20000, weight: 85, rating: 4.6, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80' },
  { id: 32, cat: 'kruassan', name: 'Almond Croissant', desc: 'Bodomli', price: 25000, weight: 95, rating: 4.9, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },

  // Kofe
  { id: 33, cat: 'kofe', name: 'Espresso', desc: 'Klassik qora kofe', price: 15000, weight: 30, rating: 4.8, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80' },
  { id: 34, cat: 'kofe', name: 'Cappuccino', desc: 'Sut ko\'pigi bilan', price: 22000, weight: 200, rating: 4.9, img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80' },
  { id: 35, cat: 'kofe', name: 'Latte', desc: 'Yumshoq sutli kofe', price: 24000, weight: 250, rating: 4.8, img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=80' },
  { id: 36, cat: 'kofe', name: 'Americano', desc: 'Suv bilan suyultirilgan', price: 18000, weight: 200, rating: 4.7, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80' },

  // Ichimliklar
  { id: 37, cat: 'ichimlik', name: 'Coca-Cola 0.5', desc: 'Sovuq gazli ichimlik', price: 12000, weight: 500, rating: 4.6, img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80' },
  { id: 38, cat: 'ichimlik', name: 'Fanta 0.5', desc: 'Apelsin ta\'mli', price: 12000, weight: 500, rating: 4.5, img: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&q=80' },
  { id: 39, cat: 'ichimlik', name: 'Fresh Apelsin', desc: 'Yangi siqilgan', price: 25000, weight: 400, rating: 4.9, img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80' },
  { id: 40, cat: 'ichimlik', name: 'Mineral suv', desc: 'Gazsiz 0.5l', price: 6000, weight: 500, rating: 4.4, img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80' }
];

const categories = [
  { id: 'all', name: 'Barchasi' },
  { id: 'combo', name: 'Kombo' },
  { id: 'lavash', name: 'Lavash' },
  { id: 'burger', name: 'Burger' },
  { id: 'hotdog', name: 'Hot-dog' },
  { id: 'donar', name: 'Donar' },
  { id: 'sendvich', name: 'Sendvich' },
  { id: 'sous', name: 'Souslar' },
  { id: 'kruassan', name: 'Kruassan' },
  { id: 'kofe', name: 'Kofe' },
  { id: 'ichimlik', name: 'Ichimliklar' }
];

const branches = [
  { id: 1, name: 'Chilonzor filiali', address: 'Chilonzor tumani, Bunyodkor ko\'chasi 12', hours: '09:00 – 02:00', phone: '+998 71 200 70 71', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80' },
  { id: 2, name: 'Yunusobod filiali', address: 'Yunusobod tumani, Amir Temur 45', hours: '09:00 – 02:00', phone: '+998 71 200 70 72', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80' },
  { id: 3, name: 'Sergeli filiali', address: 'Sergeli tumani, Yangi Sergeli 8', hours: '10:00 – 01:00', phone: '+998 71 200 70 73', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80' }
];

const promos = [
  { title: 'Kombo chegirma', discount: '25%', desc: 'Har qanday kombo 25% arzon', old: '89 000', new: '66 750' },
  { title: 'Ikkinchi burger', discount: '50%', desc: 'Ikkinchi burger yarmiga', old: '48 000', new: '24 000' },
  { title: 'Oilaviy paket', discount: '30%', desc: 'Family Combo maxsus narx', old: '119 000', new: '83 300' }
];

let reviews = [
  { name: 'Azizbek T.', text: 'Eng yaxshi burger Toshkentda! Yetkazib berish tez, ta\'mi a\'lo.', rating: 5, date: '12.11.2025', avatar: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Madina K.', text: 'Lavash juda mazali, souslari ajoyib. Tavsiya qilaman!', rating: 5, date: '10.11.2025', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Jasur R.', text: 'Dark mode va til almashtirish juda qulay. Sayt professional.', rating: 5, date: '08.11.2025', avatar: 'https://i.pravatar.cc/100?img=33' },
  { name: 'Dilnoza A.', text: 'Bolalar uchun Kids Combo zo\'r. Har doim shu yerdan olamiz.', rating: 4, date: '05.11.2025', avatar: 'https://i.pravatar.cc/100?img=9' }
];

/* ====================== STATE ====================== */
let cart = JSON.parse(localStorage.getItem('olov_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('olov_fav')) || [];
let currentLang = localStorage.getItem('olov_lang') || 'uz';
let currentTheme = localStorage.getItem('olov_theme') || 'light';
let currentCat = 'all';
let selectedRating = 0;

/* ====================== I18N ====================== */
const i18n = {
  uz: {
    nav_menu: 'Menyu', nav_promos: 'Aksiyalar', nav_branches: 'Filiallar', nav_reviews: 'Fikrlar', nav_about: 'Biz haqimizda',
    search_placeholder: 'Mahsulot qidirish...', login: 'Kirish', register: 'Ro\'yxatdan o\'tish',
    hero_badge: 'Yangi ta\'m • Premium sifat', hero_title: 'Olovli ta\'mlar<br>har bir bo\'lakda',
    hero_desc: 'Eng yangi ingredientlar, issiq yetkazib berish va unutilmas ta\'m. Bugun buyurtma bering!',
    order_now: 'Buyurtma berish', view_menu: 'Menyuni ko\'rish',
    menu_title: 'Bizning menyu', menu_subtitle: 'Har bir ta\'m alohida e\'tibor bilan tayyorlanadi',
    promos_title: 'Aksiyalar va takliflar', promos_subtitle: 'Bugungi eng yaxshi chegirmalar',
    branches_title: 'Bizning filiallar', branches_subtitle: 'Sizga yaqin bo\'lgan filialni tanlang',
    reviews_title: 'Xaridorlarimiz fikri', reviews_subtitle: 'Minglab mijozlar ishonchi',
    add_review: 'Fikringizni qoldiring', your_name: 'Ismingiz', your_review: 'Fikringiz...', send_review: 'Yuborish',
    about_title: 'Biz haqimizda',
    about_text1: 'OlovKing — 2018-yildan beri Toshkentda ishlayotgan premium fast food brendi. Biz faqat eng yaxshi ingredientlardan foydalanamiz va har bir buyurtmani sevgi bilan tayyorlaymiz.',
    about_text2: 'Maqsadimiz — har bir mijozga unutilmas ta\'m va tezkor xizmatni taqdim etish. 15+ filial, 50 000+ baxtli mijoz.',
    stat_branches: 'Filial', stat_customers: 'Mijoz', stat_rating: 'Reyting',
    footer_desc: 'Premium fast food. Issiq, tez va mazali.', footer_links: 'Havolalar', footer_contact: 'Aloqa',
    footer_delivery: 'Yetkazib berish', footer_delivery_text: 'Toshkent shahri bo\'ylab 30-45 daqiqada bepul yetkazib beramiz (30 000 so\'mdan yuqori buyurtmalarda).',
    cart_title: 'Savatcha', total: 'Jami:', checkout: 'Buyurtma berish', clear_cart: 'Savatchani tozalash',
    favorites_title: 'Sevimli mahsulotlar', delivery_method: 'Yetkazib berish usuli',
    home_delivery: 'Uyga yetkazib berish', pickup: 'Do\'kondan olib ketish', select_branch: 'Filialni tanlang',
    payment_method: 'To\'lov usuli', cash: 'Naqd pul', card: 'Bank kartasi',
    order_summary: 'Buyurtma xulosasi', confirm_order: 'Buyurtmani tasdiqlash'
  },
  ru: {
    nav_menu: 'Меню', nav_promos: 'Акции', nav_branches: 'Филиалы', nav_reviews: 'Отзывы', nav_about: 'О нас',
    search_placeholder: 'Поиск продуктов...', login: 'Войти', register: 'Регистрация',
    hero_badge: 'Новый вкус • Премиум качество', hero_title: 'Огненные вкусы<br>в каждом кусочке',
    hero_desc: 'Самые свежие ингредиенты, горячая доставка и незабываемый вкус. Закажите сегодня!',
    order_now: 'Заказать', view_menu: 'Смотреть меню',
    menu_title: 'Наше меню', menu_subtitle: 'Каждый вкус готовится с особым вниманием',
    promos_title: 'Акции и предложения', promos_subtitle: 'Лучшие скидки сегодня',
    branches_title: 'Наши филиалы', branches_subtitle: 'Выберите ближайший филиал',
    reviews_title: 'Отзывы клиентов', reviews_subtitle: 'Доверие тысяч клиентов',
    add_review: 'Оставьте отзыв', your_name: 'Ваше имя', your_review: 'Ваш отзыв...', send_review: 'Отправить',
    about_title: 'О нас',
    about_text1: 'OlovKing — премиальный fast food бренд в Ташкенте с 2018 года. Мы используем только лучшие ингредиенты.',
    about_text2: 'Наша цель — незабываемый вкус и быстрый сервис. 15+ филиалов, 50 000+ довольных клиентов.',
    stat_branches: 'Филиал', stat_customers: 'Клиент', stat_rating: 'Рейтинг',
    footer_desc: 'Премиум fast food. Горячо, быстро и вкусно.', footer_links: 'Ссылки', footer_contact: 'Контакты',
    footer_delivery: 'Доставка', footer_delivery_text: 'Бесплатная доставка по Ташкенту за 30-45 минут (от 30 000 сум).',
    cart_title: 'Корзина', total: 'Итого:', checkout: 'Оформить заказ', clear_cart: 'Очистить корзину',
    favorites_title: 'Избранное', delivery_method: 'Способ доставки',
    home_delivery: 'Доставка на дом', pickup: 'Самовывоз', select_branch: 'Выберите филиал',
    payment_method: 'Способ оплаты', cash: 'Наличные', card: 'Банковская карта',
    order_summary: 'Итог заказа', confirm_order: 'Подтвердить заказ'
  },
  en: {
    nav_menu: 'Menu', nav_promos: 'Promos', nav_branches: 'Branches', nav_reviews: 'Reviews', nav_about: 'About',
    search_placeholder: 'Search products...', login: 'Login', register: 'Sign up',
    hero_badge: 'New taste • Premium quality', hero_title: 'Fiery flavors<br>in every bite',
    hero_desc: 'Freshest ingredients, hot delivery and unforgettable taste. Order today!',
    order_now: 'Order now', view_menu: 'View menu',
    menu_title: 'Our Menu', menu_subtitle: 'Every taste is prepared with special care',
    promos_title: 'Promotions', promos_subtitle: 'Best deals today',
    branches_title: 'Our Branches', branches_subtitle: 'Choose the nearest branch',
    reviews_title: 'Customer Reviews', reviews_subtitle: 'Trusted by thousands',
    add_review: 'Leave a review', your_name: 'Your name', your_review: 'Your review...', send_review: 'Submit',
    about_title: 'About Us',
    about_text1: 'OlovKing is a premium fast food brand in Tashkent since 2018. We use only the best ingredients.',
    about_text2: 'Our goal is unforgettable taste and fast service. 15+ branches, 50,000+ happy customers.',
    stat_branches: 'Branches', stat_customers: 'Customers', stat_rating: 'Rating',
    footer_desc: 'Premium fast food. Hot, fast and delicious.', footer_links: 'Links', footer_contact: 'Contact',
    footer_delivery: 'Delivery', footer_delivery_text: 'Free delivery across Tashkent in 30-45 min (orders over 30,000 sum).',
    cart_title: 'Cart', total: 'Total:', checkout: 'Checkout', clear_cart: 'Clear cart',
    favorites_title: 'Favorites', delivery_method: 'Delivery method',
    home_delivery: 'Home delivery', pickup: 'Pickup', select_branch: 'Select branch',
    payment_method: 'Payment method', cash: 'Cash', card: 'Bank card',
    order_summary: 'Order summary', confirm_order: 'Confirm order'
  }
};

/* ====================== INIT ====================== */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  applyLanguage();
  renderCategories();
  renderProducts();
  renderPromos();
  renderBranches();
  renderReviews();
  updateCartUI();
  updateFavUI();
  bindEvents();
});

/* ====================== RENDER ====================== */
function renderCategories() {
  const tabs = document.getElementById('categoryTabs');
  tabs.innerHTML = categories.map(c => `
    <button class="cat-btn ${c.id === currentCat ? 'active' : ''}" data-cat="${c.id}">${c.name}</button>
  `).join('');
}

function renderProducts(filter = currentCat, search = '') {
  let list = products;
  if (filter !== 'all') list = list.filter(p => p.cat === filter);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }

  const grid = document.getElementById('productsGrid');
  if (list.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--gray-500)">Mahsulot topilmadi</p>';
    return;
  }

  grid.innerHTML = list.map(p => {
    const isFav = favorites.includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <button class="like-btn ${isFav ? 'liked' : ''}" data-id="${p.id}">
            <i class="fas fa-heart"></i>
          </button>
        </div>
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-meta">
            <div>
              <div class="product-price">${formatPrice(p.price)}</div>
              <div class="product-weight">${p.weight} g</div>
            </div>
            <div class="product-rating">★ ${p.rating}</div>
          </div>
          <button class="add-cart-btn" data-id="${p.id}">
            <i class="fas fa-shopping-bag"></i> Savatchaga
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderPromos() {
  document.getElementById('promosGrid').innerHTML = promos.map(p => `
    <div class="promo-card">
      <div class="promo-discount">${p.discount}</div>
      <div class="promo-title">${p.title}</div>
      <p>${p.desc}</p>
      <div style="margin-top:16px">
        <span class="promo-old">${p.old} so'm</span>
        <strong>${p.new} so'm</strong>
      </div>
    </div>
  `).join('');
}

function renderBranches() {
  document.getElementById('branchesGrid').innerHTML = branches.map(b => `
    <div class="branch-card">
      <div class="branch-img"><img src="${b.img}" alt="${b.name}"></div>
      <div class="branch-body">
        <div class="branch-name">${b.name}</div>
        <div class="branch-info">
          <span><i class="fas fa-map-marker-alt"></i> ${b.address}</span>
          <span><i class="fas fa-clock"></i> ${b.hours}</span>
          <span><i class="fas fa-phone"></i> ${b.phone}</span>
        </div>
        <a href="https://maps.google.com" target="_blank" class="btn btn-outline btn-sm">Xaritada ko'rish</a>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <img class="review-avatar" src="${r.avatar}" alt="${r.name}">
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p>${r.text}</p>
    </div>
  `).join('');
}

/* ====================== CART ====================== */
function addToCart(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;
  const exist = cart.find(c => c.id === id);
  if (exist) exist.qty++;
  else cart.push({ ...item, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`${item.name} savatchaga qo'shildi`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Savatcha tozalandi');
}

function saveCart() {
  localStorage.setItem('olov_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const container = document.getElementById('cartItems');
  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--gray-500);padding:40px 0">Savatcha bo\'sh</p>';
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
          <div class="cart-item-actions">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            <button class="qty-btn" onclick="removeFromCart(${item.id})" style="margin-left:auto;color:var(--primary)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

/* ====================== FAVORITES ====================== */
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) favorites.splice(idx, 1);
  else favorites.push(id);
  localStorage.setItem('olov_fav', JSON.stringify(favorites));
  updateFavUI();
  renderProducts(currentCat, document.getElementById('searchInput').value);
}

function updateFavUI() {
  document.getElementById('favCount').textContent = favorites.length;
}

function renderFavorites() {
  const list = document.getElementById('favoritesList');
  if (favorites.length === 0) {
    list.innerHTML = '<p style="text-align:center;color:var(--gray-500)">Sevimlilar bo\'sh</p>';
    return;
  }
  list.innerHTML = favorites.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return '';
    return `
      <div class="fav-item">
        <img src="${p.img}" alt="${p.name}">
        <div style="flex:1">
          <strong>${p.name}</strong>
          <div style="color:var(--primary);font-weight:700">${formatPrice(p.price)}</div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">+</button>
      </div>
    `;
  }).join('');
}

/* ====================== THEME & LANG ====================== */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const icon = document.querySelector('#themeBtn i');
  icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('olov_theme', currentTheme);
  applyTheme();
}

function applyLanguage() {
  document.getElementById('currentLang').textContent = currentLang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      if (key === 'hero_title') el.innerHTML = i18n[currentLang][key];
      else el.textContent = i18n[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang][key]) el.placeholder = i18n[currentLang][key];
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('olov_lang', lang);
  applyLanguage();
  document.getElementById('langDropdown').classList.remove('active');
}

/* ====================== HELPERS ====================== */
function formatPrice(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' so\'m';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ====================== EVENTS ====================== */
function bindEvents() {
  // Category
  document.getElementById('categoryTabs').addEventListener('click', e => {
    if (e.target.classList.contains('cat-btn')) {
      currentCat = e.target.dataset.cat;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderProducts(currentCat, document.getElementById('searchInput').value);
    }
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', e => {
    renderProducts(currentCat, e.target.value);
  });

  // Products actions
  document.getElementById('productsGrid').addEventListener('click', e => {
    const like = e.target.closest('.like-btn');
    const add = e.target.closest('.add-cart-btn');
    if (like) toggleFavorite(+like.dataset.id);
    if (add) addToCart(+add.dataset.id);
  });

  // Cart
  document.getElementById('cartBtn').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
  });
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('clearCartBtn').addEventListener('click', clearCart);

  // Favorites
  document.getElementById('favoritesBtn').addEventListener('click', () => {
    renderFavorites();
    document.getElementById('favoritesModal').classList.add('active');
  });
  document.getElementById('closeFavorites').addEventListener('click', () => {
    document.getElementById('favoritesModal').classList.remove('active');
  });

  // Theme
  document.getElementById('themeBtn').addEventListener('click', toggleTheme);

  // Language
  document.getElementById('langBtn').addEventListener('click', () => {
    document.getElementById('langDropdown').classList.toggle('active');
  });
  document.querySelectorAll('#langDropdown button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Auth
  document.getElementById('authBtn').addEventListener('click', () => {
    document.getElementById('authModal').classList.add('active');
  });
  document.getElementById('closeAuth').addEventListener('click', () => {
    document.getElementById('authModal').classList.remove('active');
  });

  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.dataset.tab === 'login';
      document.getElementById('loginForm').style.display = isLogin ? 'flex' : 'none';
      document.getElementById('registerForm').style.display = isLogin ? 'none' : 'flex';
      document.getElementById('authTitle').textContent = i18n[currentLang][isLogin ? 'login' : 'register'];
    });
  });

  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('Muvaffaqiyatli kirdingiz!');
    document.getElementById('authModal').classList.remove('active');
    document.getElementById('authBtn').textContent = 'Profil';
  });

  document.getElementById('registerForm').addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('regPassword').value;
    const pass2 = document.getElementById('regPassword2').value;
    if (pass !== pass2) {
      showToast('Parollar mos kelmadi');
      return;
    }
    showToast('Ro\'yxatdan o\'tdingiz!');
    document.getElementById('authModal').classList.remove('active');
  });

  // Checkout
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Savatcha bo\'sh');
      return;
    }
    closeCart();
    updateOrderSummary();
    document.getElementById('checkoutModal').classList.add('active');
  });

  document.getElementById('closeCheckout').addEventListener('click', () => {
    document.getElementById('checkoutModal').classList.remove('active');
  });

  document.querySelectorAll('input[name="delivery"]').forEach(r => {
    r.addEventListener('change', () => {
      const isDelivery = r.value === 'delivery';
      document.getElementById('deliveryFields').style.display = isDelivery ? 'block' : 'none';
      document.getElementById('pickupFields').style.display = isDelivery ? 'none' : 'block';
    });
  });

  document.getElementById('checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('Buyurtma qabul qilindi! Tez orada bog\'lanamiz.');
    document.getElementById('checkoutModal').classList.remove('active');
    clearCart();
  });

  // Review
  document.querySelectorAll('#ratingInput i').forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = +star.dataset.value;
      document.querySelectorAll('#ratingInput i').forEach(s => {
        s.classList.toggle('active', +s.dataset.value <= selectedRating);
      });
    });
  });

  document.getElementById('reviewForm').addEventListener('submit', e => {
    e.preventDefault();
    if (selectedRating === 0) {
      showToast('Reyting tanlang');
      return;
    }
    const name = document.getElementById('reviewName').value;
    const text = document.getElementById('reviewText').value;
    const date = new Date().toLocaleDateString('uz-UZ');
    reviews.unshift({
      name, text, rating: selectedRating, date,
      avatar: `https://i.pravatar.cc/100?u=${Date.now()}`
    });
    renderReviews();
    e.target.reset();
    selectedRating = 0;
    document.querySelectorAll('#ratingInput i').forEach(s => s.classList.remove('active'));
    showToast('Fikringiz qabul qilindi!');
  });

  // Mobile menu
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('active');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('active');
    });
  });

  // Close modals on outside click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
}

function updateOrderSummary() {
  const list = document.getElementById('orderSummaryList');
  list.innerHTML = cart.map(i => `
    <div style="display:flex;justify-content:space-between;margin-bottom:6px">
      <span>${i.name} × ${i.qty}</span>
      <span>${formatPrice(i.price * i.qty)}</span>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('orderTotal').textContent = formatPrice(total);
}

// Global for inline onclick
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;