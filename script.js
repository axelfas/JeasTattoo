const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('navbar-menu-open');
    });

    const navbarLinks = document.querySelectorAll('.navbar-item a');

    navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
    navbarMenu.classList.remove('navbar-menu-open');
        });
    });

    document.getElementById("showMoreButton").addEventListener("click", function() {
        var moreImages = document.getElementById("moreImages");
        moreImages.classList.toggle("hidden");
        if (moreImages.classList.contains("hidden")) {
          document.getElementById("showMoreButton").innerText = "Show more";
        } else {
          document.getElementById("showMoreButton").innerText = "Show less";
        }
      });


      const videoSection = document.querySelector('.video-section');
      const videoElement = videoSection.querySelector('.video-bg');
      
      function resizeVideo() {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const aspectRatio = 16 / 9; // Modifica esto según la relación de aspecto de tu video
      
        if (viewportWidth <= 768) {
          // En vista móvil, ajusta el tamaño del video de manera diferente
          const videoHeight = viewportWidth / aspectRatio;
          videoElement.style.width = '100%';
          videoElement.style.height = videoHeight + 'px';
        } else {
          // En otros tamaños de pantalla, utiliza el ajuste anterior
          videoElement.style.width = '100%';
          videoElement.style.height = '100%';
        }
      }
      
      window.addEventListener('resize', resizeVideo);
      resizeVideo();
      