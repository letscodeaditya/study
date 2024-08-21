public class Fifth {

    //reverse a string

    public static void reverseString(String name){

        StringBuilder nam = new StringBuilder(name);

        for(int i = 0; i<nam.length()/2; i++){
            int front = i;
            int back = nam.length() - 1 - i;
   
            char frontchar = nam.charAt(front);
            char backChar = nam.charAt(back);
   
            nam.setCharAt(front, backChar);
            nam.setCharAt(back, frontchar);
        }
   
        System.out.println(nam);
   
    }

    public static String reverseUsingStringBuilder(String str) {
        StringBuilder sb = new StringBuilder(str);
        return sb.reverse().toString();
    }


    //string builder class

    public static void builderStr(){
        StringBuilder sb = new StringBuilder("aditya");

        System.out.println(sb.charAt(0));
        
        sb.insert(0, 'a');
        sb.setCharAt(0, 'A');

        //delete
        sb.delete(0, 2);

        //append
        sb.append(" ");
        sb.append("A");
        sb.append("yush");

    }



    //compare strings

    public static void compareStr(String a, String b){
        String name1 = "aditya";
        String name2 = "aditya";

        // s1 > s2 : +ve value
        // s1 == s2 : 0
        // s1 < s2 : -ve value

        if(name1.compareTo(name2)== 0){
            System.out.println("strings are equal");
        }else{
            System.out.println("strings are not equal");
        }

        if(new String("aditya") == new String("aditya")){
            System.out.println("strings are equal");
        }else{
            System.out.println("strings are not equal");
        }
    } 
    





    public static void main(String[] args) {
        String  firstName = "aditya";
        String  lastName = "ayush";

        String fullName = firstName + " "+ lastName;
        // System.out.println(fullName);
        // System.out.println(fullName.length());

        //charAt
        for(int i = 0; i<fullName.length(); i++){
            System.out.println(fullName.charAt(i));
        }

        /////substring

        String sent = "my name is aditya";
        String  name = sent.substring(0,sent.length());


    }
}
