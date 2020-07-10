const querystring = require("querystring");

class PartnersGetRequest {
  constructor(platformMerchantId, sellerMerchantId) {
    this.path =
      "/v1/customer/partners/{platform_merchant_id}/merchant-integrations/{seller_merchant_id}";
    this.path = this.path.replace(
      "{platform_merchant_id}",
      querystring.escape(platformMerchantId),
    );
    this.path = this.path.replace(
      "{seller_merchant_id}",
      querystring.escape(sellerMerchantId),
    );
    this.verb = "GET";
    this.body = null;
    this.headers = {
      "Content-Type": "application/json",
    };
  }
}

module.exports = { PartnersGetRequest };
