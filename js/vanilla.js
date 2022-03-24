/* Animate on scroll function. This is so that the title slide and fade in
when scrolled into view */
function fadeIn() {
  const fadeInTitles = document.querySelectorAll('.fade-in');
  for (let i = 0; i < fadeInTitles.length; i++) {
    let windowHeight = window.innerHeight;
    let targetTop = fadeInTitles[i].getBoundingClientRect().top;
    const targetVisible = 150;

    if (targetTop < windowHeight - targetVisible) {
      fadeInTitles[i].classList.add('active');
    } else {
      fadeInTitles[i].classList.remove('active');
    }
  }
}

//Invoking the function when scrolling is detected
window.addEventListener('scroll', fadeIn)

fadeIn();
