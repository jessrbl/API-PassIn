// src/utils/generate_slug.ts
function generateSlug(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, "").replace(/[^\w\-]+/g, "-").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

export {
  generateSlug
};
