// /**
//  *  Placeholder for the Json datatype.
//  *  @see {@link https://qworum.net/en/specification/v1/#json}
//  */
// type JsonValue = string | number | boolean | Array<JsonValue> | {} | null; 

/** 
 * Interface for a shopping cart service.
 */
interface IShoppingCart {
  /**
   * All articles in the shopping cart.
   * The name of the Qworum data container is 'line items'.
   * @public
   */
  lineItems: JsonValue;

  /**
   * Total in EUR of all articles in the shopping cart.
   * The name of the Qworum data container is 'total'.
   * @public
   */
  total: JsonValue;

  /**
   * Interactive endpoint that adds items to the shopping cart.
   * Absolute path within the service's web origin: /add-items/
   * @public
   * @param {JsonValue} lineItemsToAdd - The name of the Qworum call parameter is 'line items to add'.
   * @returns {JsonValue}
   */
  addItems: (lineItemsToAdd: JsonValue) => JsonValue;

  /**
   * Interactive endpoint that shows the cart contents to the end-user,
   * who can then check out.
   * Absolute path within the service's web origin: /show-cart/
   * @public
   * @returns {JsonValue}
   */
  showCart: () => JsonValue;
}

/** 
 * Interface for an e-shop service.
 * The endpoint that acts as an application is `home`.
 */
interface IShop {
  /**
   * Remote shopping cart service.
   * The name of the Qworum object is 'shopping cart'.
   * @private
   */
  shoppingCart: IShoppingCart;

  /**
   * Main interactive endpoint. Never returns.
   * Absolute path within web origin: /home/
   * @public
   * @returns {JsonValue}
   */
  home: () => JsonValue;

  /**
   * Interactive endpoint that shows an article to the end-user,
   * who can then add the article to the shopping cart.
   * This endpoint is called internally by the `home` endpoint.
   * Absolute path within web origin: /view-article/
   * @private
   * @param {JsonValue} articleId - A string. The name of the Qworum call parameter is 'article id'.
   * @returns {JsonValue}
   */
  viewArticle(articleId: JsonValue): JsonValue;
}


