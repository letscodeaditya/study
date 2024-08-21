public class Exam {

    public static void printFeb(int a, int b, int n) {
        if(n==0){
            return;
        }
        int c = a+b;
        System.out.println(c);
        printFeb(b, c, n-1);

    }

    public static void towerOfHanoi(int n,String src, String help, String dest) {
        if(n==1){
            System.out.println("transfer disk "+ n+ " from "+ src+ " to "+dest);
            return;
        }

        towerOfHanoi(n-1, src, dest, help);
        System.out.println("transfer disk "+ n+ " from "+src+" to "+dest);
        towerOfHanoi(n-1, help, src, dest);

    }


    public static String reverseUsingRecursion(String str) {
        if (str.isEmpty()) {
            return str;
        }
        return reverseUsingRecursion(str.substring(1)) + str.charAt(0);
    }



    public static void main(String[] args) {
        int a =0, b=1;
        int n = 7;
        System.out.println("fibonacci series");
        System.out.println(a);
        System.out.println(b);

        // printFeb(a,b,n);
        towerOfHanoi(n, "S", "H", "D");
    }
}
