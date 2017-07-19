var thmubs = document.querySelectorALL('.thumb');
for(idx in thmubs){
    thmubs[idx].onclick = function(){
          document.getElementById("bigimg").src = 'img/' + this.dataset.image+ '.jpg';
     }
}
