const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'a3eb06a020msh1a4ad6d00886374p1b8dbajsn35a6344cf6f4',
		'X-RapidAPI-Host': 'twitter-trends5.p.rapidapi.com'
	},
	body: new URLSearchParams({woeid: '23424934'})
};

let graphData = [];

fetch(url,options).then(res=>res.json()).then(data=>{
    for(let i = 0; i < 10; i++){
		graphData.push({
			"name": data.trends[i].name,
	       "volume": data.trends[i].volume
		});
	};

	// dummy data to comment out
	// let myPost = {
	//     name: "Lee Sung Kyung",
	//     queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	//     volume: 31799,
	//     followers: 3895734
	// }

	// console.log(myPost);
	// console.log(myPost.name);

	// let graphData = [
	//     {name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
	//     {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
	// ];

	// console.log(graphData);
	// console.log(graphData[1]);
	// console.log(graphData[1].name);

	// graphData.push(myPost);
	// console.log(graphData);

	// // For Loop
	// for (let i = 0; i < 2; i++) {
	// 	console.log(graphData[i]);
	// 	console.log(graphData[i].name);
	// 	console.log(graphData[i].queryUrl);
	// 	console.log(graphData[i].volume);
	// }


	// end of dummy data to comment out

	// Map Method
	let topics = graphData.map(object => {
			console.log(object.name);
			return object.name
		});

	console.log(topics);

	let volumes = graphData.map(object => {
		console.log(object.volume);
		return object.volume
	});
		
		console.log(volumes);

	const myChart = document.getElementById('trends');

	  new Chart(myChart, {
	    type: 'bar',
	    data: {
	      labels: topics,
	      datasets: [{
	        label: '# of Tweets/Xeets',
	        data: volumes,
	        borderWidth: 2,
	        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        	],
        	borderColor: [
           'rgb(255, 99, 132)',
           'rgb(255, 159, 64)',
           'rgb(255, 205, 86)',
           'rgb(75, 192, 192)',
           'rgb(54, 162, 235)',
           'rgb(153, 102, 255)',
           'rgb(201, 203, 207)'
       ],
       hoverBackgroundColor: [
           'rgb(255, 99, 132)',
           'rgb(255, 159, 64)',
           'rgb(255, 205, 86)',
           'rgb(75, 192, 192)',
           'rgb(54, 162, 235)',
           'rgb(153, 102, 255)',
           'rgb(201, 203, 207)'
       ]

	      }]
	    },
	    options: {
	      scales: {
	        y: {
	          beginAtZero: true
	        }
	      }
	    }
	  });
});

// if won't work, do this
// for(let i = 0; i < 25; i++){
// 	graphData.push({
// 		"name": data.trends[i].name,
//        "volume": data.trends[i].volume
// 	});
// };

//dummy data
// let myPost = {
//     name: "Lee Sung Kyung",
//     queryUrl: "search?q=%22Lee+Sung+Kyung%22",
//     volume: 31799,
//     followers: 3895734
// }

// let graphData = [
//     {name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
//     {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// ];

//ways to access
// console.log(graphData); // access the whole object
// console.log(graphData[1]); // access a particular object
// console.log(graphData[1].name); // access particular object and specific content.


// add another element to the array.
// graphData.push(myPost);
// console.log(graphData.length);


// for loop
// for(let i = 0; i<graphData.length; i++){
//     console.log(graphData[i].name, " ", graphData[i].volume);
// }



// deprecated
const date_element = document.getElementById("date");
let current_date = new Date();


let date_options = {
    year:'numeric',
    month: 'long',
    day: 'numeric'
}



date_element.innerHTML = current_date.toLocaleDateString('en-US', date_options);


function followLink(link){
    window.location.href = link;
}


//add chart
