export function merge_sort(arr, start, end, animations){
    if (end <= start){
        console.log("return sort", arr, start, end)
        return arr;
    } else {
        var p = Math.floor((start+end)/2) + 1*((start+end)%2!=0);
        console.log(start, end, p);
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
    console.log("enter merge list", start, end, p);
    while (i<j && j<=end){
        console.log("comparing", arr[i], arr[j]);
        if (arr[j]<arr[i]){
            tmp = arr[j];
            arr.splice(j, 1);
            arr.splice(i, 0, tmp);
            i++
            j++;
        } else {
            i++;
        }
        console.log("result merge list", arr, i, j);
    }
}