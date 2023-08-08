from flask import Flask, render_template, request, redirect
from product import Product

app = Flask(__name__)
products = []

class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

book = Book('Dom Casmurro', 'Machado de Assis', 1899)

@app.route('/books')
def book_view():
    return render_template('book.html', book=book)

@app.route('/products')
def products_view():
    return render_template('products.html', products=products)

@app.route('/products', methods=['POST'])
def add_product():
    id = len(products) + 1
    name = request.form['name']
    price = float(request.form['price'])
    product = Product(id, name, price)
    products.append(product)
    return redirect('/products')

@app.route('/products/delete/<int:product_id>')
def delete_product(product_id):
    for product in products:
        if product.id == product_id:
            products.remove(product)
            break
    return redirect('/products')

@app.route('/films')
def films():
    filmes = [
        {'titulo': 'O Poderoso Chefão', 'ano': 1972},
        {'titulo': 'Interestelar', 'ano': 2014},
        {'titulo': 'A Origem', 'ano': 2010},
        {'titulo': 'Clube da Luta', 'ano': 1999},
        {'titulo': 'Pulp Fiction', 'ano': 1994}
    ]
    return render_template('films.html', filmes=filmes)

@app.route('/')
def index():
    welcome_message = "Bem-vindo ao meu site!"
    return render_template('index.html', message=welcome_message)

if __name__ == '__main__':
    app.run()