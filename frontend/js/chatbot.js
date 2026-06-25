/* 
  AR OFF-ROAD RIDES - Chatbot Controller
  Provides interactive automated answers for AR Assistant
*/

document.addEventListener('DOMContentLoaded', () => {
  const triggerBtn = document.getElementById('chat-trigger');
  const chatWindow = document.getElementById('chat-window');
  const chatHistory = document.getElementById('chat-history');
  const repliesWrapper = document.getElementById('chat-replies');

  // FAQs Definition
  const faqs = {
    timings: {
      question: "What are your timings?",
      answer: "Please contact us for current showroom timings as they may vary."
    },
    order: {
      question: "How can I place an order?",
      answer: "Click the 'Buy Now' button on any product card, fill out the customer details form, and submit the form to send your order details via WhatsApp."
    },
    delivery: {
      question: "Do you deliver across India?",
      answer: "Yes, we offer premium delivery services across India. Contact our team to verify shipping options and rates for your specific location."
    },
    contact: {
      question: "How do I contact you?",
      answer: "You can reach us at:<br>• <strong>Company Phone:</strong> 7989455436<br>• <strong>Email:</strong> aroffroadrides@gmail.com<br>• <strong>Showroom:</strong> Visit our contact section below."
    },
    payment: {
      question: "What payment methods are accepted?",
      answer: "We accept bank transfers, UPI, and major electronic payment options. Detailed payment credentials will be provided upon order confirmation."
    },
    stock: {
      question: "Can I enquire about stock?",
      answer: "Yes, our stock status is visible on product details pages. For bulk orders or specific color availabilities, please contact us directly."
    }
  };

  // Toggle Chat window
  triggerBtn.addEventListener('click', () => {
    const isActive = chatWindow.classList.toggle('active');
    triggerBtn.classList.toggle('active');
    
    if (isActive && chatHistory.children.length === 0) {
      // Send initial greeting
      sendBotMessage("Hi there! I am your AR Assistant. How can I help you unleash your adventure today?");
      renderQuickReplies();
    }
  });

  // Render quick reply action chips
  function renderQuickReplies() {
    repliesWrapper.innerHTML = '';
    Object.keys(faqs).forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.innerText = faqs[key].question;
      btn.addEventListener('click', () => handleUserSelection(key));
      repliesWrapper.appendChild(btn);
    });
  }

  // Handle user reply selection click
  function handleUserSelection(key) {
    const selection = faqs[key];
    if (!selection) return;

    // Remove replies temporarily to prevent rapid clicking
    repliesWrapper.innerHTML = '';

    // Append User Message bubble
    appendBubble(selection.question, 'user');

    // Simulate Bot typing delay
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      sendBotMessage(selection.answer);
      renderQuickReplies();
    }, 1000 + Math.random() * 500); // 1.0s to 1.5s human-like response delay
  }

  // Append Chat bubble to history viewport
  function appendBubble(text, sender) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    chatHistory.appendChild(bubble);
    
    // Smooth auto scroll to bottom
    chatHistory.scrollTo({
      top: chatHistory.scrollHeight,
      behavior: 'smooth'
    });
  }

  // Send Bot reply
  function sendBotMessage(text) {
    appendBubble(text, 'bot');
  }

  // Typing Indicator simulation
  let typingBubble = null;

  function showTypingIndicator() {
    if (typingBubble) return;
    
    typingBubble = document.createElement('div');
    typingBubble.className = 'typing-bubble bot';
    typingBubble.innerHTML = `
      <div class="typing-dot" style="width: 5px; height: 5px; background: #888; border-radius: 50%; display: inline-block; animation: typingDot 1.4s infinite;"></div>
      <div class="typing-dot" style="width: 5px; height: 5px; background: #888; border-radius: 50%; display: inline-block; animation: typingDot 1.4s infinite; animation-delay: 0.2s; margin: 0 3px;"></div>
      <div class="typing-dot" style="width: 5px; height: 5px; background: #888; border-radius: 50%; display: inline-block; animation: typingDot 1.4s infinite; animation-delay: 0.4s;"></div>
    `;
    
    chatHistory.appendChild(typingBubble);
    chatHistory.scrollTo({
      top: chatHistory.scrollHeight,
      behavior: 'smooth'
    });
  }

  function removeTypingIndicator() {
    if (typingBubble) {
      typingBubble.remove();
      typingBubble = null;
    }
  }
});
