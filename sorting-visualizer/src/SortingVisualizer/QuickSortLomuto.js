export function quick_sort_lomuto(arr, start, end, animations){
    if (start<end){
        var p;
        [p, arr] = _partition(arr, start, end, animations);
        arr = quick_sort_lomuto(arr, start, p-1, animations);
        arr = quick_sort_lomuto(arr, p+1, end, animations);
        return arr
    } else {
        return arr;
    }
}

function _partition(arr, start, end, animations){
    var p = end;
    var p_val = arr[p];
    var i = start;
    for (var j=start; j<end; j++){
        if (arr[j]<p_val){
            arr = _swap_values(arr,i,j);
            animations.push([p, i, j, 1]);
            i++;
        } else {
            animations.push([p, i, j, 0]);
        }
    }
    
    if (arr[i]!=arr[end]){
        arr = _swap_values(arr,i, end);
        animations.push([p, i, end, 1]);
    } else {
        animations.push([p, i, end, 0]);
    }
    
    return [i,arr];
}

function _swap_values(arr, i, j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr
}