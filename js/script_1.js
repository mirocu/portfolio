

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
    var correct = Math.floor ( Math.random () * 10  ) ;
    document.getElementById("tmp").value = correct;
    document.getElementById("hatena").value = "?";
    document.getElementById("display").value="";
    document.getElementById("msg").textContent="　";
    document.getElementById("counter").textContent = 3;
}

function get_calc(btn){
    var ans = document.getElementById("tmp").value;
    var ms=" ";
    var cn = $id("counter")
    var cp = parseFloat(cn.textContent)

        if((btn.value >-1) && (cp > 0) && (ans > -1)){
            document.getElementById("display").value = btn.value;
            ms=" .";
        }

        if( ans > -1 ){
            
            if(cp <= 0){
                
                    ms	=　" 残念! 答えは" + ans + "でした";
                    document.getElementById("hatena").value = ans;
                    document.getElementById("tmp").value = -1;
                    document.getElementById("msg").textContent =cp;
            }

            if(btn.value == "H" ){
                ms=$H(ans);
            }

            if(btn.value == "E"){
                if( document.getElementById("display").value == ans){

                    document.getElementById("hatena").value = ans
                    document.getElementById("tmp").value = "";
                    document.getElementById("tmp").value = -1;
                    ms	="正解!!"; 
                
                }else{
                        cn.textContent = cp -1;
                        ms	= " 残念! " + $H(ans);
                }
            }

        }else{
            ms = "開始ボタンを！";
        }

        document.getElementById("msg").textContent =ms;
    
    
    
}



function $H(ans){
    var ms;
    if(ans > 5){
        ms = "5より大きいよ";
    }else{
        ms = "6より小さいよ";
    };
    return ms;
}

function showBalloon(msg){
    var wObjballoon;
        wObjballoon	= document.getElementById("makeImg");
    if (wObjballoon.className == "balloon1"){
    wObjballoon.className = "balloon";
    }else{
    wObjballoon.className = "balloon1";
    }
}

