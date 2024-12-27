package leetcode;

public class Greedy {


// Explanation of the Approach:
// min and max variables:

// min: Tracks the minimum number of open parentheses ( that can be active at any point (i.e., it takes the most pessimistic view).
// max: Tracks the maximum number of open parentheses ( that can be active at any point (i.e., it takes the most optimistic view).
// How the algorithm works:

// For every character in the string:
// If it's '(', both min and max are incremented (since an open parenthesis always increases the number of open parentheses).
// If it's ')', both min and max are decremented (since a closing parenthesis will try to close an open one).
// If it's '*', min is decremented (since '*' can act as a ')'), and max is incremented (since '*' can act as a '(').
// Valid String Condition:

// If min drops below 0 at any point, it means there are too many ')' and the string is invalid from that point onward. So, set min = 0.
// If max becomes negative at any point, it means there are too many ')' and it’s impossible to balance the string, so the function should return false immediately.

    public boolean checkValidString(String s) {
        int min = 0;
        int max = 0;

        for(int i = 0; i<s.length(); i++){
            if(s.charAt(i) == '('){
                min = min+1;
                max = max+1;
            }else if(s.charAt(i) == ')'){
                min = min-1;
                max = max-1;
            }else{
                min = min-1;
                max = max+1;
            }

            if(min < 0){
                min = 0;
            }
            if(max < 0){
                return false;
            }
        }

        if(min == 0){
            return true;
        }else{
            return false;
        }
    }
    public static void main(String[] args) {
        
    }
}
