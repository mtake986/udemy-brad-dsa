function calculateTotalSalesWithTax(obj, taxRate) {
  const beforeTax = obj.reduce((sum, obj) => sum + obj.price * obj.quantity, 0)
  return beforeTax + beforeTax * taxRate / 100;
}

module.exports = calculateTotalSalesWithTax;
