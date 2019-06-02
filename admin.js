
 function getParams(){
                    var idx = document.URL.indexOf('?');
                    var params = new Array();
                    if (idx != -1) {
                        var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                        for (var i=0; i<pairs.length; i++){
                            nameVal = pairs[i].split('=');
                            params[nameVal[0]] = nameVal[1];
                        }
                    }
                    return params;
                }
                params = getParams(); 
                email = unescape(params["email"]);
                password = unescape(params["password"]);
               
                var a=0;
                var b=5;
                $(document).ready(function()
                {
                    $.getJSON("https://technocracy-task-2.herokuapp.com/people",function(data)
                    {
                        
                        $.each(data,function(key,value)
                        {
                            if (email == value.email && password == value.password)
                            {
                                        b=0;
                                
                                        console.log(b);
                                        document.querySelector('body').innerHTML += `
                                            <div class="w3-quarter w3-margin-bottom-60 w3-padding">
                                            
                                                <div class="w3-display-container w3-card-4 w3-orange" style="height:300px;width:300px">
                                                    <div class="w3-padding">Id: value.id</div>
                                                <div class="w3-padding">Name: value.name</div>
                                               <div class="w3-padding">Email: value.email</div>
                                                <div class="w3-padding">Password: {value.password</div>
                                               <div class="w3-padding">Age: value.age</div>
                                               <div class="w3-padding">Color: value.color</div>
                                               <div class="w3-padding">Username: value.username</div>
                                               <div class="w3-padding">Gender: value.gender</div>
                                             </div>
                                          </div>
                                     </div>
                                        `

                                if (b!=0)
                                {
                                    alert("Invalid Username or Password")
                                    window.location.href="login14.html";
                                    
                                }
                            }
                        });
                    });

                });
                            
                        
                



           