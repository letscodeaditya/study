package leetcode.Arrays;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Mid {


    //sort array of 0,1,2
    //Dutch National flag algorithm. 

    //This algorithm contains 3 pointers i.e. low, mid, and high, and 3 main rules.  The rules are the following:

    //arr[0….low-1] contains 0. [Extreme left part]
    //arr[low….mid-1] contains 1.
    //arr[high+1….n-1] contains 2. [Extreme right part], n = size of the array
    //The middle part i.e. arr[mid….high] is the unsorted segment. 

    public void sortColors(int[] nums) {
        int low = 0, high = nums.length-1, mid=0;

        while(mid <= high){
            if(nums[mid] == 0){
                int temp = nums[low];
                nums[low] = nums[mid];
                nums[mid] = temp;
                low++;
                mid++;
            } else if(nums[mid] == 2){
                int temp = nums[high];
                nums[high] = nums[mid];
                nums[mid] = temp;
                high--;
            }else{
                mid++;
            }
        }
    }






    //////////////////Majority Element


    public int majorityElementBetter(int[] nums) {
        HashMap <Integer,Integer> mp = new HashMap<>();

        for(int i=0;i<nums.length;i++){
            mp.put(nums[i],mp.getOrDefault(nums[i],0)+1);
        }


        for(int it : mp.keySet()){
            if(mp.get(it) > nums.length/2){
                return it;
            }
        }

        return -1;

    }

    // Moore’s Voting Algorithm:
    // Intuition:
    // If the array contains a majority element, its occurrence must be greater than the floor(N/2). Now, we can say that the count of minority elements and majority elements is equal up to a certain point in the array. So when we traverse through the array we try to keep track of the count of elements and the element itself for which we are tracking the count. 

    // After traversing the whole array, we will check the element stored in the variable. If the question states that the array must contain a majority element, the stored element will be that one but if the question does not state so, then we need to check if the stored element is the majority element or not. If not, then the array does not contain any majority element.

    // Approach: 
    // Initialize 2 variables:  
    // Count –  for tracking the count of element
    // Element – for which element we are counting
    // Traverse through the given array.
    // If Count is 0 then store the current element of the array as Element.
    // If the current element and Element are the same increase the Count by 1.
    // If they are different decrease the Count by 1.
    // The integer present in Element should be the result we are expecting 


    public int majorityElementOptimal(int[] nums){
        int count = 0;
        int numb = 0;
        for(int i=0;i<nums.length;i++){
            if(count == 0){
                count++;
                numb = nums[i];
            }else if(nums[i] == numb){
                count++;
            }else {
                count--;
            }
        }
        return numb;
    }




    //118. Pascal's Triangle generate 
    //formula for each row element is 

    public List<Integer> generateRow(int row){
        long ans = 1;
        List<Integer> ansRow = new ArrayList<>();
        ansRow.add(1);

        for(int col = 1; col < row; col++){
            ans = ans * (row - col);
            ans = ans/col;
            ansRow.add((int)ans);
        }
        return ansRow;

    }

    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<>();

        for(int row = 1; row <= numRows; row++ ){
            ans.add(generateRow(row));
        }
        return ans;

    }





    public static void main(String[] args) {
        
    }
}
