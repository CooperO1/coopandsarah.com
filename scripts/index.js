window.onload = function() {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        grabCursor: true,
        effect: "creative",
        speed: 1000,
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var modal = document.getElementById("rsvpModal");
      var btn = document.getElementById("rsvpButton");
      var btnMobile = document.getElementById("rsvpButton-mobile");
      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function() {
        modal.style.display = "block";
      }

      btnMobile.onclick = function() {
        modal.style.display = "block";
      }

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

