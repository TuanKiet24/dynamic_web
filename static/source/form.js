function Form(){	
    document.getElementById('Form').innerHTML = '<table class = "table_body" style="width:90%;">' +
    '<form name="myForm" method="get">'+
        '<tr class = "tr_body">'+
            '<td class = "td_body" style="width: 200px; min-width: 160;">'+
                '<input id="lname" type="text" id="lname" name="lname" size="20">'+
            '</td>'+
            '<td class = "td_body" style="width: 100px; min-width: 80px">'+
                '<input id="fname" type="text"  id="fname" name="fname" size="6">'+
            '</td>'+
            '<td class = "td_body" style="width: 100px; min-width: 80px">'+
                '<input id="mssv" type="number" min="1" max="9999999" id="mssv" name="mssv">'+
            '</td>'+
            '<td class = "td_body" style="width: 100px; min-width: 80px">'+
                '<input id="phone" type="text" id="phone" name="phone" size="8" maxlength="12">'+
            '</td>'+
            '<td class = "td_body" style="width: 300px; min-width: 268px">'+
                '<input id="email" type="text" id="email" name="email" size="32">'+
            '</td>'+
            '<td class = "td_body" style="width: 200px; min-width: 160px">'+
                '<a onclick="Create()"><button type="button">Lưu</button></a>'+ '  '+
                '<button type="button" onclick="Del()">Xóa</button>'+
            '</td>'+
        '</tr>'+
    '</form>'+
    '</table>';
}

function Del(){
    document.getElementById('Form').innerHTML = '';
}