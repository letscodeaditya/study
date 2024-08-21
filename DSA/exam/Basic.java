package exam;

public class Basic {


    //nth series of even
    public static void seriesEven(int numb){
        for(int i=0; i<=numb; i++){
            if(i%2==0){
                System.out.println(i);
            }
        }
    }
    

    //reverse a number
    public static int reverse(int numb){
        int n = numb;
        int reverse = 0;
        while(n != 0){
            int digit = n % 10;
            reverse = reverse * 10 + digit;
            n = n/10;
        }
        return reverse;
    }


    //palindrome
    public static void palindrome(int numb){
        int n = numb;
        int reverse = 0;
        while (n!=0) {
            int digit = n % 10;
            reverse = reverse * 10 + digit;
            n = n/10;
        }

        if(reverse==numb){
            System.out.println(numb +" is a palindrome");
        }else{
            System.out.println("it is not a palindrome");
        }

    }



    //armstrong number
    public static void armStrongNumber(int numb){
        int n = numb;
        int sum = 0;
        while (n!=0) {
            int digit = n % 10;
            sum += digit*digit*digit;
            n = n/10;
        }

        if(sum == numb){
            System.out.println(numb +" is a armstrong number");
        }else{
            System.out.println("not a armstrong number");
        }

    }

    //print factors of a numb

    



    //to print all divisors of a numb

    public static void divisors(int numb){

        //36 = 2,3,4,6,9,12,18,36
        //so we wil get all the divisor within 36 but as u can se we dont have to go to all 36 number rather just go root36 = 6
        //1*36=36 => 36=36/1 n/i 
        //2*18=36 => 18=36/2 n/i
        //...
        //6*6=36 => 6=36/6 n/i here there is a problem 6 is coming two times one when dividing by n and also the remainder
        //we are taking i which is the correct divisor and the remainder of n/i but in above both are same thats why the second if block is there

        for(int i=1; i*i<=numb; i++){
            if(numb%i==0){
                System.out.println(i);
                if(numb/i != i){
                    System.out.println(numb/i);
                }
            }
        }
    }


    //find prime in nth series
    public static void prime(int numb){
        int count = 0;
        for(int i = 1; i*i<=numb; i++){
            if(numb%i==0){
                System.out.println(i);
                count++;
                if(numb/i!=i){
                    System.out.println(numb/i);
                    count++;
                }
            }
        }
        System.out.println("total prime number are: "+count);
    }










    public static void main(String[] args) {

        // System.out.println(reverse(598));

        // seriesEven(10);

        // palindrome(15510);

        // armStrongNumber(35);

        // divisors(36);

        prime(10);




    }
}
