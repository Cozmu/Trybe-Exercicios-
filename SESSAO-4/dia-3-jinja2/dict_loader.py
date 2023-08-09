from jinja2 import BaseLoader, Environment, TemplateNotFound

class DictLoader(BaseLoader):
    def __init__(self, templates):
        self.templates = templates

    def get_source(self, environment, template):
        if template in self.templates:
            source = self.templates[template]
            return source, None, lambda: False
        raise TemplateNotFound(template)


# Configurando o loader personalizado
templates = {
    'index.html': '<h1>Um template usando {{ nome }}!</h1>',
    'about.html': '<p>Este é um exemplo de template Jinja2.</p>'
}
loader = DictLoader(templates)

# Criando um ambiente Jinja2
environment = Environment(loader=loader)

# Carregando um template e renderizando com um contexto
template = environment.get_template('index.html')
output = template.render(nome='BaseLoader')
print(output)