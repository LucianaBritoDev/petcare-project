<script>
      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Agendamento recebido! Entraremos em contato para confirmar.");
        this.reset();
      });

      // Animação suave ao scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    </script>