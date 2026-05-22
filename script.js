
const products = [
    { id: 1, name: "Mystic Peony", gender: "women", desc: "A fresh burst of blooming pink peonies infused with delicate white litchi and soft cashmere musk.", price: "$120.00", img: "img/1.jpg" },
    { id: 2, name: "Imperial Jasmine", gender: "women", desc: "Regal Sambac jasmine intertwined with glowing liquid amber and a cream-infused vanilla absolute.", price: "$135.00", img: "img/2.jpg" },
    { id: 3, name: "Velvet Orchid", gender: "women", desc: "Seductive black orchid petals wrapped around rich dark rum, warm honey, and velvet sandalwood.", price: "$140.00", img: "img/3.jpg" },
    { id: 4, name: "Sunkissed Neroli", gender: "women", desc: "Ferdinand neroli blossoms sparkling under Mediterranean sun notes, sea salt, and solar musk.", price: "$115.00", img: "img/4.jpg" },
    { id: 5, name: "Amour Infini", gender: "women", desc: "A powdery, romantic embrace of Bulgarian rose oil, iris concrete, and sugary white meringue.", price: "$130.00", img: "img/5.jpg" },
    { id: 6, name: "Blossom Elixir", gender: "women", desc: "Intense tuberose absolute paired unexpectedly with green tea leaves and sweet raspberry syrup.", price: "$125.00", img: "img/16.jpg" },
    { id: 7, name: "Gilded Mimosa", gender: "women", desc: "Golden mimosa dust layered beautifully with freshly sliced yellow pear and a clean linen base.", price: "$110.00", img: "img/14.jpg" },
    { id: 8, name: "Siren's Call", gender: "women", desc: "Hypnotic marine aquatic accords balancing warm coconut flesh, tiare flowers, and vanilla pod.", price: "$145.00", img: "img/16.jpg" },

    { id: 9, name: "Smoky Oud Royale", gender: "men", desc: "Royal deep Cambodian oud layered with intense tobacco leaf, dark patchouli, and resinous olibanum.", price: "$150.00", img: "img/13.jpg" },
    { id: 10, name: "Noir Cedarwood", gender: "men", desc: "Sharp Atlas cedar wood reinforced with crushed black pepper, nutmeg, and a dark vetiver trail.", price: "$130.00", img: "img/6.jpg" },
    { id: 11, name: "Oceanic Saffron", gender: "men", desc: "Sultry premium saffron spices blending perfectly with cool, salty Atlantic air and crisp oakmoss.", price: "$140.00", img: "img/7.jpg" },
    { id: 12, name: "Leather & Bergamot", gender: "men", desc: "Rough Tuscan leather refined dynamically with bright Italian bergamot zest and green cardamoms.", price: "$125.00", img: "img/8.jpg" },
    { id: 13, name: "Santal Sovereign", gender: "men", desc: "Ultra-creamy Australian sandalwood enhanced by ginger root oil and warm mineral amber grids.", price: "$135.00", img: "img/9.jpg" },
    { id: 14, name: "Amber Noir", gender: "men", desc: "Mysterious heavily concentrated warm amber bricks, sweet dark tonka bean, and roasted coffee extract.", price: "$145.00", img: "img/10.jpg" },
    { id: 15, name: "Vanguard Vetiver", gender: "men", desc: "Earthy, clean, and smoky vetiver grass layered with grapefruit oils and fresh cedar needles.", price: "$120.00", img: "img/11.jpg" },
    { id: 16, name: "Glacial Mint & Musk", gender: "men", desc: "An icy blast of Siberian wild mint, frosted juniper berries, and a heavy white musk core.", price: "$115.00", img: "img/12.jpg" }
];

const storeGrid = document.getElementById('store-grid');
const mainBody = document.getElementById('main-body');
const modal = document.getElementById('productModal');
const modalCard = document.getElementById('modal-card');
const modalImg = document.getElementById('modalImage');
const modalGender = document.getElementById('modalGenderBadge');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWA = document.getElementById('modalWhatsApp');
const closeModal = document.querySelector('.close-modal');

