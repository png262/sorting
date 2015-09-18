describe('Bubble Sort', function(){
   it('handles an empty array', function(){
       expect( bubbleSort([]) ).toEqual( [] );
   });
});

describe('Bubble Sort Single Item', function(){
   it('handles a single item array', function(){
       expect( bubbleSort([1]) ).toEqual( [1] );
   });
});

describe('Bubble Sort - out of order', function(){
   it('sorts an even array', function(){
       expect( bubbleSort([3,2,7,9]) ).toEqual( [2,3,7,9] );
   });
});

describe('Bubble Sort - out of order', function(){
   it('sorts an uneven array', function(){
       expect( bubbleSort([3,2,7,9,4]) ).toEqual( [2,3,4,7,9] );
   });
});

describe('Merge Sort', function(){
   it('is able to merge two sorted arrays', function(){
       expect( merge([1,3,5],[2,4,6]) ).toEqual( [1,2,3,4,5,6] );
   });
});

describe('Merge Sort', function(){
   it('is able to merge two sorted arrays', function(){
       expect( merge([1,2,3],[4,5,6]) ).toEqual( [1,2,3,4,5,6] );
   });
});

describe('Split Array function', function() {
 it('is able to split an array into two halves', function() {
        expect( split([1,2,3]) ).toEqual([[1],[2,3]]);    
 });
});


describe('Split Array function', function() {
 it('is able to split an array into two halves', function() {
        expect( split([1,2]) ).toEqual([[1],[2]]);    
 });
});

describe('Split Array function', function() {
 it('is able to split an array into two halves', function() {
        expect( split([5,8,3,10]) ).toEqual([[5,8],[3,10]]);    
    });
});


describe('Merge Sort', function(){
   it('handles an empty array', function(){
       expect( mergeSort([]) ).toEqual( [] );
   });
});

describe('Merge Sort Single Item', function(){
   it('handles a single item array', function(){
       expect( mergeSort([1]) ).toEqual( [1] );
   });
});

describe('Merge Sort - out of order', function(){
   it('sorts an even array', function(){
       expect( mergeSort([3,2,7,9]) ).toEqual( [2,3,7,9] );
   });
});

describe('Merge Sort - out of order', function(){
   it('sorts an uneven array', function(){
       expect( mergeSort([3,2,7,9,4]) ).toEqual( [2,3,4,7,9] );
   });
});
