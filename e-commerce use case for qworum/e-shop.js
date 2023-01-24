// E-shop end-point: https://e-shop.example/view-article/

// Run this when the "Add to Cart" button is clicked.
async function addToCart(article) {
  await Qworum.eval(Script(
    Sequence(
      // Call the shopping cart service
      Call(
        ['@', 'shopping cart'], 'https://cart.example/add-items/',
        [{
          name: 'line items to add',
          value: Json([{
            id   : article.id,
            title: article.data.title,
            price: article.data.price,
            count: 1,
          }])
        }]
      ),
      // Goto('index.html')
    )
  ));
}

