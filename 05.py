def inverterTexto(texto: str) -> str:
    return print(texto[::-1])


inverterTexto("Ola mundo")


def inverterTexto2(texto: str) -> str:
    novoTexto: str = ""
    for i in range(len(texto) - 1, -1, -1):
        novoTexto: str = novoTexto + texto[i]

    return print(novoTexto)


inverterTexto2("Ola mundo")
