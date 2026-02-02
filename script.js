// ===== Câu 1 =====
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ===== Câu 2 =====
const products = [
  new Product(1, "iPhone 15 Pro", 32000000, 5, "Electronics", true),
  new Product(2, "MacBook Air M2", 28000000, 3, "Electronics", true),
  new Product(3, "Tai nghe AirPods", 5500000, 0, "Accessories", true),
  new Product(4, "Chuột Logitech", 900000, 12, "Accessories", true),
  new Product(5, "Bàn phím cơ", 2500000, 7, "Accessories", false),
  new Product(6, "Samsung Galaxy S23", 26000000, 4, "Electronics", true)
];

// ===== Câu 3 =====
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));

// ===== Câu 4 =====
const inStockProducts = products.filter(p => p.quantity > 0);

// ===== Câu 5 =====
const hasProductOver30M = products.some(p => p.price > 30000000);

// ===== Câu 6 =====
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

// ===== Câu 7 =====
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);

// ===== Câu 8 =====
let output = "";
output += "Câu 8:\n";
for (let p of products) {
  output += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}\n`;
}

// ===== Câu 9 =====
output += "\nCâu 9:\n";
for (let p of products) {
  for (let key in p) {
    output += `${key}: ${p[key]}\n`;
  }
  output += "------------------\n";
}

// ===== Câu 10 =====
const sellingAndInStock = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

// ===== Hiển thị kết quả =====
output =
  "Câu 3:\n" + JSON.stringify(namePriceList, null, 2) +
  "\n\nCâu 4:\n" + JSON.stringify(inStockProducts, null, 2) +
  "\n\nCâu 5:\n" + hasProductOver30M +
  "\n\nCâu 6:\n" + allAccessoriesAvailable +
  "\n\nCâu 7:\n" + totalInventoryValue +
  "\n\n" + output +
  "\nCâu 10:\n" + sellingAndInStock.join(", ");

document.getElementById("output").textContent = output;

console.log("Câu 3:", namePriceList);
console.log("Câu 4:", inStockProducts);
console.log("Câu 5:", hasProductOver30M);
console.log("Câu 6:", allAccessoriesAvailable);
console.log("Câu 7:", totalInventoryValue);
console.log("Câu 8 + 9 in output");
console.log("Câu 10:", sellingAndInStock);
