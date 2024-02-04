Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hoverWithMedia", {
  images: [
    "project-caputure/social connect.png",
    "project-caputure/Bubblegame.png",
    "project-caputure/VidTube.png",
    "project-caputure/chakkra.png",
    "project-caputure/cuberto.png",
    "project-caputure/jscool.png",
  ],
});

// Email Notification
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contactno: document.getElementById("contactno").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_seujfa4";
  const templateID = "template_rrel11c";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contactno").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!! Mr.Himanshu will get in touch shortly.");
    })
    .catch((err) => console.log(err));
}

// Mobile Menu Button
var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    // mobileMenuBtn.innerHTML = "Close";
    setTimeout(function () {
      mobileMenu.style.display = "none";
    }, 4000);
  } else {
    mobileMenu.style.display = "none";
    // mobileMenuBtn.innerHTML = "Menu";
  }
});


// Image Style
// let sections = document.querySelectorAll(".bw");
// Shery.imageEffect(".bw", {
//   style: 1,
//   config: { onMouse: { value: 1 } },
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         scrub: 1,
//         onUpdate: function (prog) {
//           setScroll(prog.progress + index);
//         },
//       });
//     });
//   },
// });