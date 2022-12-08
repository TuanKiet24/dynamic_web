var mssv1;
var inf1, inf2, inf3, inf4, inf5;
function Update(){
    let x = document.getElementsByClassName("update_button");

    for (let i = 0; i < x.length; i++) {
        x[i].onclick = function() {
            this.style.color = "red";
            mssv1 = x[i].id.slice(6);

            const params = {MSSV: Number(mssv1)};
            const options = { 
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( params )
            };
            
            fetch( "http://127.0.0.1:3000/read", options)
            .then((res) => {
                console.log(res.status); // 404,200
                if(!res.ok) {
                    throw new Error('An Error Occured');
                }
                return res.json();
            })

            .then(data => {
                console.log('Success:', data)

                document.getElementById('div'+mssv1).innerHTML = '<table class = "table_body" style="width:90%;">' +
                '<form name="myForm" method="get">'+
                    '<tr class = "tr_body">'+
                        '<td class = "td_body" style="width: 200px; min-width: 160;">'+
                            '<input id="lname" type="text" id="lname" name="lname" size="20" value="'+data[0].last_name+'">'+
                        '</td>'+
                        '<td class = "td_body" style="width: 100px; min-width: 80px">'+
                            '<input id="fname" type="text"  id="fname" name="fname" size="6" value="'+data[0].first_name+'">'+
                        '</td>'+
                        '<td class = "td_body" style="width: 100px; min-width: 80px">'+
                            '<input id="mssv" type="number" min="1" max="9999999" id="mssv" name="mssv" value="'+data[0].MSSV+'">'+
                        '</td>'+
                        '<td class = "td_body" style="width: 100px; min-width: 80px">'+
                            '<input id="phone" type="text" id="phone" name="phone" size="8" maxlength="12" value="'+data[0].Phone+'">'+
                        '</td>'+
                        '<td class = "td_body" style="width: 300px; min-width: 268px">'+
                            '<input id="email" type="text" id="email" name="email" size="32" value="'+data[0].Email+'">'+
                        '</td>'+
                        '<td class = "td_body" style="width: 200px; min-width: 160px">'+
                            '<a onclick="Create1()"><button type="button">Lưu</button></a>'+
                        '</td>'+
                    '</tr>'+
                '</form>'+
                '</table>';
            })

            .catch(error => console.log('Error:', error));
        }
    }
}

function Create1(){
    inf1 = document.getElementById("lname").value;
    inf2 = document.getElementById("fname").value;
    inf3 = document.getElementById("mssv").value;
    inf4 = document.getElementById("phone").value;
    inf5 = document.getElementById("email").value;
    var div = document.createElement("div");
    
    if ((inf1 == "")||(inf2 == "")||(inf3 == "")) {
        alert("Bắt buộc điền Họ và tên, MSSV \r\nMSSV phải là số nguyên dương");
        return false;
    }
    else {        
        const params = {last_name: inf1, first_name: inf2, MSSV: inf3, Phone: inf4, Email: inf5, old: Number(mssv1)};
        const options = { 
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( params ) 
        };

        fetch( "/update", options) 
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
                console.log(mssv1);
                document.getElementById("div"+mssv1).innerHTML = '';
                document.getElementById("div"+mssv1).appendChild(div);
            }

        })

        .catch(error => console.log('Error:', error));
    }
    return true
}