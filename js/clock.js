window.onload = function() {

// Clock (24 hours format)   
function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // 12 hours format 
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } 
    else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }

    // used ternary operator for -
    // adding a zero in front of the numbers whenever the number is less than 10.
    hrs  = hrs < 10    ? "0" + hrs   : hrs;
    mins = mins < 10   ? "0" + mins  : mins;
    secs = secs < 10   ? "0" + secs  : secs;

    let h = `${hrs}`;
    let m = `${mins}`;
    let s = `${secs}`;
    let p = `${period}`;
    document.getElementById("hrs").innerText = h ;
    document.getElementById("mins").innerText = m;
    document.getElementById("secs").innerText = s;
    document.getElementById("period").innerText = p;

    // Condition for displaying good-afternoon , good-morning , good-evening , good-night.
    if (hrs === 12 || hrs < 5  && period == "AM"){
      var msg = document.getElementById("msg");
      msg.innerHTML = `<span class="msg_text">GOOD NIGHT !</span>`;
      msg.style.backgroundColor = "rgb(143, 93, 174)";
      msg.style.color = "white";
    } 
    else if (hrs > 5 && period == "AM"){
      var msg = document.getElementById("msg");
      msg.innerHTML = `<span class="msg_text">GOOD MORNING !</span>`;
      msg.style.backgroundColor = "rgb(143, 93, 174)";
      msg.style.color = "white";
    } 
    else if(hrs < 5 && period == "PM"){
      var msg = document.getElementById("msg");
      msg.innerHTML = `<span class="msg_text">GOOD AFTERNOON !</span>`;
      msg.style.backgroundColor = "rgb(143, 93, 174)";
      msg.style.color = "white";
    } 
    else if (hrs >= 5 && hrs <= 9 && period == "PM"){
      var msg = document.getElementById("msg");
      msg.innerHTML = `<span class="msg_text">GOOD EVENING !</span>`;
      msg.style.backgroundColor = "rgb(143, 93, 174)";
      msg.style.color = "white";
    } 
    else if (hrs >= 10 && period == "PM"){
      var msg = document.getElementById("msg");
      msg.innerHTML = `<span class="msg_text">GOOD NIGHT !</span>`;
      msg.style.backgroundColor = "rgb(143, 93, 174)";
      msg.style.color = "white";
    }

  }

  // Created 3 divs which will display the selected values of wakeup,lunch and nap Time. 
  var div1 = document.createElement('div');
  div1.setAttribute("id", "div1");
  var div2 = document.createElement('div');
  div2.setAttribute("id", "div2");
  var div3 = document.createElement('div');
  div3.setAttribute("id", "div3");

  // Default image 
  var display = document.getElementById("displaySection");
  display.style.backgroundImage = "url(./images/time.png)";
  display.style.backgroundSize = "cover";

  // function to display selected values of wakeup, lunch and nap time in dynamic div.
  function add(){

    let content = document.getElementById("b2_display");
    content.style.backgroundColor = "rgb(143, 93, 174)";
    content.style.color = "white";
    content.style.paddingLeft = "20px";
    content.style.borderRadius = "10px";
   
    let wake_text = document.getElementById("wakeup_opt");
    let lunch_text = document.getElementById("lunch_opt");
    let nap_text = document.getElementById("nap_opt");
    let wake_option = wake_text.options[wake_text.selectedIndex].text;
    let lunch_option = lunch_text.options[lunch_text.selectedIndex].text;
    let nap_option = nap_text.options[nap_text.selectedIndex].text;
    content.append(div1);
    content.append(div2);
    content.append(div3);  

    if(wake_text.value != "default"){
      div1.innerHTML = `<span class="up"> <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" height="25px" width="25px"> </span> &nbsp; WAKE UP TIME  &nbsp; <span class="arrow"> <img src="https://cdn-icons-png.flaticon.com/512/545/545783.png" height="30px" width="30px"></span> &nbsp; ${wake_option}`;     
    }else if(wake_text.value == "default"){
      content.removeChild(div1);
    }

    if(lunch_text.value != "default"){
    div2.innerHTML = `<span class="up"> <img src="images/spoon-and-fork.png" height="25px" width="25px"></span> &nbsp; LUNCH TIME   &nbsp;  <span class="arrow"><img src="https://cdn-icons-png.flaticon.com/512/545/545783.png" height="30px" width="30px"></span> &nbsp; ${lunch_option}`;   
    } 
    else if(lunch_text.value == "default"){
      content.removeChild(div2);
    }
   
    if(nap_text.value != "default"){
    div3.innerHTML = ` <span class="up"><img src="images/sleep.png" height="25px" width="25px"></span>  &nbsp; NAP TIME  &nbsp; <span class="arrow"> <img src="https://cdn-icons-png.flaticon.com/512/545/545783.png" height="30px" width="30px"></span> &nbsp; ${nap_option}`;
    }
    else if(nap_text.value == "default"){
      content.removeChild(div3);
    }
    
    // function to hide dynamic div.
    function hide(){
       if(div1.innerHTML=="" && div2.innerHTML=="" && div3.innerHTML==""){
      content.style.visibility = "hidden";
      }else{
      content.style.visibility = "visible";
      }
    }

    // function to hide dynamic div, if wakeup,lunch and nap values is default.
    function defaultValue(){
      if(wake_text.value == "default" && lunch_text.value == "default" && nap_text.value == "default"){
        content.style.visibility = "hidden";
      }
    }
    hide();
    defaultValue();

    let date1 = new Date();
    let hour = date1.getHours();
    let mini = date1.getMinutes();

    // function to revert image.
    function revert(){
      if(wake_text.value != hour || lunch_text.value != hour || nap_text.value != hour){
        display.style.backgroundImage = "url(./images/time.png)";
        display.style.backgroundSize = "cover";
      } else if(wake_text.value != hour && lunch_text.value != hour && nap_text.value != hour){
        display.style.backgroundImage = "url(./images/time.png)";
        display.style.backgroundSize = "cover";
      }
     }

    // function to change image by selected values. 
    function set_img_by_time(){
      let w = document.getElementById("wakeup_opt");
      let l = document.getElementById("lunch_opt");
      let n = document.getElementById("nap_opt");
      let wakeup = w.options[w.selectedIndex].value;
      let lunch = l.options[l.selectedIndex].value;
      let nap = n.options[n.selectedIndex].value;
        let date1 = new Date();
        let hour = date1.getHours();
      if(wakeup == hour){
        display.style.backgroundImage = "url(./images/WAKEUP.png)";
        display.style.backgroundSize = "cover";
      }
      else if(lunch == hour){
        display.style.backgroundImage = "url(./images/lunch.png)";
        display.style.backgroundSize = "cover";
      }
      else if(nap == hour){
        display.style.backgroundImage = "url(./images/NIGHT.png)";
        display.style.backgroundSize = "cover";
      }
     
     }
     setInterval(set_img_by_time, 1000);
     revert();
    
  } 

  // invoking clock function.
  setInterval(clock, 1000);
  clock(); 

    // Invoking add() function when user click on set time button.
    // added addEventListener to make this function work.
    const setButton = document.querySelector('#btn_1');
    setButton.addEventListener('click', () => {
        add();
    })

    // This function is to reset everything except clock function. 
    const resetButton = document.querySelector('#btn_2');
    resetButton.addEventListener('click', () => {
      window.location.reload();
    })

}

