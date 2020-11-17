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
       
        var sample_values = item.sample_values.slice(0,10).reverse()
        var otu_ids = item.otu_ids.slice(0,10).reverse()
        var otu_labels = item.otu_labels.slice(0,10).reverse()
        var sample_values2 = item.sample_values.reverse()
        var otu_ids2 = item.otu_ids.reverse()
        var otu_labels2 = item.otu_labels.reverse()
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);

        var trace1 = [{
            type: "bar",
            orientation: "h",
            x: sample_values,
            y: otu_ids.map(each => `OTU ${each}`),
            text: otu_labels,
        }];

        var trace2 = [{
            x: otu_ids2,
            y: sample_values2,
            text: otu_labels2,
            mode: 'markers',
            marker:  {
                color: otu_ids2,
                colorscale:  'Viridis',
                size: sample_values2,
            }
                
            }];

        //var chartData = [trace1, trace2];

        var layout1 = {
            title: "Test Subject's Top 10 OTU's (Abundance of Species)",               
            }

        var layout2 = {
            title:  "Full Profile of Test Subject's OTU Spectrum"

        }
        
        Plotly.newPlot("bar", trace1, layout1);
        Plotly.newPlot("bubble", trace2, layout2);
    });


    
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
    mycharts(newsample);
}

init();