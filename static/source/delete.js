function Delete(){
    let x = document.getElementsByClassName("delete_button");
    var a = [];
    n = x.length;
    // console.log(n);

    for (let i = 0; i < x.length; i++) {
        a[i] = i;
    }

    for (let i = 0; i < x.length; i++) {
        x[i].onclick = function() {
            // console.log(i);
            this.style.color = "red";
            let mssv = x[a[i]].id.slice(6);
            // console.log(mssv);
            let toRemove = document.querySelector("#div"+mssv);
            toRemove.remove();

            let j=n-1;

            while (j > i) {
                let m=1;
                while (a[j] == a[j-m]){
                    m++;
                }
                j = j-m+1;
                // console.log(m);
                while (m!=0){
                    a[j+m-1]=a[j-1];
                    m--;
                }
                j--;
            }
            // console.log(a);
                        
            const params = {MSSV: Number(mssv)};
            const options = { 
                method: "DELETE",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( params )
            };
            
            fetch( "/delete", options)
            .then((res) => {
                console.log(res.status); // 404,200
                if(!res.ok) {
                    throw new Error('An Error Occured');
                }
                return res.json();
            })

            .then(data => {
                console.log('Success:', data)
            })

            .catch(error => console.log('Error:', error));

            return false
        };
    }
}