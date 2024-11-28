
// shorthand doc-ready function.
$(()=> {
  console.log("Ready");
  
  // attempted .getJSON to show last order
  // when button is pressed. Was unable to solve.
   $('#loadPrevious').on('click', (event)=> {     $.getJSON("https://raw.githubusercontent.com/jaxn-harvey/dev-freddie-hw-group1/refs/heads/main/scripts/lastOrder.json", function(data){
          $('.lastOrder').append(`data.base, data.bun, data.toppings, data.condiments, data.side`);
     });
   });
  
  // side option. Opted to toggle instead
  // of disable. Looks nicer.
  $('.sideRadio').on('change', function(e){
   if($('#noSide').is(':checked')){
      //$('#chooseSide').prop('disabled', true)
     $('#chooseSide').toggle()
    } if($('#yesSide').is(':checked')){
      //$('#chooseSide').prop('disabled', false)
      $('#chooseSide').toggle()
    };
  });
  
  // below, all ifs are nested here. None will happen until the submit btn is clicked.
  $('#btnSubmit').on('click', (event)=> {
    
    event.preventDefault();
    
    // objects
    let base = [];
    let bun = [];
    let toppings = [];
    let condiments = [];
    let sides = [];
    let receipt = [base, bun, toppings, condiments, sides];
    
    // clear receipt box
    $(".orderList").empty();
    
    // getting email
    console.log("User email:", $('#inputUserName').val());
    
    // get base
    if($('#hamburger').is(':checked')){
     console.log("Hamburger");
      //$('.orderList').append("Hamburger, ")
      base.push("Hamburger");
   };
    
    if($('#chicken').is(':checked')){
     console.log("Chicken sandwich");
      //$('.orderList').append("Chicken sandwich, ")
      base.push("Chicken sandwich");
   };
    
    if($('#veggie').is(':checked')){
     console.log("Veggie burger"); 
      //$('.orderList').append("Veggie burger, ")
      base.push("Veggie burger");
   };
    
    if($('#mysteryb').is(':checked')){
     console.log("Mystery burger"); 
      //$('.orderList').append("Mystery burger, ")
      base.push("Mystery burger");
   };
    
    // bun
    if($('#wheat').is(':checked')){
     console.log("Wheat bun"); 
      //$('.orderList').append("wheat bun, ")
      bun.push("Wheat bun");
   };
    
    if($('#brioche').is(':checked')){
     console.log("Brioche bun");
      //$('.orderList').append("brioche bun, ")
      bun.push("Brioche bun");
   };
    
    // Toppings
    if($('#lettuce').is(':checked')){
     console.log("Lettuce"); 
      //$('.orderList').append("lettuce, ")
      toppings.push("Lettuce");
   };
    
    if($('#tomato').is(':checked')){
     console.log("Tomato"); 
      //$('.orderList').append("tomato, ")
      toppings.push("Tomato");
   };
    
    if($('#pickles').is(':checked')){
     console.log("Pickles"); 
      //$('.orderList').append("pickles, ")
      toppings.push("Pickles");
   };
    
    if($('#peppers').is(':checked')){
     console.log("peppers"); 
      //$('.orderList').append("peppers, ")
      toppings.push("Peppers");
   };
    
    if($('#mysterym').is(':checked')){
     console.log("Mystery mix"); 
      //$('.orderList').append("mystery mix, ")
      toppings.push("Mystery mix");
   };
    
    // Condiments
    if($('#ketchup').is(':checked')){
     console.log("Ketchup"); 
      //$('.orderList').append("ketchup, ")
      condiments.push("Ketchup");
   };
    
    if($('#hotsauce').is(':checked')){
     console.log("Hot sauce"); 
      //$('.orderList').append("hot sauce, ")
      condiments.push("Hot sauce");
   };
    
    if($('#mayo').is(':checked')){
     console.log("Mayo"); 
      //$('.orderList').append("mayo, ")
      condiments.push("Mayo");
   };
    
    if($('#mustard').is(':checked')){
     console.log("Mustard");
      //$('.orderList').append("mustard, ")
      condiments.push("Mustard");
   };
    
    if($('#housesauce').is(':checked')){
     console.log("House sauce"); 
      //$('.orderList').append("house sauce, ")
      condiments.push("House sauce");
   };
    
    // sides
    if($('#none').is(':checked')){
     console.log("No side") 
     sides.push("No side");
   };
    
    if($('#chips').is(':checked')){
     console.log("Chips"); 
      //$('.orderList').append("chips")
      sides.push("Chips");
   };
    
    if($('#fries').is(':checked')){
     console.log("Fries"); 
      //$('.orderList').append("fries")
      sides.push("Fries");
   };
    
    if($('#slaw').is(':checked')){
     console.log("Coleslaw");
      //$('.orderList').append("coleslaw")
      sides.push("Colseslaw");
   };
    
    if($('#salad').is(':checked')){
     console.log("Salad"); 
      //$('.orderList').append("salad")
      sides.push("Salad");
   };
    
    if($('#hummus').is(':checked')){
     console.log("Hummus"); 
      //$('.orderList').append("hummus")
      sides.push("Hummus");
   };
    
    if($('#hash').is(':checked')){
     console.log("Mystery hash"); 
      //$('.orderList').append("mystery hash")
      sides.push("Mystery hash");
   };
    
  
   let box = document.getElementById("orderList");
   receipt.forEach((item) => {
     let li = document.createElement("li");
     li.innerText = item;
     box.appendChild(li);
        });
    
    console.log(receipt);
    
    // allergies
    console.log("Customer allergies if any:", $('#usertext').val());
    
  })
  
});