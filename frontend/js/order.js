/* 
  AR OFF-ROAD RIDES - Order Form Controller
  Manages purchase modal inputs, database storage API, and WhatsApp/Email messaging
*/

let selectedBikeForOrder = null;

// Open Order Form Popup
function openOrderForm(bike) {
  selectedBikeForOrder = bike;
  
  // Update UI Elements
  document.getElementById('order-bike-name').innerText = bike.name;
  
  // Reset form inputs
  document.getElementById('order-form-el').reset();
  
  // Set defaults
  document.getElementById('order-qty').value = 1;
  
  // Show Modal
  document.getElementById('order-modal').classList.add('active');
}

// Close Order Form Popup
function closeOrderForm() {
  document.getElementById('order-modal').classList.remove('active');
  selectedBikeForOrder = null;
}

// API Submission Helper
async function postOrderToBackend(orderPayload) {
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderPayload)
    });
    const result = await response.json();
    console.log("Order logged on server:", result);
    return result;
  } catch (err) {
    console.error("Failed to submit order to API backend:", err);
    return { success: false, error: err.message };
  }
}

// Format message for external dispatch
function formatMessageTemplate(data, clientType) {
  const isEmail = clientType === 'email';
  const nl = isEmail ? '%0D%0A' : '%0A';
  
  let msg = `*NEW VEHICLE ORDER*${nl}${nl}`;
  msg += `*Customer Details:*${nl}`;
  msg += `• Name: ${data.customerName}${nl}`;
  msg += `• Phone: ${data.phone}${nl}`;
  msg += `• Address: ${data.address}, ${data.city}, ${data.state} - ${data.pinCode}${nl}${nl}`;
  msg += `*Selected Item:*${nl}`;
  msg += `• Vehicle: ${data.productName}${nl}`;
  msg += `• Quantity: ${data.quantity}${nl}`;
  if (data.additionalMessage.trim()) {
    msg += `• Message: ${data.additionalMessage.trim()}${nl}`;
  }
  
  // If email, remove asterisks (as WhatsApp uses markdown, but email is plain text)
  if (isEmail) {
    msg = msg.replace(/\*/g, '');
  }
  
  return msg;
}

// Validate form
function validateOrderForm() {
  const fields = ['order-name', 'order-phone', 'order-address', 'order-city', 'order-state', 'order-pin'];
  for (const id of fields) {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      alert(`Please fill in all fields.`);
      el.focus();
      return false;
    }
  }

  // 1. Name validation (only alphabets A-Z, a-z, and spaces)
  const nameVal = document.getElementById('order-name').value.trim();
  if (!/^[a-zA-Z\s]+$/.test(nameVal)) {
    alert("Name should contain only alphabets and spaces.");
    document.getElementById('order-name').focus();
    return false;
  }

  // 2. Phone validation (10 digits, Indian number optionally starting with +91 or 91)
  const phoneVal = document.getElementById('order-phone').value.trim();
  let cleanPhone = phoneVal.replace(/[\s\-()]/g, '');
  if (cleanPhone.startsWith('+91')) {
    cleanPhone = cleanPhone.slice(3);
  } else if (cleanPhone.startsWith('91') && cleanPhone.length === 12) {
    cleanPhone = cleanPhone.slice(2);
  }
  if (!/^\d{10}$/.test(cleanPhone)) {
    alert("Phone number must be a valid 10-digit Indian number.");
    document.getElementById('order-phone').focus();
    return false;
  }

  // 3. Pincode validation (6 digits only, numeric only)
  const pinVal = document.getElementById('order-pin').value.trim();
  if (!/^\d{6}$/.test(pinVal)) {
    alert("PIN code must be exactly 6 numeric digits.");
    document.getElementById('order-pin').focus();
    return false;
  }

  return true;
}

// Trigger WhatsApp Dispatch
async function placeOrderWhatsApp() {
  if (!validateOrderForm()) return;
  if (!selectedBikeForOrder) return;

  const payload = {
    customerName: document.getElementById('order-name').value,
    phone: document.getElementById('order-phone').value,
    address: document.getElementById('order-address').value,
    city: document.getElementById('order-city').value,
    state: document.getElementById('order-state').value,
    pinCode: document.getElementById('order-pin').value,
    productName: selectedBikeForOrder.name,
    quantity: parseInt(document.getElementById('order-qty').value) || 1,
    additionalMessage: document.getElementById('order-message').value
  };

  // 1. Save to Database (Express backend API)
  await postOrderToBackend(payload);

  // 2. Open WhatsApp Web client
  const textEncoded = encodeURIComponent(formatMessageTemplate(payload, 'whatsapp'));
  const whatsappUrl = `https://wa.me/918247661058?text=${textEncoded}`;
  
  closeOrderForm();
  window.open(whatsappUrl, '_blank');
}

// Trigger Email Dispatch
async function placeOrderEmail() {
  if (!validateOrderForm()) return;
  if (!selectedBikeForOrder) return;

  const payload = {
    customerName: document.getElementById('order-name').value,
    phone: document.getElementById('order-phone').value,
    address: document.getElementById('order-address').value,
    city: document.getElementById('order-city').value,
    state: document.getElementById('order-state').value,
    pinCode: document.getElementById('order-pin').value,
    productName: selectedBikeForOrder.name,
    quantity: parseInt(document.getElementById('order-qty').value) || 1,
    additionalMessage: document.getElementById('order-message').value
  };

  // 1. Save to Database (Express backend API)
  await postOrderToBackend(payload);

  // 2. Open Local Mail Client
  const bodyEncoded = formatMessageTemplate(payload, 'email');
  const subjectEncoded = encodeURIComponent(`Order Inquiry: ${payload.productName}`);
  const mailtoUrl = `mailto:aroffroadrides@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
  
  closeOrderForm();
  window.location.href = mailtoUrl;
}
