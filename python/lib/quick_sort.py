def quick_sort(L):
    n=len(L)
    if n<2:
        return L
    else:
        p = L[n//2]
        inf = [x for x in L if x<p]
        eq = [x for x in L if x==p]
        sup = [x for x in L if x>p]
        return quick_sort(inf)+eq+quick_sort(sup)