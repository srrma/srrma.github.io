// portfolio.js

// Array of portfolio items
const portfolioItems = [
    {
      title: "Resplendent Color",
      image: "portfolio/resplendent/1_resplendent.webp",
      link: "project-list/resplendent-color.html",
    },
    {
      title: "Unboxed",
      image: "portfolio/unboxed/1_unboxed.webp",
      link: "project-list/unboxed.html",
    },
    {
      title: "Azure Ultra",
      image: "portfolio/azure ultra/1_azure.webp",
      link: "project-list/azure-ultra.html",
    },
      {
        title: "Pop Display",
        image: "portfolio/pop display/2_pop_display.webp",
        link: "project-list/pop-display.html",
      },
    // Add more items here
  ];
  
  // Generate Portfolio Items
  const portfolioGrid = document.getElementById("portfolioGrid");
  
  portfolioItems.forEach((item) => {
    // Create portfolio item container
    const portfolioItem = document.createElement("a");
    portfolioItem.href = item.link;
    portfolioItem.classList.add("portfolio-item");
  
    // Add image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
  
    // Append elements
    portfolioItem.appendChild(img);
    portfolioGrid.appendChild(portfolioItem);
    portfolioItem.setAttribute("data-title", item.title);
  });
  