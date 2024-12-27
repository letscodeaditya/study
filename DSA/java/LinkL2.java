import java.util.HashMap;

import org.w3c.dom.Node;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; this.next = null; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
 
public class LinkL2 {

    public ListNode middleNodeBrute(ListNode head){

    }



    //The Tortoise and Hare algorithm leverages two pointers, 'slow' and 'fast', initiated at the beginning of the linked list. The 'slow' pointer advances one node at a time, while the 'fast' pointer moves two nodes at a time.
    //if fast has speed to cover a n distance
    //then slow has half fast speed then it will cover n/2 distance

    public ListNode middleNodeOptimal(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }














    //Reverse Linked List
    public ListNode reverseListBrute(ListNode head){

    }


    public ListNode reverseListOptimal(ListNode head) {
        ListNode temp = head;
        ListNode prev = null;
        while(temp != null){
            ListNode front = temp.next;
            temp.next = prev;
            prev = temp;
            temp = front;
        }
        return prev;
    }















    // detect Linked List Cycle

    public boolean hasCycleBrute(ListNode head) {
        HashMap<ListNode , Integer> mp = new HashMap<>();
        ListNode temp = head;

        while(temp != null){
            if(mp.containsKey(temp)){
                return true;
            }
            mp.put(temp,1);
            temp = temp.next;
        }

        return false;
    }

    //The Tortoise and Hare algorithm 
    public boolean hasCycleOptimal(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            
           slow = slow.next;
           fast = fast.next.next;
           if(slow == fast){
            return true;
           }
          
        }

        return false;
    }











    //find length of loop

    public static int lengthOfLoopBrute(ListNode head) {
        HashMap <ListNode,Integer> mp = new HashMap<>();
        int time = 1;
        ListNode temp = head;
        while(temp != null){
            if(mp.containsKey(temp)){
                int loopLength = time - mp.get(temp);
                return loopLength;
            }
            mp.put(temp, time);
            temp = temp.next;
            time++;
        }
        return 0;
    }

    public static int findLength(ListNode fast, ListNode low){
        int count = 1;
        low = low.next;
        while(fast != low){
            count++;
            low = low.next;
        }
        return count;
    }
    public static int lengthOfLoopOptimal(ListNode head) {
        ListNode low = head;
        ListNode fast = head;
        while(fast != null){
          low = low.next;
          fast = fast.next.next;  
          if(low == fast){
              return findLength(fast,low);
          }
        }
        return 0;
    }













    //find first node of cycle
    
    public ListNode detectCycle(ListNode head) {
        ListNode low = head;
        ListNode fast = head;
        while(fast != null && fast.next != null){
            low = low.next;
            fast = fast.next.next;
            if(low == fast){
                low = head;
                while(low != fast){
                    low = low.next;
                    fast = fast.next;
                }
                return low;
            }
        }
       
        return null;
    }










    //Odd Even Linked List
    public ListNode oddEvenListOptimal(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        ListNode odd = head;
        ListNode even = head.next;
        ListNode evenHead = even;

        while(even != null && even.next != null){
            odd.next = odd.next.next;
            even.next = even.next.next;

            odd = odd.next;
            even = even.next;
        }

        odd.next = evenHead;
        return head;
    }








    //Remove Nth Node From End of List

    public ListNode removeNthFromEndBrute(ListNode head, int n) {
        if (head == null) {
            return null;
        }
        if(head.next == null){
            head = null;
            return head;
        }
        ListNode temp = head;
        ListNode prev = null;
        int size = 1;
        while(temp.next != null){
            prev = temp;
            temp = temp.next;
            size++;
        }
        //if n points to first node to be deleted
        if(size == n){
            ListNode newhead = head.next;
            head = null;
            return newhead;
        }
        //if n points to last node to be deleted
        if(n == 1){
            prev.next = null;
            return head;
        }        
        int delete = size - n + 1;
        temp = head;
        prev = null;
        int current = 1;
        while(temp.next != null){
            if(current == delete){
                prev.next = temp.next;
                break;
            }
            prev = temp;
            temp = temp.next;
            current++;
        }
        return head;
    }


    public ListNode removeNthFromEndOptimal(ListNode head, int n) {
        ListNode fast = head;
        for(int i = 0; i < n; i++){
            fast = fast.next;
        }
        //when the node to be deleted is the first
        if(fast == null){
            return head.next;
        }
        //slow will always point one node before the to be deleted node 
        ListNode slow = head;
        while(fast.next != null){
            fast = fast.next;
            slow = slow.next;
        }
       
        slow.next = slow.next.next;
        return head;
    }




    




    //Delete the Middle Node of a Linked List

    public ListNode deleteMiddle(ListNode head) {
        if(head.next == null){
            head = null;
            return head;
        }
        ListNode fast = head;
        ListNode slow = head;
        ListNode prev = null;
        while(fast != null && fast.next != null){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
        return head;
    }

    public static void main(String[] args) {
        
    }
}
