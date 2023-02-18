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

//card 
const geometry_card = document.querySelectorAll('.geo_card .card');

//event listener for the button

let area_data = [];
let half = true;


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

/**
 * this function helps 
 * to show all area output sidebar
 */
function all_geometry_area() {
    let all_geometry_area = area_data;
    let output = '';
    all_geometry_area.forEach(function (item, index) {
        output += `<div class="d-flex justify-content-between  my-2">
            <p id="geometry_name"> <span id="area-output-serial-number">${(index+1)+"."}</span>${item.name}</p>
        <p id="total_area">${item.area} <span>cm<sup>2</sup></span></p>
          <button id="convet_cm_to_mt" class="btn btn-primary">convert to m<sup>2</sup></button>
         </div>`
    })
    calculate_area.innerHTML = output;
}


/**
 * this events helps us to give bg color when we hover geometry card
 */
//mouse over event
geometry_card.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
        let color_array = colorGenerate();
        item.style.backgroundColor = `rgb(${color_array[0]},${color_array[1]},${color_array[2]})`;
        item.style.transition = 'all 1s ease';
    })
    //mouse out event
    item.addEventListener('mouseleave', function (e) {
        item.style.backgroundColor = `#fff`;
        item.style.transition = 'all 1s ease';
    }
    )

})

//color generator for the geometry card mouse over
function colorGenerate() {
    let color_array=[];
    for (let i = 0; i < 3; i++) {
        let color = Math.floor(Math.random() * 255);
        color_array.push(color);
    }
    return color_array;
}
