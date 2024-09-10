def encontra_A_2(word: str) -> int:
    count = 0
    for letra in word:
        if letra == "a":
            count += 1
    return count


print(encontra_A_2("banana"))