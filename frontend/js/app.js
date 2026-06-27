/* 
  AR OFF-ROAD RIDES - Main Frontend Application
  Coordinates product catalog rendering, search filters, details modal carousel,
  contact form API integrations, and smooth scroll effects.
*/

document.addEventListener('DOMContentLoaded', () => {
  // --- Initialize Element Selectors ---
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const searchOverlay = document.getElementById('search-overlay');
  const searchTrigger = document.getElementById('search-trigger');
  const searchClose = document.getElementById('search-close');
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  // Mobile nav elements
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  // Details Modal Elements
  const detailsModal = document.getElementById('details-modal');
  const mainGalleryImg = document.getElementById('gallery-main');
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');
  const galleryThumbs = document.getElementById('gallery-thumbs');
  
  const detailName = document.getElementById('detail-name');
  const detailPrice = document.getElementById('detail-price');
  const detailStock = document.getElementById('detail-stock');
  const detailDesc = document.getElementById('detail-desc');
  const detailColors = document.getElementById('detail-colors');
  const detailFeatures = document.getElementById('detail-features');
  const detailSpecsTable = document.getElementById('detail-specs-table');
  const detailBuyBtn = document.getElementById('detail-buy-btn');

  // Contact Form Element
  const contactForm = document.getElementById('contact-form-el');

  // --- State Variables ---
  let activeCategory = 'All';
  let activeSearchQuery = '';
  let activeDetailsBike = null;
  let activeGalleryIndex = 0;

  // --- Sticky Header Navigation ---
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Hamburger Menu Toggle ---
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // --- Search Overlay Toggle ---
  if (searchTrigger) {
    searchTrigger.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      searchInput.focus();
    });
  }

  searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    activeSearchQuery = '';
    renderCatalog();
  });

  searchInput.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value.toLowerCase().trim();
    renderCatalog();
  });

  // Close search overlay with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
      activeSearchQuery = '';
      renderCatalog();
    }
  });

  // --- Category Tabs Filtering ---
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      renderCatalog();
    });
  });

  // --- Catalog Render Engine ---
  function renderCatalog() {
    productsGrid.innerHTML = '';
    
    // Filter bikes
    const filteredBikes = bikesData.filter(bike => {
      const matchCategory = activeCategory === 'All' || bike.category === activeCategory;
      const matchSearch = bike.name.toLowerCase().includes(activeSearchQuery) || 
                          bike.shortDescription.toLowerCase().includes(activeSearchQuery) ||
                          bike.category.toLowerCase().includes(activeSearchQuery);
      return matchCategory && matchSearch;
    });

    if (filteredBikes.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-gray-muted);">
          <i class="fas fa-motorcycle" style="font-size: 3rem; margin-bottom: 16px; display: block; color: var(--primary-red);"></i>
          <p style="font-size: 1.2rem; font-family: var(--font-headings); font-weight: 500; color: #fff;">No adventure machines match your filter</p>
          <p style="font-size: 0.9rem; margin-top: 8px;">Try clearing your search query or selecting another category.</p>
        </div>
      `;
      return;
    }

    filteredBikes.forEach(bike => {
      const card = document.createElement('div');
      card.className = 'product-card glass reveal visible';
      
      const stockTag = bike.inStock 
        ? `<span class="product-tag">In Stock</span>` 
        : `<span class="product-tag out-of-stock">Sold Out</span>`;

      // Mini specifications list
      let miniSpecsHtml = '';
      const specKeys = Object.keys(bike.specifications).slice(0, 3);
      specKeys.forEach(key => {
        miniSpecsHtml += `<span class="mini-spec-badge">${key}: ${bike.specifications[key]}</span>`;
      });

      card.innerHTML = `
        <div class="product-img-wrapper">
          ${stockTag}
          <img class="product-card-img" src="${bike.images[0]}" alt="${bike.name}" loading="lazy">
        </div>
        <div class="product-info">
          <div class="product-header-row">
            <h3 class="product-card-title">${bike.name}</h3>
            <span class="product-card-price">${bike.price}</span>
          </div>
          <p class="product-card-desc">${bike.shortDescription}</p>
          <div class="product-mini-specs">
            ${miniSpecsHtml}
          </div>
          <div class="product-card-actions">
            <button class="btn btn-secondary view-details-btn" data-id="${bike.id}">View Details</button>
            <button class="btn btn-primary buy-now-btn" data-id="${bike.id}">Buy Now</button>
          </div>
        </div>
      `;

      // Event Listeners
      card.querySelector('.view-details-btn').addEventListener('click', () => openDetailsModal(bike));
      card.querySelector('.buy-now-btn').addEventListener('click', () => openOrderForm(bike));

      productsGrid.appendChild(card);
    });
  }

  // --- Product Details Modal Engine ---
  function openDetailsModal(bike) {
    activeDetailsBike = bike;
    activeGalleryIndex = 0;

    // Inject Text Content
    detailName.innerText = bike.name;
    detailPrice.innerText = bike.price;
    detailDesc.innerText = bike.fullDescription;
    
    // In stock indicator
    if (bike.inStock) {
      detailStock.innerText = 'In Stock';
      detailStock.className = 'details-stock-badge';
    } else {
      detailStock.innerText = 'Sold Out';
      detailStock.className = 'details-stock-badge out-of-stock';
    }

    // Render Colors
    detailColors.innerHTML = '';
    bike.colors.forEach(col => {
      const chip = document.createElement('span');
      chip.className = 'color-chip';
      chip.innerText = col;
      detailColors.appendChild(chip);
    });

    // Render Features
    detailFeatures.innerHTML = '';
    bike.features.forEach(feat => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check-circle"></i> ${feat}`;
      detailFeatures.appendChild(li);
    });

    // Render Specifications Table
    detailSpecsTable.innerHTML = '';
    Object.keys(bike.specifications).forEach(key => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="spec-name">${key}</td>
        <td class="spec-val">${bike.specifications[key]}</td>
      `;
      detailSpecsTable.appendChild(tr);
    });

    // Buy button click link
    detailBuyBtn.onclick = () => {
      closeDetailsModal();
      openOrderForm(bike);
    };

    // Render Gallery Images
    updateMainImage();

    // Thumbnails rendering
    galleryThumbs.innerHTML = '';
    bike.images.forEach((img, idx) => {
      const thumb = document.createElement('img');
      thumb.className = `gallery-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.src = img;
      thumb.alt = `${bike.name} page ${idx + 1}`;
      thumb.addEventListener('click', () => {
        activeGalleryIndex = idx;
        updateMainImage();
      });
      galleryThumbs.appendChild(thumb);
    });

    // Display Modal
    detailsModal.classList.add('active');
  }

  // Update image slideshow gallery state
  function updateMainImage() {
    if (!activeDetailsBike) return;
    
    // Crossfade effect: trigger slight fade out then update source
    mainGalleryImg.style.opacity = '0.3';
    setTimeout(() => {
      mainGalleryImg.src = activeDetailsBike.images[activeGalleryIndex];
      mainGalleryImg.style.opacity = '1';
    }, 100);

    // Update active thumbnail borders
    const thumbs = galleryThumbs.querySelectorAll('.gallery-thumb');
    thumbs.forEach((t, idx) => {
      if (idx === activeGalleryIndex) {
        t.classList.add('active');
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        t.classList.remove('active');
      }
    });
  }

  // Gallery Navigation arrows click
  galleryPrev.addEventListener('click', () => {
    if (!activeDetailsBike) return;
    activeGalleryIndex = (activeGalleryIndex - 1 + activeDetailsBike.images.length) % activeDetailsBike.images.length;
    updateMainImage();
  });

  galleryNext.addEventListener('click', () => {
    if (!activeDetailsBike) return;
    activeGalleryIndex = (activeGalleryIndex + 1) % activeDetailsBike.images.length;
    updateMainImage();
  });

  // Close Details Modal
  window.closeDetailsModal = function() {
    detailsModal.classList.remove('active');
    activeDetailsBike = null;
  };

  // Close Modal when clicking outside the content window
  window.addEventListener('click', (e) => {
    if (e.target === detailsModal) {
      closeDetailsModal();
    }
    const orderModal = document.getElementById('order-modal');
    if (e.target === orderModal) {
      closeOrderForm();
    }
  });

  // --- Contact Form Handling API ---
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const payload = {
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        message: document.getElementById('contact-message').value.trim()
      };

      if (!payload.name || !payload.email || !payload.message) {
        alert("Please complete all form fields.");
        return;
      }

      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error("Contact Form database sync failed:", err);
      }

      // Redirect to WhatsApp
      const nl = '%0A';
      let msg = `*Name:* ${payload.name}${nl}`;
      msg += `*Email:* ${payload.email}${nl}`;
      msg += `*Message:* ${payload.message}`;

      const textEncoded = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/918247661058?text=${textEncoded}`;
      
      contactForm.reset();
      window.open(whatsappUrl, '_blank');
    });
  }

  // --- Interactive Reveal-on-Scroll Observer ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Initial Render ---
  renderCatalog();
});
