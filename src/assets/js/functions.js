function turnOutlet(port, state) {
    $.ajax({
       url: '/outletControl.php',
       type: 'POST',
       data: {
           'port': port,
           'state': state
       },
       success: function (msg) {
           console.log("request success");
       },
       error: function (xhr, status, error) {
            alert("fail: " + error +": " + status +": "+xhr);

       }
    });
}

function clickHandler(cb) {
    console.log(cb.value);
    if (cb.checked) {
        console.log("printer on");
        turnOutlet(cb.value, "on");
    } else {
        console.log("printer off");
        turnOutlet(cb.value, "off");
    }
}
