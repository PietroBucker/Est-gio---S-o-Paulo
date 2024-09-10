# questao 1
n1 = int(input("""Digite um numero para saber se faz parte do Fibonacci: """))


def eFibonacci(n1: int) -> str:
    a: int
    b: int
    a, b = 0, 1
    while a <= n1:
        a, b = b, a + b
        if a == n1:
            return "O numero faz parte da sequencia de Fibonacci"
    return "O numero nao faz parte da sequencia de Fibonacci"


print(eFibonacci(n1))

# questao 2


def encontra_A(word: str) -> int:
    return word.count("a")


print(encontra_A("banana"))


def encontra_A_2(word: str) -> int:
    count = 0
    for letra in word:
        if letra == "a":
            count += 1
    return count


print(encontra_A_2("banana"))
