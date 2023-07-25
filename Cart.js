class Product {
  constructor(product, unitPrice, gst, quantity) {
    this.product = product;
    this.unitPrice = unitPrice;
    this.gst = gst;
    this.quantity = quantity;
  }

  calculateTotal() {
    const discount = this.unitPrice >= 500 ? this.unitPrice * 0.05 : 0;
    const gstAmount = (this.unitPrice - discount) * (this.gst / 100);
    const totalPrice = (this.unitPrice - discount + gstAmount) * this.quantity;
    return totalPrice;
  }
}

const basket = [
  new Product("Leather wallet", 1100, 18, 1),
  new Product("Umbrella", 900, 12, 4),
  new Product("Cigarette", 200, 28, 3),
  new Product("Honey", 100, 0, 2)
];

const findProductWithMaxGST = (basket) => {
  let maxGSTProduct = null;
  let maxGSTAmount = 0;

  for (const product of basket) {
    const gstAmount = product.calculateTotal() - product.unitPrice * product.quantity;

    if (gstAmount > maxGSTAmount) {
      maxGSTAmount = gstAmount;
      maxGSTProduct = product;
    }
  }

  return maxGSTProduct;
};


const calculateTotalAmount = (basket) => {
  let totalAmount = 0;

  for (const product of basket) {
    totalAmount += product.calculateTotal();
  }

  return totalAmount;
};

const productWithMaxGST = findProductWithMaxGST(basket);
const totalAmountToBePaid = calculateTotalAmount(basket);

console.log("Product with Maximum GST Amount:", productWithMaxGST.product);
console.log("Total Amount to be Paid to the Shopkeeper:", totalAmountToBePaid);
