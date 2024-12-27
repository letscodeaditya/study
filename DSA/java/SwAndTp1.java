import java.util.HashMap;

public class SwAndTp1 {

    //pattern asked in swandtp

    ////1. constant window 
    //in this the windows will be constant meaning the subarray/substring size will be constant fixed it could be size

    ////2. longest subarray/substring where <condition>

    ////3. no. of subarray possible where <condition> (hard)





    ///////////////////ex for 1 type ///////////////////

    //find max sum of element of consecutive element of kth length subarray 

    public int maxSumOfSubArray(int arr[], int k){
        int l = 0;
        int r = k-1;
        int sum = 0;
        int maxSum = 0;
        for(int i = 0; i<k; i++){
            sum = sum + arr[i];
        }

        while(r<arr.length-1){
            r++;    
            sum = sum + arr[r];
            sum = sum - arr[l];
            l++;
            maxSum = Math.max(maxSum, sum);
        }

        return maxSum;
    }


    
    //1423. Maximum Points You Can Obtain from Cards
    public int maxScore(int[] cardPoints, int k) {
        int lSum = 0;
        int rSum = 0;
        int maxSum = 0;

        for(int i = 0; i<k; i++){
            lSum = lSum + cardPoints[i];
            maxSum = lSum;
        }

        int rightIndex = cardPoints.length-1;

        for(int i = k-1; i>=0 ; i--){
            lSum = lSum - cardPoints[i];
            rSum = rSum + cardPoints[rightIndex];
            rightIndex--;
            maxSum = Math.max(maxSum, lSum+rSum);
        }

        return maxSum;
    }



    ///2395. Find Subarrays With Equal Sum
    
    public boolean findSubarrays(int[] nums) {
        int size = 2;
        int l = 0;
        int r = size - 1;
        int sum = 0;
        HashMap<Integer, Integer> n = new HashMap<>();


        for(int i = 0; i<size; i++){
            sum = sum + nums[i];
        }

        n.put(sum, 0);

        while(r<nums.length-1){
            r++;
            sum = sum + nums[r];
            sum = sum - nums[l];
            l++;

            if(n.containsKey(sum)){
                return true;
            }else{
                n.put(sum,l);
            }
        }

        return false;


    }






    ///////////////////ex for 2nd type///////////////////

    public int sumOfSubArrayWithSum(int arr[],int k){
        //l will be in start
        int l = 0;
        //r will be moving to create subarrays;
        int r = 0;
        int sum = 0;
        int maxLen = 0;
        
        while(r<arr.length){
            //add the new element into sum
            sum = sum + arr[r];

            //if sum comes out to be > k then it will start moving l point which is the starting point of that subarray and also remove its contibution from sum 
            while(sum < k){
                sum = sum-arr[l];
                l++;
            }

            maxLen = Math.max(maxLen, r-l+1);
            r++;
        }

        return maxLen;
    }





    public int lengthOfLongestSubstringWithoutRepeat(String n){
        char arr[] = n.toCharArray();
        HashMap<Character,Integer> m = new HashMap<>();
        int l = 0;
        int r = 0;
        int maxLen = 0;

        while(r<arr.length){
            //it will remove the start value from hashmap and also increment to next value and check until r is not present in hashmap
            while(m.containsKey(arr[r])){
                m.remove(arr[l]);
                l++;
            }
            maxLen = Math.max(maxLen, r-l+1);
            m.put(arr[r],1);
            r++;
        }

        return maxLen;
    }






    //1004. Max Consecutive Ones III 
    //to solve this treat it to find a subarray where max zero the ycan have is k

    public int longestOnesBrute(int[] nums, int k) {
        int maxLen = 0;

        for(int i = 0; i<nums.length; i++){
            int zero = 0;
            for(int j = i; j<nums.length; j++){
                if(nums[j] == 0){
                    zero++;
                }
                if(zero <= k){
                    maxLen = Math.max(maxLen, j-i+1);
                }else{
                    break;
                }
            }
        }
        return maxLen;
    }


    public int longestOnesOptimal(int[] nums, int k) {
        int maxLen = 0;
        int r = 0;
        int l = 0;

        int count = 0;

        while(r<nums.length){
            if(nums[r] == 0){
                count++;
            }

            if(count <= k){
                maxLen = Math.max(maxLen, r-l+1);
            }else{
                if(nums[l] == 0){
                    count--;
                }
                l++;
            }
            r++;
        }

        return maxLen;
    }




    public static void main(String[] args) {
        
    }
}
