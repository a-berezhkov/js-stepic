function solution(n){
   while(true){
       if(n%17==0){
           console.log(n);
           break;
       }
       else{
           return solution(n+1);
       }
   }
}




