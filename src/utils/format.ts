const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatPrice = (value: number): string => currency.format(value);

/** Inline SVG placeholder used when a product image fails to load. */
export function getFallbackImage(label: string): string {
  const safe = label.replace(/[<>&"']/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="600" height="450" fill="#e5e7eb"/><g fill="none" stroke="#9ca3af" stroke-width="8" stroke-linejoin="round"><rect x="250" y="160" width="100" height="80" rx="10"/><circle cx="278" cy="188" r="9"/><path d="M256 232l30-28 22 20 14-12 22 20"/></g><text x="300" y="290" font-family="Arial, sans-serif" font-size="22" fill="#6b7280" text-anchor="middle">${safe}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
