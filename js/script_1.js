

function $id(id){
    return document.getElementById(id);
}

function cal(){
    var n1=$id("id1");
    var n2=$id("id2");
    var total;

    total = parseFloat(n1.value) + parseFloat(n2.value);
    
    if(total>0){
        document.getElementById("id3").value = total;
    }
    //document.write(total);
    
    //id3.innerHTML=total;
}

function clear_1(){    

    var arr = [$id("id1"),$id("id2")]
    
    for (const elem of arr){
        elem.value = "";
    }

    document.getElementById("id3").value = "答え";
}


//　練習　２　

function sai(){
    //正解の数を作成
    var correct = Math.floor ( Math.random () * 10 + 1 ) ;
    document.getElementById("tmp").value = correct;
    document.getElementById("hatena").value = "?";
}

function get_calc(btn){
    var ans = document.getElementById("tmp").value;

    if(btn.value == "E"){
        if( document.getElementById("display").value == ans){
            document.getElementById("hatena").value = ans
            alert("正解！　 " + ans + "でした");

        }else{
            alert("残念　Hで　ヒントを見てね");
        }

    }else if(btn.value == "H" ){
        if(ans>0){
            if(ans > 5){
                alert("5より大きいよ");
            }else{
                alert("6より小さいよ");
            }
        }else{
            alert("開始ボタンを押してね");
        }

    }else{
        document.getElementById("display").value = btn.value;
    }
}


function showBalloon(){
    var wObjballoon;
    wObjballoon	= document.getElementById("makeImg");
    if (wObjballoon.className == "balloon1"){
    wObjballoon.className = "balloon";
    }else{
    wObjballoon.className = "balloon1";
    }
}

