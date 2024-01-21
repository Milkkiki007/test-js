// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
inventory.orange = {price : 20, quantity : 300};

let total = 0;

for (let i = 0; i < inventory.length; i++) {
  total =  total + inventory[i].price * inventory[i].quantity;
}

console.log(`Total inventory value: ${total.toLocaleString()} baht`);