const portfolioItems = [
    { title: "Resplendent Color", image: "portfolio/resplendent/1_resplendent.webp", link: "project-list/resplendent-color.html" },
    { title: "Unboxed", image: "portfolio/unboxed/1_unboxed.webp", link: "project-list/unboxed.html" },
    { title: "Azure Ultra", image: "portfolio/azure ultra/1_azure.webp", link: "project-list/azure-ultra.html" },
    { title: "Pop Display", image: "portfolio/pop display/1_pop_display.webp", link: "project-list/pop-display.html" },
  ];

  const portfolioGrid = document.getElementById("portfolioGrid");

  portfolioItems.forEach((item) => {
    const portfolioItem = document.createElement("a");
    portfolioItem.href = item.link;
    portfolioItem.className = "relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1.5";
    
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.className = "w-full h-64 object-cover transition-transform duration-300 hover:scale-110";
    
    const overlay = document.createElement("div");
    overlay.className = "absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm font-bold p-4 opacity-0 transform translate-y-full transition-all duration-300";
    overlay.innerText = item.title;
    
    portfolioItem.appendChild(img);
    portfolioItem.appendChild(overlay);
    portfolioGrid.appendChild(portfolioItem);
    
    portfolioItem.addEventListener("mouseenter", () => overlay.classList.add("opacity-100", "translate-y-0"));
    portfolioItem.addEventListener("mouseleave", () => overlay.classList.remove("opacity-100", "translate-y-0"));
  });