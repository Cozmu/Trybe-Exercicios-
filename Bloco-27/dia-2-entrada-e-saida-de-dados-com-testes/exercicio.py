file = open("alunos.txt")
reprovados = []
for aluno in file:
  aluno_atual = aluno
  aluno_arr = aluno_atual.split(" ")
  x = aluno_arr[1].split('/')
  if int(x[0]) < 6:
    reprovados.append(aluno_arr[0] + "\n")


with open("recuStudents.txt", mode="w") as recu_students_file:
    print(reprovados)
    recu_students_file.writelines(reprovados)

file.close()
