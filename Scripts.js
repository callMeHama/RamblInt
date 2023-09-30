let field = document.getElementsByClassName('nbtxt')[0];
field.addEventListener("input",()=>{
    if (window.location.href.includes('Home.html')){
        let i = 0;
        let txtList= document.getElementsByClassName('htxt');
        let imgList= document.getElementsByClassName('himg');
        let pList= document.getElementsByClassName('hcred');
        while (i < txtList.length){
            if (txtList[i].innerHTML.toLowerCase().includes(field.value.toLowerCase()) || pList[i].innerHTML.toLowerCase().includes(field.value.toLowerCase())){
                txtList[i].style.display = "block";
                imgList[i].style.display = "block";
                pList[i].style.display = "block";
            }
            else{
                txtList[i].style.display = "none";
                imgList[i].style.display = "none";
                pList[i].style.display = "none";
            }
            i+=1;
        }
    }
    else if (window.location.href.includes('Current_Programme.html')){
        let trList = document.getElementsByTagName('tr');
        let i = 0;
        while (i < trList.length){
            if (trList[i].innerHTML.toLowerCase().includes(field.value.toLowerCase()) && field.value != '/n'){
                trList[i].style.display = "table-row";
            }
            else{
                if(i ==0){}else{trList[i].style.display = "none";} 
            }
            i+=1;
        }
    }
    else if (window.location.href.includes('Blog.html')){
        let blockList = document.getElementsByClassName('block');
        let i = 0;
        while (i < blockList.length){
            if (blockList[i].innerHTML.toLowerCase().includes(field.value.toLowerCase()) && field.value != '/n'){
                blockList[i].style.display = "block";
            }
            else{
                blockList[i].style.display = "none";
            }
            i+=1;
        }
    }
});

