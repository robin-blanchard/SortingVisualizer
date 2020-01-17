export function get_animations_insertion_sort(arr){
    var animations=[];
    for (var i=0; i<arr.length; i++){
        var fixed_val = arr[i];
        var min_val = fixed_val;
        var min_idx = i;        
        for (var j=i+1; j<=arr.length; j++){

            var moving_val = arr[j];
            if (moving_val < min_val){
                min_val = moving_val;
                min_idx = j;
                animations.push([i, min_idx, j, 0]);
            } else {
                animations.push([i, min_idx, j, 0]);
            }
        }

        arr = _swap_values(arr, i , min_idx);
        animations.push([i, min_idx, min_idx, 1]);
    }
    return animations;
}

function _swap_values(arr, i, j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr
}