// Recursive binary-search solution
// Complexity: O(log n)
const shiftedListSearch = (shiftedList: number[]): number => {
  const bs = (left: number, right: number): number => {
    const range = right - left;
    if (range > 1) {
      const middle = left + Math.round(range/2);
      if (shiftedList[left] > shiftedList[middle]){
        right = middle;
      }else if (shiftedList[middle] > shiftedList[right]){
        left = middle;
      }else{
        // edge case, no shift
        return shiftedList[right];
      }
      return bs(left, right);
    }else{
      // edge case, empty list
      if (!shiftedList.length){
        return undefined;
      }
      return Math.max(shiftedList[right], shiftedList[left]);
    }
  }
  return bs(0, shiftedList.length-1);
}

const cases = [
  [],
  [2],
  [8, 9, 10, 11, 1, 3, 7],
  [6, 8, 10, 2, 4],
  [2, 4, 6, 8, 10],
  [10, 10, 10, 10, 10],
  [-10, -9, -123, -1233, -2343],
];

cases.forEach(shiftedList => {
  const result = shiftedListSearch(shiftedList);
  console.log(result);  
});
