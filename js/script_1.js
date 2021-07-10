

function $id(id){
    return document.getElementById(id);
}

function cal(){
    var n1=$id("id1");
    var n2=$id("id2");
    var total;

    total = parseFloat(n1.value) + parseFloat(n2.value);
    if(total>0){
        document.getElementById("id3").textContent = total;
    }
    //document.write(total);
    
    //id3.innerHTML=total;
}

function clear_1(){    
    var n1=$id("id1");
    var n2=$id("id2");

    var arr = [n1,n2]
    
    for (const elem of arr){
        elem.value = "";
    }
    document.getElementById("id3").textContent = "";
}




