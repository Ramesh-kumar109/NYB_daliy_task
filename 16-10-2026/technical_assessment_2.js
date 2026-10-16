        const form = document.querySelector('#std-form');
        const name_input = document.querySelector('#std-name');
        const std_list = document.querySelector('#std-list');
        const heading = document.querySelector('#std-heading');

        function update_studentCount() {
            heading.textContent = `Students (${std_list.children.length})`;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = name_input.value.trim();
            if (!name) return; 

            // creating the student name 
            const student_name = document.createElement("LN");
            const student_item = document.createElement("span");
              
            // add the text content in student name 
            student_name.textContent = name;


            // creating the  student delete the button 
            const delete_Button = document.createElement("button");
            delete_Button.type = "button";
            delete_Button.textContent = 'Delete';
            delete_Button.setAttribute('aria-label', `Delete ${name}`);
            delete_Button.addEventListener('click', () => {
                student_item.remove();
                update_studentCount();
            });

            student_item.append(student_name, delete_Button);
            std_list.append(student_item);
            form.reset();
            name_input.focus();
            update_studentCount();
        });


        //7. array and methods
	const products = [
                         { id: 1, name: "Laptop", price: 60000 },
                         { id: 2, name: "Phone", price: 30000 },
                         { id: 3, name: "Chair", price: 5000 },
                         { id: 4, name: "Table", price: 8000 }
                      ];

    // 1.Get products with a price greater than 10000.
    let higher = products.filter((product=>product.price>10000));
    //console.log(higher);

    //2.Return an array containing only product names.
     let name = products.map((product=>product.name));
      //console.log(name);

    // 3 Calculate the total price of all products.
       let total_price = products.reduce((sum,products)=> sum+products.price,0);
      // console.log("total_price:=>",total_price);

    //4.Sort products by price in descending order
       let descending_order = products.sort((a,b)=>b.price- a.price);
       //console.log(descending_order);

