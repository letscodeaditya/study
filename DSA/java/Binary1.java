import java.util.Scanner;

public class Binary1 {


    //binary search
    public int search(int[] nums, int target) {
        int head = 0;
        int tail = nums.length-1;
        int mid;

        while(tail>=head){
            mid =(tail+head)/2;
            if(nums[mid] == target){
                return mid;
            } else if(target > nums[mid]){
                head = mid+1;
            } else{
                tail = mid-1;
            }
        }

        return -1;
    }


    //lower bound - smallest index such that arr[ind] >= n;
    public int lower(int nums[], int target){
        int head = 0;
        int tail = nums.length-1;
        int mid;
        int ans = nums.length;

        while(tail >= head){
            mid=(tail+head)/2;
            if(nums[mid] >= target){
                ans = mid;
                tail = mid-1;
            } else{
                head = mid+1;
            }
        }

        return ans;

    }


    //upper bound smallest index such that arr[ind] > n
    public int upper(int nums[], int target){
        int head = 0;
        int tail = nums.length-1;
        int mid;
        int ans = nums.length;

        while(tail >= head){
            mid=(tail+head)/2;
            if(nums[mid] > target){
                ans = mid;
                tail = mid-1;
            } else{
                head = mid+1;
            }
        }

        return ans;

    }








    // ind the floor and ceiling of x in arr[0..n-1].
    // The floor of x is the largest element in the array which is smaller than or equal to x.
    // The ceiling of x is the smallest element in the array greater than or equal to x.   














    // Find First and Last Position of Element in Sorted Array

    public int[] searchRange(int[] nums, int target) {
        int lb = lower(nums, target);
        if(lb == nums.length || nums[lb] != target){
            int result[] = {-1, -1};
            return result;
        }
        return new int[]{lb, upper(nums, target) - 1};
    }
    




   
    //Find the total number of occurrences of 'x' in the sorted array containing duplicates.

    public int count(int arr[], int n, int x) {
        int first = lower(arr, x);
        if (first == -1) return 0;
        int last = upper(arr, x);

        return (last-first);
    }







    //sorted array containing duplicates

    public static boolean searchInRotateArray(int[] nums, int target) {
        int head=0, tail= nums.length-1;

        while(tail >= head){
            int mid = (tail+head)/2;
            if(nums[mid] == target){
                return true;
            }
            if(nums[head] == nums[mid] && nums[mid] == nums[tail]){
                head++;
                tail--;
                continue;
            }
            if(nums[head] <= nums[mid]){
                if(nums[head] <= target && nums[mid] >= target){
                    tail = mid-1;
                }else{
                    head = mid+1;
                }
            } else{
                if(nums[mid] <= target && nums[tail] >= target){
                    head = mid+1;
                }else{
                    tail = mid-1;
                }

            }
        }

        return false;
    }









    //find min number in sorted rotated array

    public int findMin(int[] nums) {
        int head = 0, tail=nums.length-1, ans = Integer.MAX_VALUE;
        while(tail >= head){
            int mid = (tail+head)/2;
            
            if(nums[mid] >= nums[head]){
                ans = Math.min(nums[head],ans);
                head = mid+1;
            }else{
                ans = Math.min(nums[mid],ans);
                tail = mid-1;
            }

        }

        return ans;
    }






    //Search Single Element in a sorted array





    





    //162. Find Peak Element

    public int findPeakElement(int[] nums) {
        int head=0, tail =nums.length-1;
            if(nums.length == 1){
                return head;
            }
            if(nums[head] > nums[head+1]){
                return head;
            }
            if(nums[tail] > nums[tail-1]){
                return tail;
            }

            head = 1;
            tail = nums.length-2;

        while(tail >= head){

            int mid = (tail+head)/2;

            if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]){
                return mid;
            } else if(nums[mid]<nums[mid+1]){
                head = mid+1;
            } else if(nums[mid]<nums[mid-1]){
                tail = mid-1;
            } else {
                head = mid+1;
            }

        }

        return -1;
    }







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
    }
}
