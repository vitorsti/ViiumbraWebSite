import './styles.css'

const nav = document.querySelector('.nav')
const toggle = document.querySelector('.nav-toggle')

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(open))
  })

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}

const reveals = document.querySelectorAll('.reveal')
if (reveals.length) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach((el) => el.classList.add('is-visible'))
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    reveals.forEach((el) => io.observe(el))
  }
}

const heroPlane = document.querySelector('.hero__plane')
if (heroPlane && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener(
    'scroll',
    () => {
      const y = Math.min(window.scrollY, 400)
      heroPlane.style.transform = `translateY(${y * 0.18}px)`
    },
    { passive: true },
  )
}

const yearEl = document.querySelector('[data-year]')
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear())
}
