function demoBox(sample){

    d3.json("samples.json").then((data) => {
        console.log(data);

        var metadata = data.metadata;
        var array = metadata.filter(sampleObject => sampleObject.id == sample);
    
        var arrayItems = array[0];

        var dataBox = d3.select("#sample-metadata");
        dataBox.html("");
        Object.entries(arrayItems).forEach(([key,value]) => {
            dataBox.append("h6").text(`${key}:${value}`);

        });
    });

}


// charts start here
// function mycharts(){}



// Dropdown even trigger
function init(){
    var selectData = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        var names = data.names;
        names.forEach((sample)=> {
            selectData.append("option").text(sample).property("value",sample);
        });

        var newData = names[0];
        demoBox(newData);   


    });
}


function onChange(newsample){
    demoBox(newsample);
}

init();