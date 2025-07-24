const productModalElement = document.getElementById("productModal");
const productModal = new bootstrap.Modal(productModalElement);

document.getElementById("product-list").addEventListener("click", (e) => {
    const button = e.target.closest(".btn[data-bs-toggle='modal']");
    if (!button) return;

    const card = button.closest(".card");
    if (!card) return;

    const img = card.querySelector(".card-img-top")?.src || '';
    const title = card.querySelector(".card-title")?.textContent || '';
    const description = card.querySelector(".product-card__description")?.textContent || '';
    const price = card.querySelector(".card-text.fw-bold.fs-5")?.textContent || '';

    document.getElementById("modalImage").src = img;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalPrice").textContent = price;

    // Mostrar el modal usando la instancia única
    productModal.show();
});
