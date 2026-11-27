def insertion_sort(x):
    for i in range(1,len(x)):
        key = x[i]
        j = i - 1
        for j in range(i -1,-1,-1):
            if x[j] > key:
                x[j + 1] = x[j]
            else:
                break
        else:
            j = -1
        x[j + 1] = key
    return x

test_array = [9,5,4,1]
print(insertion_sort(test_array))
