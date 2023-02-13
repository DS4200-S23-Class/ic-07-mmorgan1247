const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

//add frame

const FRAME1 =
d3.select("#vis1")
	.append("svg")
		.attr("height", 10 + MARGINS.left)
		.attr("width", 10 + MARGINS.top)
		.attr("class", "frame");

FRAME1.append("circle")
			.attr("cx", 50)
			.attr("cy", 50)
			.attr("r", 30)
			.attr("class", "firstCircle");

//binding data
const data1 = [100, 200, 300];

const FRAME2 =
d3.select("#vis2")
	.append("svg")
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame");

FRAME2.selectAll("points")
		.data(data1)
		.enter()
		.append("circle")
			.attr("cx", (d) => {return d;})
			.attr("cy", 0)
			.attr("r", 20)
			.attr("class", "point");

const data2 = [10000, 20000, 40000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME3 = d3.select("#vis3")
						.append("svg")
							.attr("height", FRAME_HEIGHT)
							.attr("width", FRAME_WIDTH)
							.attr("class", "frame");

const MAX_X = d3.max(data2, (d) => {return d;});
console.log("Max x: " + MAX_X);

const X_SCALE = d3.scaleLinear()
					.domain([0, (MAX_X + 10000)])
					.range([0, VIS_WIDTH]);


FRAME3.selectAll("points")
			.data(data2)
			.enter()
			.append("circle")
				.attr("cx", (d) => {
					return (X_SCALE(d) + MARGINS.left);
				})	
				.attr("cy", MARGINS.top)
				.attr("r", 20)
				.attr("class", "point");



