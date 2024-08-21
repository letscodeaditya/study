import java.util.HashMap;
import java.util.Scanner;

public class Third {

        //take array and search for a number and return its index (linear search)
        public static void findANum(int arr[]){
            Scanner sc = new Scanner(System.in);
            System.out.println("enter the number to find in the array");
            int num = sc.nextInt();

            int index = arr.length+1 ;

            for(int i = 0; i < arr.length ;i++){
                if(arr[i] == num){
                    index = i;
                } 
            }

            if (index != arr.length+1) {
                System.out.println("the number is present at the index: " + index);
            } else {
                System.out.print("the number is not present!!");
            }
        }






        //find the largest element in array
        public static void largeElement(int arr[]){
            int large = 0;
            for(int i = 0; i<arr.length; i++){
                if(arr[i] > large){
                    large = arr[i];
                }
            }
            System.out.println("the largest number in array is : "+large);
        }







        //find second largest element in array
        public static void secondLargest(int arr[]) {
            HashMap <Integer,Integer> mp = new HashMap<>();

            int largeIndex = 0;
            for(int i=0; i<arr.length; i++){
                if(arr[i]>arr[largeIndex]){
                    int key = i;
                    mp.put(key,arr[i]);
                    largeIndex = i;
                }
            }

            int secondIndex = largeIndex-1;
            int second = mp.get(secondIndex);
            System.out.println("second largest element and its index: "+ second);


            //without hashmap

            // int largest = arr[0];
            // int secondLargest = -1;

            // for(int i=0; i<arr.length; i++){
            //     if(arr[i]>largest){
            //         secondLargest = largest;
            //         largest = arr[i];
            //     }else if(arr[i] < largest && arr[i] > secondLargest){
            //         secondLargest = arr[i];
            //     }
            // }
            // System.out.println(secondLargest);
        }






        //check if array is sorted
        public static void sorted(int arr[]){
            for(int i=1;i<arr.length;i++){
                if(arr[i] >= arr[i-1]){

                }
                else{
                    System.out.println("false");
                }
            }
        }

        
        



        //[1,1,1,2,2,3,4]
        //remove duplicates from a sorted array but dont make new array and return the no. of unique element(two-pointer)
        public static void removeDup(int arr[]){
            int pointeri = 0;
            for(int j=1; j<arr.length; j++){
                if(arr[pointeri] != arr[j]){
                    arr[pointeri+1] = arr[j];
                    pointeri++;
                }
                
            }
            System.out.println("no. of unique number are "+(pointeri+1));
        }




        //[0,1,3,2,2,0,4,2] num=2
        //[0,1,3,0,4,2,2,2] num=2
        //[2,5,2] = [5,2,2]
        //remove all occurence of num and then return the no. of element not equal to num(two-pointer)
        public static void removeNum(int arr[], int num){
            //the pointer will always point to first equal num(j=num) so take only pointer not +1 bec  pointer itself is +1 in real count 
            int pointeri = 0;
            for(int j = 0; j < arr.length; j++){
                if(arr[j] != num){
                    arr[pointeri] = arr[j];
                    arr[j] = num;
                    pointeri++;
                }     
            }
            System.out.println(pointeri);          
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

       

        // findANum(arr);

        // largeElement(arr);

        // secondLargest(arr);

        // removeDup(arr);

        removeNum(arr, 2);




        
    }
}
