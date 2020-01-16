export function get_animations_bubble_sort(arr){
    var animations=[];
    for (var k=arr.length-1; k>=0; k--){
        var is_sorted=true;
        for (var i=0; i<k; i++){
            if (arr[i]>arr[i+1]){
                is_sorted=false;
                _swap_values(arr, i, i+1);
                animations.push([i,i+1,1])
            } else {animations.push([i,i+1,0])}
        }
        if (is_sorted){break;}
    }
    return animations;
}

function _swap_values(arr, i, j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr
}