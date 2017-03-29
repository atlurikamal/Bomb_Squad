
 
// $(document).ready(function(){tim();});

function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
// To disable f5
    /* jQuery < 1.7 */
$(document).bind("keydown", disableF5);
/* OR jQuery >= 1.7 */
$(document).on("keydown", disableF5);

 document.onmousedown=disableclick;
 function disableclick(event)
 {
  if(event.button==2)
   return false;    
 }

var score=0;
var myVar;
var myVar2;
var i=1;
var j=2;
 var q=new Array(40);
var flag=0;

 q[2] =$(" <li class='q2' data-ans='c'><p>2.Which of the following shows the correct syntax for an if statement?<br><br>a. if expression<br>b. if { expression<br>c. if ( expression )<br>d. expression if</li></p> ");

 q[3] =$("<li class='q3' data-ans='d'><p>3.Which is not a loop structure in C?<br><br>a. for<br>b. do while<br>c. while<br>d. repeat until</li></p>"); 

q[4]=$("<li class='q4' data-ans='b'><p>4. Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?<br><br>a. 7<br>b. 10<br>c. 12<br>d. 13<p></li> ");

q[5]=$("<li class='q5' data-ans='e'><p>5. Look carefully for the pattern, and then choose which pair of numbers comes next.<br><br>6 10 14 18 22 26 30<br><br>a. 36 40<br>b. 33 37<br>c. 38 42<br>d. 34 36<br>e. 34 38</p></li>");

q[6]=$("<li class='q6' data-ans='a'><p>6. Apartments in the Riverdale Manor cost less than apartments in The Gaslight Commons.<br>Apartments in the Livingston Gate cost more than apartments in the The Gaslight Commons.<br>Of the three apartment buildings, the Livingston Gate costs the most.<br>If the first two statements are true, the third statement is<br><br>a. true<br>b. false<br>c. uncertain</p></li> ");

q[7]=$("<li class='q7' data-ans='d'><p>7. If one-third of one-fourth of a number is 15, then three-tenth of that number is:<br><br>a. 34<br>b. 36<br>c. 45<br>d. 54</p></li> ");

q[8]=$("<li class='q8' data-ans='c'><p>8. Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:<br><br>a. 9<br>b. 11<br>c. 13<br>d. 15</p></li> ");

q[9]=$("<li class='q9' data-ans='b'><p>9. The sum of two number is 25 and their difference is 13. Find their product.<br><br>a. 104<br>b. 114<br>c. 315<br>d. 325</p></li> ");

q[10]=$("<li class='q10'  data-ans='c'><p>10. Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?  <br><br>a. Burton<br>b. Zeller<br>c. Jenkins<br>d. Calvin</p></li>");

q[11]=$("<li class='q11' data-ans='b'>11. Which of the following is a two-dimensional array?<br><br>a. array anarray[20][20];<br>b. int anarray[20][20];<br>c. int array[20, 20];<br>d. char array[20];</p></li> ");

q[12]=$("<li class='q12' data-ans='d'>12. Which of the following functions compares two strings?<br><br>a. compare();<br>b. stringcompare();<br>c. cmp();<br>d. strcmp();</p></li>");

q[13]=$('<li class="q13" data-ans="b"><p>13. what will be the output of the following program.<br>int main(){<br> int a=10;<br>a*2;<br>printf("%d %d",a,a*5);<br>getch();<br>return 0;<br>}<br><br>a. 20 100<br>b. 10 50<br>c. Compilation Error <br>d. 10 100</p></li>');

q[14]=$("<li class='q14' data-ans='b'><p>14. Which of the following is the proper keyword or function to allocate memory in C?<br><br>a. new<br>b. malloc<br>c. create<br>d. value</p></li> ");

q[15]=$('<li class="q15" data-ans="d"><p>15.<br> #include  &lt stdio.h &gt <br>int main()    {<br>int *ptr, a = 10;<br>ptr = &a;<br> *ptr += 1;<br>printf("%d,%d/n", *ptr, a);}<br><br>a. 10,10<br>b 10,11<br>c. 11,10<br>d. 11,11</p></li>');

q[16]=$('<li class="q16" data-ans="d">16. what will be the output of the following program.<br>int main(){<br>int i=1;<br>i=++i  + i++ +  ++i;<br>printf(" %d ",i);<br>getch();<br>return 0;<br>}<br>a. 9<br>b. 7<br>c. 10<br>d. 8</p></li>');

q[17]=$('<li class="q17" data-ans="b"><p>17. Which is an indirection operator among the following?<br><br>a. &<br>b. *<br>c. -><br>d. .</p></li> ');

q[18]=$('<li class="q18" data-ans="c">18.The output is..<br> void main() {<br>int x=2;<br>switch(x){<br>case 1:printf("One");<br>case 2:printf("Two");<br>case 3:<br>printf("Three");}}<br><br>a. Two<br>b. One Two Three<br>c. Two Three<br>d. One</p></li>');

