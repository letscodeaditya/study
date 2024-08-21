import java.util.Scanner;

public class Seven {


    public static void hashing(int arr[],int hashSize, int queue) {
        Scanner sc = new Scanner(System.in);
        int hash[] = new int[hashSize];

        //precomputing
        for(int i = 0; i < arr.length; i++){
            hash[arr[i]] += 1;
        }

        while(queue-- != 0){
            int numb;
            System.out.println("enter the no. to find in array");
            numb = sc.nextInt();
            System.out.println("number is present "+hash[numb]+ " times in the array");
        }

    }
    
    public static void lowerCase(String word, int hashSize, int queue){
        Scanner sc = new Scanner(System.in);
        int hash[] = new int[hashSize];
        
        //a in ascii is 97 
        //a=0 z=25 so for b = ['b' - 'a']  it will typecast it in ascii value 
        for(int i = 0; i < word.length(); i++){
            hash[word.charAt(i)-'a'] += 1;
        }

        
        while(queue-- != 0){
            char find;
            System.out.println("enter the char to find in string");
            find = sc.next().charAt(0);
            System.out.println("char is present "+hash[find - 'a']+ " times in the string");
        }
        
    }


    public static void bothUppAndLow(String word, int queue){
        Scanner sc = new Scanner(System.in);                                                                                                        
        int hash[] = new int[256];

        for(int i=0; i<word.length(); i++){
            hash[word.charAt(i)] += 1;
        }

        while(queue-- != 0){
            char find;
            System.out.println("enter the char to find in string");
            find = sc.next().charAt(0);
            System.out.println("char is present "+hash[find]+ " times in the string");
        }

    }




    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // System.out.println("enter the size of array");
        // int size = sc.nextInt();

        // int arr[]  = new int[size];

        // for(int i = 0; i <= size-1; i++){
        //     System.out.print("enter the " + ( i + 1) + " element: ");
        //     arr[i] = sc.nextInt();
        //     System.out.println("");
        // }

        
        System.out.println("enter the no. of queue");
        int queue = sc.nextInt();
        
        // System.out.println("enter the hashsize: ");
        // int hashSize = sc.nextInt();

        // hashing(arr,hashSize,queue);

        System.out.println("enter the string");
        String word = sc.next();

        // lowerCase(word, hashSize, queue);

        bothUppAndLow(word, queue);


    }
}
