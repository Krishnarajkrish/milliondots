//Navigation bar

function showSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'flex'
}
function hideSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'none'
}


//Testimonials

const data = [
    {
      id: 1,
      name: "Jackson Jecil",
      job: "/ Travel Enthusiast",
      img: "https://randomuser.me/api/portraits/men/20.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolorum impedit? Sunt dicta hic magni?",
    },
    {
      id: 2,
      name: "Abin Modak",
      job: "/ Traveller",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea labore magni, unde sequi numquam quasi dele.",
    },
    {
      id: 3,
      name: "Shashant Singh",
      job: "/ Video Editor",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolorum impedit? Sunt dicta hic magni?",
    },
    {
      id: 4,
      name: "Ranveer Raj",
      job: "/ Web Dev",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officiis earum voluptatum illum dolore.",
    },
  ];
  const img = document.querySelector(".ReviewerImage");
  const btnNext = document.querySelector("#btn-right");
  const btnPrevious = document.querySelector("#btn-left");
  const name = document.querySelector(".ReviwerName");
  const role = document.querySelector(".ReviewerRole");
  const text = document.querySelector(".ActualReview");
  
  let index = 0;
  window.addEventListener("DOMContentLoaded", function () {
    const testimonial = data[0];
    loadTestimonial(testimonial);
  });
  function loadTestimonial(data) {
    img.src = data.img;
    name.textContent = data.name;
    role.textContent = data.job;
    text.innerHTML = data.text;
  }
  
  btnNext.addEventListener("click", function () {
    index++;
    if (index > data.length - 1) {
      index = 0;
    }
    loadTestimonial(data[index]);
  });
  btnPrevious.addEventListener("click", function () {
    index--;
    if (index < 0) {
      index = data.length - 1;
    }
    loadTestimonial(data[index]);
  });

//aos animation
  AOS.init();