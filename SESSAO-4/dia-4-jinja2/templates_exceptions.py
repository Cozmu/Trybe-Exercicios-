from jinja2 import TemplateNotFound, Environment
from dict_loader import DictLoader

templates = {
    'index.html': '<h1>Um template sem exceções!</h1>',
    'about.html': '<p>Este é um exemplo de template Jinja2.</p>'
}

try:
    loader = DictLoader(templates)
    environment = Environment(loader=loader)
    template = environment.get_template('random.html')  # index.html
except TemplateNotFound:
    print('Erro: Template não encontrado')
except Exception as e:
    print("Erro: ", str(e))
else:
    print(template.render())
finally:
    print("Fim do programa.")
