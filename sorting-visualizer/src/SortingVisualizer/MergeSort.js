export function merge_sort(arr, start, end, animations){
    if (end <= start){
        return arr;
    } else {
        var p = Math.floor((start+end)/2) + 1*((start+end)%2!=0);
        merge_sort(arr, start, p-1, animations);
        merge_sort(arr, p, end, animations);
        _merge_lists(arr, start, end, p, animations);
    }
    return arr;
}

function _merge_lists(arr, start, end, p, animations){
    var i = start;
    var j = p;

    var tmp;
    while (i<j && j<=end){
        if (arr[j]<arr[i]){
            animations.push([i,j,1]);
            tmp = arr[j];
            arr.splice(j, 1);
            arr.splice(i, 0, tmp);
            i++
            j++;
        } else {
            animations.push([i,j,0]);
            i++;
        }
    }
}