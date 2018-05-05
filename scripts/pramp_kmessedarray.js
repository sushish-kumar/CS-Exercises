/*

K-Messed Array Sort
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/


/*
[1, 4, 5, 2, 3, 7, 8, 6, 10, 9]

4 => arr[3]
2 => arr[1]


The worst case time complexity of this approach will be O(N⋅log(N)) where N is the size of the input array. This method also do not use the fact that array is k-sorted.

We can also use insertion sort that will correct the order in just O(N∙K) time. Insertion Sort performs really well for small values of k but it is not recommended for large value of k (use it for k < 12).

However, we can do better than that. If we use min heap, we can get an asymptotically better time complexity. We can solve this problem in O(N⋅log(K)). The idea is to construct a min-heap of size k+1 and insert first k+1 elements into the heap. Then we remove min from the heap and insert next element from the array into the heap and continue the process until both array and heap are exhausted. Each pop operation from the heap should insert the corresponding top element in its correct position in the array.

Your peer is expected to implement a fully functional code. Many programming languages support natively the data structure priority queue that would allow to implement Heapsort quite easily. If that’s not the case with your programming language of choice, use the helper code provided in the coding pad.

https://gist.github.com/tpae/54ec7371f947505967a2036b9c002428

leetcode dynamic programming

Time Complexity: building a heap takes O(K) time for K+1 elements. Insertion into and extraction from the min-heap take O(log(K)), each. Across all three loops, we do at least one of these actions N times, so the total time complexity is O(N⋅log(K)). if K is substantially smaller than N, then we can consider log(K) constant and argue that the complexity is practically linear.

Space Complexity: we need to a maintain min-heap of size K+1 throughout the algorithm, so the auxiliary space complexity is O(K).



https://en.wikipedia.org/wiki/Priority_queue


function insertionSort(arr):
    for i from 1 to arr.length-1:
        x = arr[i]
        j = i-1

        while (j >= 0 AND arr[j] > x):
            arr[j+1] = arr[j]
            j--
        arr[j+1] = x

    return arr




            5
         /     \
        34     323
        / \     / \
       123  133
   /  \          /   \

        /     \


https://en.wikipedia.org/wiki/Heap_(data_structure)#Comparison_of_theoretic_bounds_for_variants



https://leetcode.com/tag/dynamic-programming/


https://leetcode.com/problems/unique-paths/description/


*/


function sortKMessedArray(arr, k) {

}

let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2;
sortKMessedArray(arr, k);