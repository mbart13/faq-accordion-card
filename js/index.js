(function() {
  const questions = document.querySelectorAll('.question');
  const items = document.querySelectorAll('.faq-item')

  questions.forEach(question => {
    question.addEventListener('click', (e) => {
      const faqItem = e.currentTarget.closest('.faq-item');
      items.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('show-text')
        }
      })
      faqItem.classList.toggle('show-text')
    })
  })
}
)()
