def pad(array, min_size, value = None):
    x = min_size - len(array)

    while x > 0:
        array.append(value)
        x -= 1
    return array


# print(pad([1,2,3], 5) == [1,2,3,None,None])
