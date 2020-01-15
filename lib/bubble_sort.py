def bubble_sort(L):
    n = len(L)
    for k in range(n-1,-1, -1):
        is_sorted = True
        for i in range(k):
            if L[i]>L[i+1]:
                is_sorted=False
                L[i],L[i+1] = L[i+1],L[i]
        if is_sorted:
            break
    return L
