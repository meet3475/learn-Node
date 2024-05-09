
const url = require("url");

const weburl = "https://www.amazon.in/dp/B0CNX6WVG5/ref=sspa_dk_detail_1?pd_rd_i=B0CNX6WVG5&pd_rd_w=4Lx9x&content-id=amzn1.sym.b4e5ca1f-7c9f-49a0-abff-111b926d76ce&pf_rd_p=b4e5ca1f-7c9f-49a0-abff-111b926d76ce&pf_rd_r=EZ16R0CWV611BBP0HKS2&pd_rd_wg=7aK1H&pd_rd_r=d6183d21-f513-4ca2-b3f7-2dbd909d8989&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1"

// console.log(url.parse(weburl));

console.log(url.parse(weburl, true).query.pd_rd_i);