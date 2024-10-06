document.getElementById('feedback-button').addEventListener('click', function() {
  const form = document.getElementById('feedback-form');
  if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block'; 
  } else {
      form.style.display = 'none'; 
  }
});

document.getElementById('feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const testimonial = event.target.testimonial.value;

  alert(`Thank you for your feedback, ${name}!\n\nYour Testimonial:\n"${testimonial}"\n\nWe will get back to you at ${email}.`);

  event.target.reset();
  form.style.display = 'none'; 
});


// GSAP-ANIMATION

gsap.from(".left-inner-text", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%", 
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: -100, 
  duration: 1.5,
  ease: "power2.out",
});

// Animate the hero image
gsap.from(".right-image img", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 100, 
  duration: 1.5,
  ease: "power2.out",
});
// course-gsap-animation
gsap.from(".cards", {
  scrollTrigger: {
    trigger: ".course-cards",
    start: "top 80%", 
    end: "bottom 20%", 
    toggleActions: "play none none reset", 
    scrub: 1, 
  },
  opacity: 0,
  y: 50, 
  stagger: 0.2,
  duration: 1, 
  ease: "power3.out", 
});


// Testimonial-gsap-animation
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".Testimonial-cards").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none reverse", 
    },
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100, 
    rotate: i % 2 === 0 ? -5 : 5, 
    duration: 1.5,
    ease: "power2.out",
  });
});



gsap.registerPlugin(ScrollTrigger);

// Animate the form when it comes into view
gsap.from(".form form", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%", // Adjust when animation should start
    end: "bottom 20%",
    toggleActions: "play none none reverse", // Play the animation on entering and reverse on leaving
  },
  opacity: 0,
  x: -100, // Slide the form in from the left
  duration: 1.2,
  ease: "power2.out"
});

// Animate the image when the section is visible
gsap.from(".form .right img", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%", // Trigger when the section is in view
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 100, // Slide the image in from the right
  duration: 1.2,
  ease: "power2.out"
});


window.onload = () => {

  gsap.from(".footer > div", {
    opacity: 0,
    y: 20,
    stagger: 0.1, // Delay between animations of each element
    duration: 0.5, // Duration of each animation
    ease: "power2.out" // Easing function for a smooth effect
  });


  gsap.from(".social-medias img", {
    scale: 0, // Start from scaled down
    duration: 0.5,
    stagger: 0.1, // Delay between animations of each icon
    ease: "back.out(1.7)" // Easing for bounce effect
  });
};




