const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
})

export default function formatCurrency(amount) {
  return formatter.format(amount)
}
