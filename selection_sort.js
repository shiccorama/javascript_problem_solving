function swap(list, x, y){
	let temp = list[x];
	list[x] = list[y];
	list[y] = temp;
}



function selectionSort(list){
	let i, j, min_index;
	let n = list.length;
	
  	for(i=0; i<n-1; i++){
  		min_index = i;
      // console.log(min_index);
      		for(j=i+1; j<n; j++){
      			if(list[j] < list[min_index]){
              // console.log(j);
      				min_index = j;
      
              console.log(min_index);
      
      			}
            console.log("____");
      		}
      swap(list, min_index, i);
  	}
  	
	console.log(list);
	
}

let list =  [15,14,16,12] ;

selectionSort(list);