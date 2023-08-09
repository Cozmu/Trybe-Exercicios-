from jinja2 import Template

# Carrega um template a partir de um arquivo
template_file = open('template.html').read()
template1 = Template(template_file)

# Cria um contexto
data = {
    'saudacao': 'Eu sou um template HTML',
    'informacao': 'E essa é uma das formas de se passar múltiplas informações para o template',
    'contexto': 'Isso é possível através da criação de um contexto'
}

# Renderiza o template com um contexto específico
output1 = template1.render(data)


# Carrega um template a partir de uma string
template_string = "Eu sou um {{ nome }}!"
template2 = Template(template_string)

# Renderiza o template com um contexto específico
output2 = template2.render(nome='template')

# Imprime o resultado
print(output1, output2, sep="\n")