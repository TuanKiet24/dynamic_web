fetch('/list')
.then((res) => { 
    if(!res.ok) {
        throw new Error('An Error Occured');
    }
    return res.json();
})

.then(data => {
    //document.getElementById('Post').innerHTML = 'Data: ' + data[0].last_name;
    //console.log(data[0]);
    for (let i=0; i<data.length; i++) {
        var inf1 = data[i].last_name;
        var inf2 = data[i].first_name;
        var inf3 = data[i].MSSV;
        var inf4 = data[i].Phone;
        var inf5 = data[i].Email;
        var div = document.createElement("div");
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
        document.getElementById("Post").appendChild(div);
        //document.getElementById('Form').innerHTML = '';
    }
    
    //console.log(data.length);
})
    
.catch(error => {
    document.getElementById('Post').innerHTML = 'Error';
    console.log("Error");
});
