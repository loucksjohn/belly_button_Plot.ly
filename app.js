function demoBox(sample){

    d3.json("samples.json").then((data) => {
        console.log(data);

        var metadata = data.metadata;
        var array = metadata.filter(sampleObject => sampleObject.id == sample);
        console.log(array)
    
        var arrayItems = array[0];
        console.log(arrayItems)

        var dataBox = d3.select("#sample-metadata");
        dataBox.html("");
        Object.entries(arrayItems).forEach(([key,value]) => {
            dataBox.append("h6").text(`${key}:${value}`);

        });
    });

}

// charts start here
function mycharts(response){
    d3.json("samples.json").then((data) => {
        var sampleData = data.samples;
        var array = sampleData.filter(responseObject => responseObject.id == response);
        console.log(array)

        var item = array[0]
        console.log(item)
        var sortedItem = item.sort((a,b) => b.sample_values - a.sample_values);
        console.log(sortedItems)

        var sample_values = item.sample_values
        var otu_ids = item.otu_ids
        var otu_labels = item.otu_labels
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);

        var trace1 = {
            type: "bar",
            orientation: "h",
            x: sample_values,
            y: otu_ids,
            text: otu_labels
        };

        var chartData = [trace1]

        var layout = {
            title: "belly button bacteria",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100    
            }
        };
        Plotly.newPlot("bar", chartData, layout);


    })
}



// Dropdown event trigger
function init(){
    var selectData = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        var names = data.names;
        names.forEach((sample)=> {
            selectData.append("option").text(sample).property("value",sample);
        });

        var newData = names[0];
        console.log(newData);
        demoBox(newData);         
        mycharts(newData);


    });
}


function onChange(newsample){
    demoBox(newsample);
}

init();