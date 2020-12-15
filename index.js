function addToDo(){
            if((document.getElementById('todoInput').value)!=""){
                document.getElementById('todos').innerHTML += '<div id="todoId" class="todoSpans" >'
                    + document.getElementById('todoInput').value
                    + '<button type="button" id="dltButton" class="deleteButton" onclick="deleteTodoFunc()" >x</button>'
                    + '</div>'; 
                document.getElementById('todoInput').value="";
            }else{
                alert("Insert value first");
            }
        } 

        function deleteTodoFunc(){
            var elmnt = document.getElementById("todoId");
            elmnt.remove();
        }