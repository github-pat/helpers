    function TodosLosCorreos(){
      var i = 0;
      $('#MODAL #second #correotodos').on('click', function(){
        if(i==0){
          $('input[class=ck]').each( function(){this.checked = true;});i++;
        }
        else{
          $('input[class=ck]').each( function() {this.checked = false;});i--;
        }
      });        
    }
