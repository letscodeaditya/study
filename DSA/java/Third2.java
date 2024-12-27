import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class Third2 {

    //rotate left to one place
    public static void rotateOne(int arr[]){
        int temp = arr[0];
        for(int i=0; i<arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = temp;
        print(arr);
    }


  

    //rotate till nth
    public static void rotateAny(int arr[],int rotate) {
        int size = arr.length;
        if (size == 0){
            return;
        }

        int place = rotate % size  ;
        if (place == 0){
            return;
        }

        int temp[] = new int[place];

        for(int i=0; i<place;i++ ){
            temp[i] = arr[i];
        }

        for(int j = place; j<size;j++){
            arr[j-place] = arr[j];
        }

        int count = 0;
        for(int k = size-place;k<size;k++){
            arr[k] = temp[count];
            count++;
        }
        
    }







    //Union of Two Sorted Arrays
    //arr[1,1,2,3,4,4] arr[1,3,3,4,5,6]  un=[1,2,3,4,5,6]


    //brute force
    public static void unionBrute(int arr1[], int arr2[]){
        HashMap <Integer, Integer> mp = new HashMap<>();

        for(int i =0; i<arr1.length; i++){
            mp.put(arr1[i],mp.getOrDefault(arr1[i], 0)+1);
        }

        for(int i=0;i<arr2.length; i++){
            mp.put(arr1[i],mp.getOrDefault(arr2[i], 0)+1);
        }

        HashSet <Integer> union = new HashSet<>();

        for(int it : mp.keySet()){
            union.add(it);
            mp.containsKey(union);
        }
    }


    //optimal solution
    //arr1[1,1,2,3,4,4] arr2[1,3,3,4,5,6]  un=[1,2,3,4,5,6]


    public static void UnionOptimal(int arr1[], int arr2[]){
        ArrayList <Integer> union = new ArrayList<>();

        int i = 0;
        int j = 0;

        while(i<arr1.length && j<arr2.length){
            if(arr1[i]<=arr2[j]){
                if(union.size()== 0 || arr1[i] != union.get(union.size()-1)){
                    union.add(arr1[i]);
                }
                i++;
            }else{
                if(union.size() == 0 || arr2[j] != union.get(union.size()-1)){
                    union.add(arr2[j]);
                }
                j++;
            }
        }

        //if arr1 get completed
        while(j<arr2.length){
            if(union.size() == 0 || arr2[j] != union.get(union.size()-1)){
                union.add(arr2[j]);
            }
            j++;
        }

        //if arr2 get completed 
        while(i<arr1.length){
            if(union.size() == 0 || arr1[i] != union.get(union.size()-1)){
                union.add(arr2[i]);
            }
            i++;
        }
    }







    //intersection of array
    //nums1 = [1,1,2,2], nums2 = [2,2]
    //nums1 = [4,9,5], nums2 = [9,4,9,8,4]

    public int[] intersection(int[] arr1, int[] arr2) {
        ArrayList<Integer> interSect = new ArrayList<>();
        int i=0, j=0;

        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] < arr2[j]){
                i++;
            } else if(arr1[i] > arr2[j]){
                j++;
            } else {
                if(interSect.size() == 0 || arr1[i] != interSect.get(interSect.size()-1)){
                    interSect.add(arr1[i]);
                    i++;
                    j++;
                }else{
                    i++;
                    j++;
                }
            }
        }

        int[] result = new int[interSect.size()];
        for (int k = 0; k < interSect.size(); k++) {
            result[k] = interSect.get(k);
        }
        return result;
    }








    //arr[1,2,3,5,6]

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







    public int findMaxConsecutiveOnes(int[] nums) {
        int count = 0, max = 0;

        for(int i=0; i<nums.length; i++){
            if(nums[i] == 1){
                count++;
            }else{
                count=0;
            }
            //it will only take the greater of two
           max = Math.max(max, count);
        }
        return max;
    }







    //Find the number that appears once, and other numbers twice.

    public void singleNumberBetter(int[] nums) {
        HashMap<Long, Long> mp = new HashMap<>();

        for(int i =0; i<nums.length; i++){
           
        }



    }


    public int singleNumberOptimal(int[] nums) {
        int xor =0;

        //1^1 = 0
        //4^4 =0
        //1^1^2^4^4 = 0^2 = 2 
        for(int i=0; i<nums.length;i++){
            xor = xor ^ nums[i];
        }

        return xor;
    }



    //longest subarray problem 










    public static void print(int arr[]){
        for(int i=0; i<arr.length;i++){
            System.out.println(arr[i]);;
        }
    }



    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
       
        System.out.print("enter the size of array: ");
        int size = sc.nextInt();

        int arr[] = new int[size];

        for(int i = 0; i <= size-1; i++){
            System.out.print("enter the " + ( i + 1) + " element: ");
            arr[i] = sc.nextInt();
            System.out.println("");
        }

        // rotateOne(arr);



    }
}
