//triangle area calculator  
const tri_calculate = document.getElementById('tri_calculate_area_btn');
////Rhombus area calculator
const rho_calculate = document.getElementById('rho_calculate_area_btn');
//Pentagon area calculator
const pen_calculate = document.getElementById('pen_calculate_area_btn');
//rectangle area calculator
const rec_calculate = document.getElementById('rec_calculate_area_btn');
//Parallelogram area calculator
const par_calculate = document.getElementById('par_calculate_area_btn');
//Ellipse area calculator
const ell_calculate = document.getElementById('ell_calculate_area_btn');


//output triangle area
const calculate_area = document.getElementById('calculate_area');

//event listener for the button

let area_data = [];
let half = true;

function area_calculation(geo_name, geo_base, geo_height) {

    //selector for the form
    const base = document.getElementById(geo_base);
    const height = document.getElementById(geo_height);
    const geometry_name = document.getElementById(geo_name).innerText;

    //if values are not entered
    if (base.value == '' || height.value == '') {
        log('Please enter the values');
        return;
    } else {

        if (geometry_name =="Rectangular" || geometry_name=="Parallelogram") {
            gio_area =parseFloat( (base.value * height.value).toFixed(2))
        }
        else if(geometry_name =="Ellipse"){
            gio_area =parseFloat( ( (22/7) *base.value * height.value).toFixed(2))
        } 
        else {
            gio_area =parseFloat( (.5 * base.value * height.value).toFixed(2));

        }
        //pushing the data to the array
        area_data.push({
            base: base.value,
            height: height.value,
            area: gio_area,
            name: geometry_name

        });
        all_geometry_area();
        document.getElementById(geo_base).value='';
        document.getElementById(geo_height).value='';


    }
}


//triangle event
tri_calculate.addEventListener('submit', function (e) {
    e.preventDefault();
    half = true;
    area_calculation("tri_title", "tri_base_input", "tri_height_input");

})
//Rhombus event
rho_calculate.addEventListener('submit', function (e) {
    e.preventDefault();
    half = true;
    area_calculation("rho_title", "rho_base_input", "rho_height_input");

})
//Pentagon event
pen_calculate.addEventListener('submit', function (e) {
    e.preventDefault();
    half = true;
    area_calculation("pen_title", "pen_base_input", "pen_height_input");

})
//rectangle event
rec_calculate.addEventListener('submit', function (e) {
    e.preventDefault();
    half = false;
    area_calculation("rec_title", "rec_base_input", "rec_height_input");
})
//Parallelogram event
par_calculate.addEventListener('submit', function (e) {
    e.preventDefault();
    half = false;
    area_calculation("par_title", "par_base_input", "par_height_input");
})
//Ellipse event
ell_calculate.addEventListener('submit', function (e) {
    e.preventDefault();
    half = false;
    area_calculation("ell_title", "ell_base_input", "ell_height_input");
})



all_geometry_area();

function all_geometry_area() {
    let all_geometry_area = area_data;
    let output = '';
    all_geometry_area.forEach(function (item, index) {
        output += `<div class="d-flex justify-content-between  my-2">
            <p id="geometry_name"> <span id="area-output-serial-number">${(index+1)+"."}</span>${item.name}</p>
        <p id="total_area">${item.area} <span>cm</span></p>
          <button id="convet_cm_to_mt" class="btn btn-primary">convert to m<sup>2</sup></button>
         </div>`
    })
    calculate_area.innerHTML = output;
}