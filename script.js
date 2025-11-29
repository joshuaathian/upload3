
  document.getElementById("class-type").addEventListener("change", function () {
    const selected = this.value;
    const cards = document.querySelectorAll(".class-card");

    cards.forEach(card => {
      const type = card.getAttribute("data-type");

      // If "all", show everything
      if (selected === "all") {
        card.style.display = "block";
      } 
      // Otherwise, show only matching cards
      else if (type === selected) {
        card.style.display = "block";
      } 
      else {
        card.style.display = "none";
      }
    });
  });
document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".program-card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
