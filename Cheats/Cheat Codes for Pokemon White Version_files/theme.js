var count = 0;
function Anthem_PreCallBack() { 
    count++;
    setTimeout("CallBackStarted()", 500); 
}
function Anthem_PostCallBack() { CallBackFinished(); }

function CallBackStarted() {
  if (count > 0){  
    var item = document.getElementById('wait');
    if ((!window.XMLHttpRequest) && (document.documentElement)){
      item.style.position = 'absolute';
      //code to make ie6 behave
      if (document.documentElement.scrollTop){
        item.style.top = document.documentElement.scrollTop + 15;
      }
      else{ item.style.top = 15; }      
      item.style.right = 15;
    }
    item.style.display = 'block';    
  }
}
 
function CallBackFinished(){
  count--;
  if (count == 0){
    var item = document.getElementById('wait');
    if (item != null){
        item.style.display = 'none';
    }
  }
}