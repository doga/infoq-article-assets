const total = await Qworum.getData(['@', 'shopping cart', 'total']);

if (total) {
  console.info(`Cart total is ${total.value.EUR} Euros.`);
} else {
  console.info(`Cart total is not set. Did you call a cart endpoint beforehand ?`);
}

