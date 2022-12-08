//const { response } = require("express");

function Create(){						
    var inf1 = document.getElementById("lname").value;
    var inf2 = document.getElementById("fname").value;
    var inf3 = document.getElementById("mssv").value;
    var inf4 = document.getElementById("phone").value;
    var inf5 = document.getElementById("email").value;
    var div = document.createElement("div");
    
    if ((inf1 == "")||(inf2 == "")||(inf3 == "")) {
        alert("Bắt buộc điền Họ và tên, MSSV \r\nMSSV phải là số nguyên dương");
        return false;
    }
    else {        
        const params = {last_name: inf1, first_name: inf2, MSSV: inf3, Phone: inf4, Email: inf5};
        const options = { 
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( params ) 
        };
        fetch( "/create", options) 
        .then((res) => {
            console.log(res.status); // 404
            if(!res.ok) {
                throw new Error('An Error Occured');
            }
            return res.json();
        })

        .then(data => {
            console.log('Success:', data)
            if (data.status == 1) {
                alert("MSSV "+inf3+" đã bị trùng với sinh viên khác");
                return false
            }
            else {
                div.innerHTML = '<div id="div'+inf3+'">'+
                '<table class = "table_body" style="width:90%;">'+
                '<tr class = "tr_body">'+
                    '<td class = "td_body" style="width: 200px; min-width: 170px;">'+inf1+'</td>'+
                    '<td class = "td_body" style="width: 100px; min-width: 80px">'+inf2+'</td>'+
                    '<td class = "td_body" style="width: 100px; min-width: 100px">'+inf3+'</td>'+
                    '<td class = "td_body" style="width: 100px; min-width: 90px">'+inf4+'</td>'+
                    '<td class = "td_body" style="width: 300px; min-width: 270px">'+inf5+'</td>'+
                    '<td class = "td_body" style="width: 200px; min-width: 180px">'+
                        '<button class="update_button" id="update'+inf3+'" type="button" onclick="Update()">Chỉnh sửa</button>'+
                        ' '+
                        '<button class="delete_button" id="delete'+inf3+'" type="button" onclick="Delete()">Xóa</button>'+
                    '</td>'+
                '</tr>'+
                '</table>'+
                '</div>';
                
                document.getElementById("Add").appendChild(div);
                document.getElementById('Form').innerHTML = '';
            }

        })

        .catch(error => console.log('Error:', error));
    }
    return true;
}
