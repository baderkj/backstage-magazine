 
	var scrollableElement = document.body; //document.getElementById('scrollableElement');
let img =document.querySelectorAll('#img');
scrollableElement.addEventListener('wheel', checkScrollDirection);
var i=0;
let issues =document.querySelectorAll('#issue');
  issue[0].style.fontWeight='900';

let color=['#fff','#e30512','#e62e00','#ffbe00','#00c1b5','#e62e00'];
function checkScrollDirection(event) {

  if (checkScrollDirectionIsUp(event)) {
  			if(i>=1){
  		img[i-1].scrollIntoView({ block: 'end', behavior: 'smooth' });
  		issue[i].style.fontWeight='500';
  		issue[i-1].style.fontWeight='900';
  		i=i-1;
  			scrollableElement.style.background=color[i];

  			
  	}
   	
   	  } else {
   	  	if(i<img.length)
   	  		{
    	img[i+1].scrollIntoView({ block: 'start', behavior: 'smooth' });
    	issue[i].style.fontWeight='500';
  		issue[i+1].style.fontWeight='900';
    	i=i+1;
    	scrollableElement.style.background=color[i];
    }
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}


	// onscroll=function a() {
	// 	if ()
	// 	image2.scrollIntoView(true);
	// }




