def merge_sort(L):
    n=len(L)
    if n<2:
        return L
    else:
        p=n//2
        return merge_lists(merge_sort(L[:p]), merge_sort(L[p:]))

def merge_lists(K,L):
    R=[]
    while len(K)>0 and len(L)>0:
        if K[0]<L[0]:
            R.append(K.pop(0))
        else:
            R.append(L.pop(0))
    if len(K)==0:
        R.extend(L)
    else:
        R.extend(K)
    return R