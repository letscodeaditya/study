import java.util.Scanner;

public class Sixth {

    // bubble sort  t.c=n^2
    // 7 8 2 3 
    //last wala sorted hote jayega
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length-1 ; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        printArr(arr);
    }


    //selection sort  t.c=n^2
    //pahle wala se sab ko compare kar raha toh fir first se sorted hote jayega
    public static void selectionSort(int []arr) {
        for(int i=0; i < arr.length-1; i++){
            int smallest = i;
            for(int j = i+1; j<arr.length; j++){
                if(arr[smallest]>arr[j]){
                    smallest = j;
                }
            }
            //swap
            int temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] =  temp;
        }
        printArr(arr);
    }


    public static void insertionSort(int []arr) {
        for (int i = 1; i < arr.length; i++){
            int current = arr[i];
            int sorted = i-1;
            while(sorted >=0 && current < arr[sorted]){
               arr[sorted+1] = arr[sorted];
               sorted--;
            }
            arr[sorted+1] = current;
        }
    }






    public static void printArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("enter the size of array: ");
        int size = sc.nextInt();
        int[] arr = new int[size];

        for (int i = 0; i < arr.length; i++) {
            System.out.print("enter the " + i + " element: ");
            arr[i] = sc.nextInt();
        }

        // System.out.println(arr.length);
        // bubbleSort(arr);
        selectionSort(arr);
    }
}