function switchGender(gender) {
    const headingContainer = document.getElementById('products-heading-container');
    const productsTitle = document.getElementById('products-title');
    
    headingContainer.classList.remove('hidden');

    if (gender === 'women') {
        mainBody.className = "theme-women text-[#2b213a] font-['Quicksand'] antialiased overflow-x-hidden transition-colors duration-500";
        productsTitle.innerText = "Pour Femme Collection";
        
        const womenProducts = products.filter(p => p.gender === 'women');
        loadStore(womenProducts);
    } else if (gender === 'men') {
        mainBody.className = "theme-men text-[#f5f5f5] font-['Quicksand'] antialiased overflow-x-hidden transition-colors duration-500";
        productsTitle.innerText = "Pour Homme Collection";
        
        const menProducts = products.filter(p => p.gender === 'men');
        loadStore(menProducts);
    }
}

function loadStore(productsToLoad) {
    storeGrid.innerHTML = "";
    productsToLoad.forEach(product => {
        const card = document.createElement('div');
        card.className = 'luxury-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div>
                <h3 class="font-['Cinzel'] font-bold text-sm md:text-base tracking-[1px] mt-3">${product.name}</h3>
                <p class="font-bold text-xs md:text-sm mt-1">${product.price}</p>
            </div>
        `;
        card.onclick = () => openLuxuryModal(product);
        storeGrid.appendChild(card);
    });
}

function openLuxuryModal(product) {
    modalImg.src = product.img;
    modalName.innerText = product.name;
    modalDesc.innerText = product.desc;
    modalPrice.innerText = product.price;
    
    modalGender.innerText = product.gender === 'women' ? '— Pour Femme —' : '— Pour Homme —';

    if (product.gender === 'women') {
        modalCard.className = "bg-white p-6 md:p-8 w-[92%] max-w-[800px] rounded-[24px] relative border-2 border-[#5a4282] shadow-2xl animate-slideUp text-[#2b213a]";
        modalGender.className = "font-['Cinzel'] text-xs tracking-[3px] uppercase font-bold mb-2 block text-[#5a4282]";
        modalPrice.className = "text-2xl font-black tracking-wide text-[#5a4282]";
        modalWA.className = "flex-1 p-4 bg-[#5a4282] hover:bg-[#415a77] text-white text-center font-bold text-base rounded-[14px] no-underline transition-all duration-300 hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2";
    } else {
        modalCard.className = "bg-[#11161d] p-6 md:p-8 w-[92%] max-w-[800px] rounded-[24px] relative border-2 border-[#b91c1c] shadow-2xl animate-slideUp text-[#f5f5f5]";
        modalGender.className = "font-['Cinzel'] text-xs tracking-[3px] uppercase font-bold mb-2 block text-[#b91c1c]";
        modalPrice.className = "text-2xl font-black tracking-wide text-[#38bdf8]";
        modalWA.className = "flex-1 p-4 bg-[#4c0519] hover:bg-[#b91c1c] text-white text-center font-bold text-base rounded-[14px] no-underline transition-all duration-300 hover:-translate-y-0.5 shadow-md border border-[#b91c1c] flex items-center justify-center gap-2";
    }

    const message = `Greetings AURA DE L'ÉLITE. I have discovered the magnificent fragrance "${product.name}" (${product.price}) from your digital atelier and I would like to initiate a private order request.`;
    modalWA.href = `https://wa.me/905xxxxxxxxx?text=${encodeURIComponent(message)}`; 

    modal.classList.remove('hidden');
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

closeModal.onclick = () => {
    modal.classList.add('hidden');
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (e) => {
    if (e.target == modal) closeModal.onclick();
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById('brand-intro').classList.add('loaded');
    }, 2300); 
});
