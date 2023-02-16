// Shopping cart end-point: https://cart.example/add-items/

// Run this when the web page is loaded.
async function updateCart(){
  // Read the call argument
  const lineItemsToAdd = await Qworum.getData('line items to add');

  // Read the current state
  let
  lineItems  = await Qworum.getData(['@', 'line items']),
  totalCents = 0;
  
  // (Add the new line items to the shopping cart here)
  
  // Store the new shopping cart state
  await Qworum.setData(['@', 'line items'], lineItems);
  await Qworum.setData(['@', 'total'], JsonValue({ EUR: totalCents / 100 }));

  // Show the shopping cart.
  await Qworum.eval(Script(
    Call(['@'], '/show-cart/')
  ));
}

