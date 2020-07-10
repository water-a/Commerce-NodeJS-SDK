class PartnerReferralsCreateRequest {
  constructor() {
    this.path = "/v2/customer/partner-referrals";
    this.verb = "POST";
    this.body = null;
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = { PartnerReferralsCreateRequest };
