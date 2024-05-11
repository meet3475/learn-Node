
const url = require("url");

const weburl = "https://www.amazon.in/dp/B0CNX6WVG5/ref=sspa_dk_detail_1?pd_rd_i=B0CNX6WVG5&pd_rd_w=4Lx9x&content-id=amzn1.sym.b4e5ca1f-7c9f-49a0-abff-111b926d76ce&pf_rd_p=b4e5ca1f-7c9f-49a0-abff-111b926d76ce&pf_rd_r=EZ16R0CWV611BBP0HKS2&pd_rd_wg=7aK1H&pd_rd_r=d6183d21-f513-4ca2-b3f7-2dbd909d8989&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1"

// console.log(url.parse(weburl, true));

 console.log(url.parse(weburl, true).query.pd_rd_i); //B0CNX6WVG5

const data = {
    protocol: 'https:',
    host: 'www.abc.com',
    pathname: '/products',
    search: '?pid=55'
}

console.log(url.format(data)); //https://www.abc.com/products?pid=55


const url1 = 'https://www.abc.com/products';
const url2 = '../?pid=95';

console.log(url.resolve(url1, url2)); //https://www.abc.com/?pid=95
