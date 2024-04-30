
import { $ } from "../../lib/dom-selector";

const navActivator = $("#nav-activator");
const navContent = $("#nav-content");
const bars = navActivator.querySelectorAll(".bar");
const nav = $('#nav');

const toggleBodyScroll = () => {

  const opened = navContent.classList.contains('active');

  if (opened) {
    $('body').style.overflow = 'hidden';
  } else {
    $('body').style.overflow = 'auto';
  }
}

navActivator.addEventListener("click", () => {
  navContent.classList.toggle("active");
  bars.forEach((bar) => bar.classList.toggle("active"));
  toggleBodyScroll();
  /* FIX BODY RESIZE BUG */
});

/* Smooth scroll transition */
window.addEventListener('scroll', function () {
  const offset = window.scrollY;

  if (offset > 56) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});
