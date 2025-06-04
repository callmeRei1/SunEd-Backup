const cardsData = [
    { title: "Hours Freed", image: "images/img1.jpg", description: "This frees up your time." },
    { title: "Real-Time Intelligence", image: "images/img2.jpg", description: "Get data instantly." },
    { title: "Student Centered", image: "images/img3.jpg", description: "Focus on students." },
    { title: "Mastery Focused", image: "images/img4.jpg", description: "Help students master." },
    { title: "Any Platform", image: "images/img5.jpg", description: "Works on any device." },
    { title: "Mastery Focused", image: "images/img6.jpg", description: "Repeat success." },
    { title: "Something Else", image: "images/img7.jpg", description: "Just something else." },
    { title: "Another One", image: "images/img8.jpg", description: "Another description." }
  ];
  
  let currentPage = 1;
  const itemsPerPage = 6;
  
  function renderCards() {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const cardsToShow = cardsData.slice(start, end);
  
    cardsToShow.forEach((card, index) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <h4>${card.title}</h4>
        <button onclick="toggleDetail(this)">Show me</button>
        <div class="card-detail">${card.description}</div>
      `;
      container.appendChild(div);
    });
  
    document.getElementById("page-indicator").textContent = currentPage;
  }
  
  function toggleDetail(button) {
    const detailDiv = button.nextElementSibling;
    if (detailDiv.style.display === "none" || detailDiv.style.display === "") {
      detailDiv.style.display = "block";
      button.textContent = "Hide";
    } else {
      detailDiv.style.display = "none";
      button.textContent = "Show me";
    }
  }
  
  function nextPage() {
    const maxPage = Math.ceil(cardsData.length / itemsPerPage);
    if (currentPage < maxPage) {
      currentPage++;
      renderCards();
    }
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderCards();
    }
  }
  
  renderCards();
  