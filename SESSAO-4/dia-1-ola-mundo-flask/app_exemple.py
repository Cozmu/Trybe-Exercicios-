from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def root():
    return 'Hello world!'

@app.route("/api/")
def api_hello_world():
    return jsonify({'mensagem': 'Hello World!'})

if __name__ == '__main__':
    # debug = True, reinicia automaticamente a cada mudança de arquivo
    # mude a porta, caso ela estiver em uso
    app.run(debug = True, host='0.0.0.0', port=8000)