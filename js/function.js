/**
 * 
 * @param {*} geo_name is geometry shape name 
 * @param {*} geo_base  height
 * @param {*} geo_height width
 * @returns 
 */
function area_calculation(geo_name, geo_base, geo_height) {

    //selector for the form
    const base = document.getElementById(geo_base);
    const height = document.getElementById(geo_height);
    const geometry_name = document.getElementById(geo_name).innerText;

    //check value is string or negative value or empty value

    if (base.value == '' || height.value == '' || isNaN(base.value) || isNaN(height.value) || base.value < 0 || height.value < 0) {
        
            alert('Please enter the values');
            return;
        } 
        else {

            if (geometry_name == "Rectangular" || geometry_name == "Parallelogram") {
                gio_area = parseFloat((base.value * height.value).toFixed(2))
            } else if (geometry_name == "Ellipse") {
                gio_area = parseFloat(((22 / 7) * base.value * height.value).toFixed(2))
            } else {
                gio_area = parseFloat((.5 * base.value * height.value).toFixed(2));

            }
            //pushing the data to the array
            area_data.push({
                base: base.value,
                height: height.value,
                area: gio_area,
                name: geometry_name

            });
            all_geometry_area();
            document.getElementById(geo_base).value = '';
            document.getElementById(geo_height).value = '';


        }

    }