(function() {
  const chatbotId = document.currentScript?.getAttribute('data-id');
  if (!chatbotId) return;

  const container = document.createElement('div');
  container.id = 'ai-chat-widget';
  container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border-radius: 12px; box-shadow: 0 5px 40px rgba(0,0,0,0.16); background: white; z-index: 9999;';
  document.body.appendChild(container);

  const iframe = document.createElement('iframe');
  iframe.src = `${window.location.origin}/embed?token=${chatbotId}`;
  iframe.style.cssText = 'width: 100%; height: 100%; border: none; border-radius: 12px;';
  container.appendChild(iframe);
})();