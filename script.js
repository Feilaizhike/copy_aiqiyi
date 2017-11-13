window.onload = function() {
    //var change1 = document.getElementById("change1");
    //var change2 = document.getElementById("change2");
    //var change3 = document.getElementById("change3");
    var changeBox = document.getElementsByClassName("guess_you_bottom_body");
    //console.log(changeBox);
    var changing = document.getElementById("changing_onclick");

    var changeIndex=0;
    changing.onclick = function(){
        changeIndex ++;
        if(changeIndex>2){
            changeIndex=0;
        }

        if(changeIndex ===0){
            change1.style.display = "block";
            change2.style.display = "none";
            change3.style.display = "none";
        }else if(changeIndex ===1){
            change1.style.display = "none";
            change2.style.display = "block";
            change3.style.display = "none";
        }else if(changeIndex ===2){
            change1.style.display = "none";
            change2.style.display = "none";
            change3.style.display = "block";
        }
    }

    window.addEventListener('scroll',winScroll);
    function winScroll(e){
        // 拿到e之后进行你需要的处理
        var myScrollTop = pageYOffset;
        var headerShow = document.getElementById("header_hid");
        var rightMenuShow = document.getElementById("right_menuShow");
        //console.log(myScrollTop)
        if (myScrollTop > 580) {
            headerShow.style.display = "block";

        }
        if (myScrollTop > 220) {
            rightMenuShow.style.display = "block";
        }
        else{
            headerShow.style.display = "none";
            rightMenuShow.style.display = "none";
        }
    }

    var myList = document.getElementById("focus_pic_list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");


    function animation(offSet){
        var newLeft =  parseInt(myList.style.left)+offSet;
        myList.style.left = newLeft+"px";
        if(newLeft > -380){
            myList.style.left = -760 + "px";
        }
        if(newLeft < -760){
            myList.style.left = -380 + "px";
        }
    }
    next.onclick = function(){
        animation(-380);
    }
    prev.onclick = function(){
        animation(380);
    }


    var myList1 = document.getElementById("variety_pic_list");
    var prev1 = document.getElementById("prev1");
    var next1 = document.getElementById("next1");

    function animation1(offSet){
        var newLeft1 =  parseInt(myList1.style.left)+offSet;
        myList1.style.left = newLeft1+"px";
        if(newLeft1 > -380){
            myList1.style.left = -760 + "px";
        }
        if(newLeft1 < -760){
            myList1.style.left = -380 + "px";
        }
    }
    next1.onclick = function(){
        animation1(-380);
    }
    prev1.onclick = function(){
        animation1(380);
    }

    var myList2 = document.getElementById("entertainment_pic_list");
    var prev2 = document.getElementById("prev2");
    var next2 = document.getElementById("next2");

    function animation2(offSet){
        var newLeft2 =  parseInt(myList2.style.left)+offSet;
        myList2.style.left = newLeft2+"px";
        if(newLeft2 > -380){
            myList2.style.left = -760 + "px";
        }
        if(newLeft2 < -760){
            myList2.style.left = -380 + "px";
        }
    }
    next2.onclick = function(){
        animation2(-380);
    }
    prev2.onclick = function(){
        animation2(380);
    }


    var timer ;
    var container=document.getElementById("container_focus");
    var myBigList = document.getElementById("container_focus_list");
    var imgs=myBigList.getElementsByTagName("li");
    var myButton=document.getElementById("container_focus_button_ul").getElementsByTagName("li");

   function showButtons(){
       for(var i=0;i<myButton.length;i++) {
          //console.log(myButton[i].className)
           myButton[i].onmouseover = function(){
               //var that =this;
               //console.log(that)
               var index = this.getAttribute("index");
               changeClass(index)
           }

       }
   }
    showButtons();

   function changeClass(index){
            // console.log(index)
            for(var i=0;i<myButton.length;i++ ){
                myButton[i].className ="";
            }
       myButton[index-1].className="on";
            myBigList.style.left = -1349*(index-1) + "px";
   }

    var i=0;
    function play(){
        timer = setInterval(function newAnimation(){
            i++;
            //console.log(i)
            changeClass(i);
            var myNewBigList= parseInt(myBigList.style.left);
            myBigList.style.left = myNewBigList +"px";
            //console.log(myBigList.length)
            if(myNewBigList == -12141){
                myBigList.style.left = 0 + "px";
                i=0;
            }else {
                //myBigList.style.left = myNewBigList - 1349 + "px";
                myBigList.style.left = -1349*(i-1) + "px";


            }
        }, 8000)

    }
    function stop(){
        clearInterval(timer);
    }

    container.onmouseover = stop;
    container.onmouseout = play;
   play();

}

