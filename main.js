// ==========================
// عرض المطاعم
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const restaurants = [
    { name: "كشري حكاية", logo: "Pics/Hekaia_res.png" }
    // ممكن تضيف مطاعم تانية هنا
  ];

  const container = document.getElementById("restaurantContainer");
  const fragment = document.createDocumentFragment();

  restaurants.forEach(r => {
    const div = document.createElement("div");
    div.classList.add("restaurant");

    const img = document.createElement("img");
    img.src = r.logo;
    img.alt = r.name;

    const name = document.createElement("p");
    name.textContent = r.name;

    div.appendChild(img);
    div.appendChild(name);

    fragment.appendChild(div);
  });

  if (container) {
    container.appendChild(fragment);
  }

  // ==========================
  // إظهار حقل "أخرى" إذا تم اختياره
  // ==========================
  const typeSelect = document.getElementById("typeSelect");
  const otherInput = document.getElementById("otherInput");

  function toggleOtherInput() {
    if (!typeSelect || !otherInput) return;

    if (typeSelect.value === "أخرى") {
      otherInput.style.display = "block";
      otherInput.required = true;
    } else {
      otherInput.style.display = "none";
      otherInput.required = false;
    }
  }

  if (typeSelect) {
    typeSelect.addEventListener("change", toggleOtherInput);
    toggleOtherInput(); // لضبط الحالة عند تحميل الصفحة
  }
});
