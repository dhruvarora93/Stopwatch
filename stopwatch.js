var running = false;
var current_value = parseFloat(document.getElementById('time').innerHTML);
var current = current_value;
var interval;
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 83) {
        run_time();
    }
    else if(event.keyCode == 84) {
        record();
    }
    else if(event.keyCode == 82){
        reset();
    }
});
function run_time(){

  if (running == false){

      running = true;
      interval = setInterval(function(){
          current_value += 0.01;
          current = current_value.toFixed(2);
          document.getElementById('time').innerHTML = current;
        },10);

   }
   else{
      running = false;
      clearInterval(interval);
   }
}
function reset(){
    var table = document.getElementById('past_time');
    while(table.rows.length > 0) {
          table.deleteRow(0);
    }
    current_value = 0;
    current = 0;
    running = false;
    clearInterval(interval);
    document.getElementById('time').innerHTML = current;

}
function record(){

  var table = document.getElementById('past_time');
  if (current != 0){
      var row = table.insertRow();
      var cell = row.insertCell();
      cell.innerHTML = current;
  }

}
