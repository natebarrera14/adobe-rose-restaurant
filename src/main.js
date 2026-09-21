import './styles.css';

const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mobileMenu?.classList.toggle('hidden', expanded);
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const inquiryForm = document.querySelector('#inquiry-form');
const formStatus = document.querySelector('#form-status');

inquiryForm?.addEventListener('submit', (event) => {
  if (!inquiryForm.checkValidity()) return;
  if (inquiryForm.action.includes('REPLACE_WITH_FORM_ID')) {
    event.preventDefault();
    formStatus.textContent = 'This preview form is ready for a Formspree project ID before launch. Please call or email Adobe Rose in the meantime.';
    formStatus.focus();
  }
});

const menuTabs = document.querySelectorAll('[data-menu-filter]');
const menuPanels = document.querySelectorAll('[data-menu-panel]');

menuTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selectedCategory = tab.dataset.menuFilter;
    menuTabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    menuPanels.forEach((panel) => panel.classList.toggle('hidden', panel.dataset.menuPanel !== selectedCategory));
  });
});

const newsletterDialog = document.querySelector('#newsletter-dialog');
const openNewsletter = () => newsletterDialog?.showModal();
const newsletterSeenKey = 'adobe-rose-newsletter-seen';

document.querySelectorAll('[data-newsletter-open]').forEach((button) => {
  button.addEventListener('click', openNewsletter);
});
document.querySelector('[data-newsletter-close]')?.addEventListener('click', () => newsletterDialog?.close());
newsletterDialog?.addEventListener('click', (event) => {
  if (event.target === newsletterDialog) newsletterDialog.close();
});

let hasSeenNewsletter = false;
try {
  hasSeenNewsletter = window.localStorage.getItem(newsletterSeenKey) === 'true';
} catch {
  // Some privacy modes disable storage; the signup can still open normally.
}

if (!hasSeenNewsletter) {
  try {
    window.localStorage.setItem(newsletterSeenKey, 'true');
  } catch {
    // Continue without persistence when browser storage is unavailable.
  }
  window.setTimeout(openNewsletter, 700);
}
