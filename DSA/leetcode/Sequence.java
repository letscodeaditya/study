package leetcode;

import java.util.HashSet;
import java.util.Set;

public class Sequence {

    //if the longest contiguous segment of 1's is longer than the longest contiguous segment of 0's in s return true, or return false otherwise.
    public boolean checkZeroOnes(String s) {
        char arr[] = s.toCharArray();

        int maxOne = 0;
        int maxZero = 0;

        int countOne = 0;
        int countZero = 0;

        for(int i = 0; i<arr.length; i++){
            if(arr[i] == '1'){
                countOne++;
                maxOne = Math.max(maxOne, countOne);
                countZero = 0;
            }else{
                countZero++;
                maxZero = Math.max(maxZero, countZero);
                countOne = 0;
            }
        }

        if(maxZero < maxOne){
            return true;
        }else{
            return false;
        }
    }








    //Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
    //Input: nums = [100,4,200,1,3,2]
    //Output: 4
    //Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0){
            return 0;
        }
        Set<Integer> set = new HashSet<>();

        for(int i = 0;i<nums.length;i++){
            set.add(nums[i]);
        }

        int longest = 1;

        for(int s : set){
            if(!set.contains(s-1)){
                int count = 1;
                int smallest = s;
                while(set.contains(s+1)){
                    count++;
                    smallest = smallest + 1;
                    s++;
                }
                longest = Math.max(longest,count);
            }
        }
        return longest;
    }




    public static void main(String[] args) {
        
    }
}
