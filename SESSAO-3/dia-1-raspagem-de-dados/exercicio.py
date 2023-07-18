import requests
from parsel import Selector

response = requests.get('https://httpbin.org/encoding/utf8')
# print(response.text)

github_users = requests.get('https://api.github.com/users').json()

for user in github_users:
    user_name = user["login"]
    user_url = user["avatar_url"]
    # print(user_name, user_url)

response_ex_3 = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response_ex_3.text


response_ex_4 = requests.get('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')
selector = Selector(text=response_ex_4.text)

title = selector.css('.col-sm-6 h1::text').get()
price = selector.css('.product_main > price_color::text').re_first(r'\d*\.\d{2}')
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = selector.css("#product_gallery img::attr(src)").get()
availability = selector.css('.product_main .availability::text').re_first(r'/d')

print(title, price, description, cover, availability, sep=",")