export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })
    .format(value)
    .slice(3);
}