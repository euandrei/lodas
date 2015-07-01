(function(window){
    var lodash = {};

    function chunk(array,size){
        var temp = [];
        var other = [];
        var counter = 0;
        for(i=0; i < array.length;i++){

            if(other.length < size){
                other.push(array[i]);
                count++
            }else{
                temp.push(other);
                other.length = 0;
                other.push(array[i]);
            }
        }
        return temp;

    };

    function compact(array){
        var some =[];
        for(i=0;i<array.length;i++){
            debugger
            if(array[i] !== false && array[i] !== "" && array[i] !== null && array[i] !== undefined  && array[i] !== 0  && array[i] !== NaN)
            {
                some.push(array[i]);
            }
        }
        return some;
    };

    lodash.chunk = chunk;
    lodash.compact = compact;

    window.lodash = lodash;

})(window);


