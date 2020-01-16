export function quick_sort_hoare(arr, start, end, animations){
    if (_unique_number(arr,start,end)){
        return [arr, animations];
    } else {
        var p;
        [arr, p] = _quick_sort_partition(arr, start, end, animations);
        quick_sort_hoare(arr, start, p, animations);
        quick_sort_hoare(arr, p+1, end, animations);
        return [arr, animations];
    }
}

function _quick_sort_partition(arr, start, end, animations){
    var p = Math.floor((start+end)/2)
    var p_val = arr[p];
    var i = start;
    var j = end;
    while (true){
        while (arr[i]<p_val){
            animations.push([p, i, j, 0]);
            i++;
        }
        while (arr[j]>p_val){
            animations.push([p, i, j, 0]);
            j--;
        }
        if (i>=j){
            return [arr, j];
        }

        arr = _swap_values(arr,i,j);

        //in case p was changed
        if (p==j){p=i;} else if(p==i){p=j;}

        animations.push([p, i, j, 1]);
        i++;
        j--;
        
    }
}

function _swap_values(arr, i, j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr
}

function _unique_number(arr, start, end){
    if (start==end) {return true;}
    else {
        var a = arr[start]
        for (var i=1;i<=end;i++){
            if (arr[i]!=a){
                return false;
            }
        }
        return true;
    }
}