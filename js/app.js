
  

const calculate =document.getElementById('calculate_area_btn');
const calculate_area =document.getElementById('calculate_area');

//event listener for the button
calculate.addEventListener('submit',function(e){
    e.preventDefault();
//selector for the form
const base =document.getElementById('base_input');
const height =document.getElementById('height_input');
const geometry_name =document.getElementById('card-title');


    //if values are not entered
    if(base.value=='' || height.value==''){
        alert('Please enter the values');
        return;
    }
    else {
        let area_data=[];

        if(dataGet('area_total')){
            area_data=dataGet('area_total');
        }
        //creating the object
        area_data.push({
            base:base.value,
            height:height.value,
            area:0.5*base.value*height.value,
            name : geometry_name.innerText
            
        });
        dataSend('area_total',area_data);

        all_geometry_area();

    }
})
all_geometry_area();

function all_geometry_area(){
    let all_geometry_area =dataGet('area_total');
    let output='';
    all_geometry_area.forEach(function(item,index){
        output+=`<div class="d-flex justify-content-between  my-2">
            <p id="geometry_name"> <span id="area-output-serial-number">${(index+1)+"."}</span>${item.name}</p>
        <p id="total_area">${item.area} <span>cm</span></p>
          <button id="convet_cm_to_mt" class="btn btn-primary">convert to m<sup>2</sup></button>
         </div>`
    })
    calculate_area.innerHTML=output;
}





