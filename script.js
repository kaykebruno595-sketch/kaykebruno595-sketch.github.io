const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  revealItems.forEach(item => observer.observe(item));
} else { revealItems.forEach(item => item.classList.add('visible')); }
const copyButton = document.getElementById('copy-message');
copyButton.addEventListener('click', async () => {
  const message = 'Olá, Kayke! Gostaria de conversar sobre um projeto de desenvolvimento web ou automação.';
  try {
    await navigator.clipboard.writeText(message);
    document.getElementById('copy-status').textContent = 'Mensagem copiada! Cole na conversa com o cliente ou no canal de contato desejado.';
  } catch {
    document.getElementById('copy-status').textContent = 'Não foi possível copiar automaticamente. Mensagem: ' + message;
  }
});
