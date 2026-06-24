export interface LineItem {
  price: number
  qty: number
}

/** Sum a list of prices to a total. */
export function cartTotal(prices: number[]): number {
  return prices.reduce((sum, n) => sum + n, 0)
}

/** Total for a cart of line items (price × quantity). */
export function lineItemsTotal(items: LineItem[]): number {
  return cartTotal(items.map((i) => i.price * i.qty))
}

/** Apply a percentage discount (0–100) to a total. */
export function applyDiscount(total: number, percentOff: number): number {
  const clamped = Math.min(100, Math.max(0, percentOff))
  return total * (1 - clamped / 100)
}