q[19]=$('<li class="q19" data-ans="a"><p>19. what will be the output of the following program.<br><br>int main(){<br>int a,b;<br>a=200*200/200;<br>b=200/200*200;<br>printf("%d %d",a,b);<br>getch();<br>return 0;}<br>a. 200   200<br>b. -127  200<br>c. -128 200<br>d. -126    2000</p></li> ');

q[20]=$('<li class="q20"  data-ans="d"><p>20. Switch statement accepts.<br><br>a. int<br>b. char<br>c. long<br>d. All of the mentioned</p></li>');

q[25]=$('<li class="q25" data-ans="a"><p>25.  int x = 0;<br>void main() {<br>int *ptr = &x;<br>printf("%p\n", ptr);<br>x++;<br>printf("%p\n ", ptr);}<br>a. Same address<br>b. Different address<br>c. Compile time error<br>d. Varies</p></li>');

q[24]=$('<li class="q24" data-ans="d"><p>24. What will be the output of the following program.<br><br>int main(){<br>int a;<br>a= 100;<br>printf(“%d  %d”,++a,a++);<br>getch();<br>return 0;}<br>a. 101  101<br>b. 101  102<br>c. 100    102<br>d. 102   100</p></li>');

q[23]=$('<li class="q23" data-ans="a"><p>23. #define x 5+2<br>void main(){<br>int i;<br>li=x*x*x;<br>printf("%d",i);}<br><br>a. 27<br>b. 343<br>c. 64<br>d. 125</p></li>');

q[21]=$('<li class="q21"  data-ans="c"><p> 21. <br>main(){<br>int n = 0, m = 0;<br>if (n > 0)<br>if (m > 0)<br>printf("True");<br>else<br>printf("False");<br>}<br><br>a. True<br>b. False<br>c. No Output will be printed<br>d. Run Time Error</p></li>');

q[22]=$('<li class="q22" data-ans="a"><p>22.<br>void main(){<br> if(!printf("Mukesh Ambani")) <br>if(printf(" Lakashmi Mittal")); }<br> Choose all that apply:<br><br> a. Mukesh Ambani<br>b. Lakashmi Mittal<br>c. It will print nothing.<br>d.  Mukesh Ambani Lakashmi Mittal<br>e. Compilation error: if statement without body</p></li>');

var lives=5;


function myfun() 
{
 var x=document.getElementById("ans").value;
 var res=$(".q"+i).data("ans");

 if(x==res)
 {
    score++;
    clearTimeout(myVar2);
    clearInterval(myVar);
    $("html").css({"background":"url(./disabled.png) no-repeat center center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover"});
    $(".res").text("BOMB DISABLED!!!");
    $("#ans").val("");
    $("#scr").text(score);
   if(i==25)
  {
     flag=1;
     $(".bod").hide();
     $(".con").show();
   }
   else
    core();  
 }

else
 {
      tlr();      
      $("#ans").val("");
 }

}



function core()
{ 
   $(".bod").hide();
   $(".con").show();
   $(".q"+i).before(q[j]);
   $(".q"+i).remove();
   i++;
   j++;

}



function cont()
{ 
   $(".bod").show();
   $(".con").hide(); 
   $("html").css({"background":"url(./bomb.jpg) no-repeat left center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover"});
   $("#tim").text("90");
    if(flag==1)
      tlo();    
  else
 {
   myVar=setInterval(function(){change()},1000);
   myVar2=setTimeout(function(){tlr()},90000); 
  }
}



function tlr(){
//      if(i==4)
//     {
//        if(lives==0)
//        tlo();
 //       else
 //       {
 //         lives--;
  //        $("#liv").text(lives);
 //         tlo();
 //        }
 //    }
//      else
//     {
     clearInterval(myVar);
     clearTimeout(myVar2);
     $("#ans").val("");
     $("#tim").text("90");
     $("html").css({"background":"url(./exploded.jpg) no-repeat left center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover"});
     $(".res").text("BOMB EXPLODED!!!");
     lives--;
     $("#liv").text(lives);
     if(i==25||lives==0)
  {
   flag=1;
   $(".bod").hide();
   $(".con").show();
  }
   else
     core();
//    if(lives==0)
 //   {
 //      tlo();
//     }
// }

}

function tlo(){   
      clearInterval(myVar);
      clearTimeout(myVar2);
      var bon=lives*10;
      var totscore;
      totscore=score+bon;
      $("#totscore").text(totscore);
      $("#bon").text(bon); 
      $("#bonus").show();
      $(".bod").hide();
      $(".con").hide(); 
      $("html").css({"background":"url(./gameover.jpg) no-repeat left center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover"});
}



function change()
{
 var count=+$("#tim").text();
 count--;
 $("#tim").text(count);
}


function sg(){
   $("#st").hide();
   $(".sec").show();   
   myVar=setInterval(function(){change()},1000);
   myVar2=setTimeout(function(){tlr()},90000);
   $("html").css({"background":"url(./bomb.jpg) no-repeat left center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover"});
}

function myone(){
  var pass=document.getElementById("pass").value;
  if(pass=="ab123")
 {
   $("#pass").hide();
   $("#st1").hide();
   $("#st").show(); 
 }
  else 
 {
    alert("Password Incorrect");
  }
}
