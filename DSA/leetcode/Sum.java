package leetcode;

import java.util.HashMap;

public class Sum {

    public int missingNumber(int[] nums) {
        //arr[1,2,3,5,6]
        //sum of n natural number
        // 5 * 5+1/2 = 5 * 3 = 15
        int n = nums.length;
        int expectedSum = n * (n + 1) / 2;
        int sum = 0;

        for(int i=0; i<n;i++){
            sum += nums[i];
        }

        return expectedSum - sum;

    }   
    
    

    public static void twoSum(int arr[], int target){

        HashMap<Integer,Integer> mp = new HashMap<>();

        for(int i = 0; i<arr.length; i++){
            int key = arr[i];
            int find = target - key;

            if(mp.containsKey(find)){
                System.out.println("the index are "+mp.get(find)+" "+i);
            }

            mp.put(key,i);
        }
    }


    





    public static void main(String[] args) {
        int arr[] = {2,5,8,2,6,4};
        twoSum(arr, 8);
    }
}
