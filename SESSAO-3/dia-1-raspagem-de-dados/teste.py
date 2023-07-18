from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# Vamos testar com a primeira página
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recupera o atributo href do primeiro elemento que combine com o seletor
href = selector.css(".product_pod h3 a::attr(href)").get()
print(href)

# Para obter a url completa, basta adicionar a nossa URL_BASE
print(URL_BASE + href)
detail_page_url = URL_BASE + href
# baixa o conteúdo da página de detalhes
detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recupera a descrição do produto
# ~ significa a tag irmã
description = detail_selector.css("#product_description ~ p::text").get()
print(description)

response2 = requests.get("http://books.toscrape.com/")
selector2 = Selector(text=response2.text)
# Extrai todos os preços da primeira página
prices = selector2.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)

response3 = requests.get("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")
selector3 = Selector(text=response3.text)

# Extrai a descrição
description3 = selector3.css("#product_description ~ p::text").get()
print(description3)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description3.endswith(suffix):
    description3 = description3[:-len(suffix)]
print(description3)