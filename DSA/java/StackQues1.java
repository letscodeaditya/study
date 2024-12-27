import java.util.Stack;

class StackUsingArray {
    int size = 1000;
    int arr[] = new int[size];
    int  top = -1;

    void push(int val){
        top++;
        arr[top] = val;
    }

    int pop(){
        if(top == -1){
            System.out.println("empty stack");
        }
        int x = arr[top];
        top--;
        return x;
    }

    int top(){
        if(top == -1){
            System.out.println("empty stack");
        }
        return arr[top];
    }

    int size(){
        return top+1;
    }
}


public class StackQues1 {
    
    public static void main(String[] args) {
        Stack<Integer> name = new Stack<>();
    }
}
