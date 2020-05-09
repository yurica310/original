(function(){
    'use strict'

    var ths = document.getElementsByTagName('th');
    var i;
    var sortOrder = 1;

    for (i = 0; i < ths.length; i++){
        ths[i].addEventListener('click', function(){
//            console.log(this.cellIndex);
    
  //  var arr = ['taguchi', 'fkoji', 'dotinstall'];
    //var rows = document.querySelectorAll('tbody > tr'); NodeList
    var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr')); 

    var col = this.cellIndex;
    var type = this.dataset.type;

    rows.sort(function(a,b){
        if (type === "number"){
            var _a = a.children[col].textContent * 1;
            var _b = b.children[col].textContent * 1;
               
        }
        if (type === "string"){
            var _a = a.children[col].textContent.toLowerCase();
            var _b = b.children[col].textContent.toLowerCase();
            
        }
        if(_a < _b){
            return -1 * sortOrder;
        }
        if(_a < _b){
            return 1 * sortOrder;
        }
        return 0;
    });
 //   console.log(rows);

        sortOrder * -1;

    var tbody = document.querySelector('tbody');

    while (tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }

    var k;
    for(k = 0; k < ths.length; k++){
       ths[k].className = '';
    }

        });
    }
})();