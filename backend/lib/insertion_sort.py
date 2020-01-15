def insertion_sort(L):
    for i, fixed_elt in enumerate(L):
        min_value = fixed_elt
        min_idx = i
        for j, moving_elt in enumerate(L[i+1:]):
            if moving_elt < min_value:
                min_value = moving_elt
                min_idx = i+1+j
        if min_idx!=i:
            L[i],L[min_idx] = L[min_idx],L[i]
    
    return L
