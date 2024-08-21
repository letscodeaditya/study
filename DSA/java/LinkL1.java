class node{
    int data;
    node next;

    node(int data1){
        this.data = data1;
        this.next = null;
    }

    node(int data1,node next){
        this.data = data1;
        this.next = next;
    }
}


public class LinkL1 {

    public static void convertArrToLl(int arr[]){
        node head = new node(arr[0]);
        node mover = head;
        for(int i = 1; i < arr.length;i++){
            node temp = new node(arr[i]);
            mover.next = temp;
            mover = temp;
        }
        // printLi(head);
        // deleteHead(head);
        // deleteTail(head);
        // deleteAtKth(head, 2);
        // insertInHead(head, 4);
        insetInBack(head, 9);

    }



    public static void insertInHead(node head, int value){
        node temp = new node(value,head);
        printLi(temp);
    }

    public static void insetInBack(node head,int value){
        node temp = new node(value);
        node var = head;
        while(var.next != null){
            var = var.next;
        }
        var.next = temp;
        printLi(head);
    }








    public static void deleteHead(node head){
        node temp = head;
        head = head.next;
        printLi(head);
    }


    public static void deleteTail(node head){
        node temp = head;
        while(temp.next.next != null){
            temp = temp.next;
        }
        temp.next = null;
        printLi(head);
    }


    public static node deleteAtKth(node head, int k){
        if (k == 1) {
            return head;
        }
        if(head == null){
            return head;
        }
        int count = 0;
        node temp = head;
        node prev = null;

        while(temp.next != null){
            count++;
            if(count == k){
                prev.next = prev.next.next;
                break;
            }
            prev = temp;
            temp = temp.next; 
        }
        printLi(head);
        return head;
    }


    public static void printLi(node head){
        node mover = head;
        while(mover != null){
            System.out.println(mover.data);
            mover = mover.next;
        }
    }


    public static void main(String[] args) {
        int arr[] = {1,2,5,6};
        convertArrToLl(arr);
    }
}
