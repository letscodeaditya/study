import java.util.*;

public class First{

      //to print the sum of n number
      public static void printSumOfNumber(int num){

        if(num < 0){
            System.out.println("invalid number");
            return;
        }

        int sum = 0;
        for(int i=0; i<num; i++){
            sum = sum + i;
        }
        System.out.println(sum);
      }



      
      //to print factorial of a number 3 = 3*2*1
      public static void printFactorial(int num){

        if(num < 0){
            System.out.println("invalid number");
            return;
        }

        int fact = 1;
        for(int i = 1; i <= num; i++){
            fact = fact * i;
        }

        System.out.println(fact);
      }




    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);
      
        int n = sc.nextInt();

        printFactorial(n);
        
    }
}