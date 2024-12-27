package leetcode;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class Merge {

    //Merge Sorted Array
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m-1;
        int p2 = n-1;
        int i = m+n-1;

        while(p2>=0){
            if(p1>=0 && nums1[p1] > nums2[p2]){
                nums1[i] = nums1[p1];
                i--;
                p1--;
            }else{
                nums1[i] = nums2[p2];
                i--;
                p2--;
            }
        }
    }


    //Merge Sorted Linklist
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode temp1 = list1;
        ListNode temp2 = list2;
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;

        while(temp1 != null && temp2 != null){
            if(temp1.val <= temp2.val){
                current.next = temp1;
                temp1 = temp1.next;
            }else{
                current.next = temp2;
                temp2 = temp2.next;
            }
            current = current.next;
        }

        if(temp1 != null){
            current.next = temp1;
        }else{
            current.next = temp2;
        }

        return dummy.next;
    }


    

    public static void main(String[] args) {
        
    }
}
