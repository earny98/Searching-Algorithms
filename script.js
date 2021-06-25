const container = document.querySelector(".data-container");

//Array Generator 
function generatebars(num = 20) {

    for(let i = 0; i < num; i++){

        const value = Math.floor(Math.random() * 100) + 1;

        const bar = document.createElement("div");
        bar.classList.add("bar");

        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translate(${i * 30}px)`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");

        barLabel.innerHTML = value;

        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

generatebars();

function generate()
{
window.location.reload();
}

//Bubble Sort
function swap(el1, el2) {
	return new Promise((resolve) => {

		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {
            
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}

async function bubbleSort (delay = 100) {
    let bars = document.querySelectorAll(".bar");

    bars[0].style.backgroundColor = "red";
    for (var i = 0; i < bars.length; i++) {
        for(var j = 0; j < bars.length - i - 1; j++){

            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";

            await new Promise((resolve) => {
                setTimeout(() =>{
                    resolve();
                }, delay )
            });

        
            var value1 = Number(bars[j].childNodes[0].innerHTML);
            var value2 = Number(bars[j + 1].childNodes[0].innerHTML);
        
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar");
            }
            bars[j].style.backgroundColor = "#6b5b95";
			bars[j + 1].style.backgroundColor = "#6b5b95";
        }
        bars[bars.length - i - 1].style.backgroundColor = "#13CE66";
    }

document.getElementById("button1").disabled = false;
document.getElementById("button1").style.backgroundColor = "#6f459e";
document.getElementById("button2").disabled = false;
}

//Inserction Sort
async function InsertionSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");
    
    for (var i = 1; i < bars.length; i++) {
    
        var j = i - 1; 
        var key = parseInt(bars[i].childNodes[0].innerHTML);
    
        var height = bars[i].style.height;
        bars[i].style.backgroundColor = "#FF4949";
    
        await new Promise((resolve) => setTimeout(() => {
            resolve();
        },600)
    );
    
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
        
        bars[j].style.backgroundColor = "#FF4949";
    
        bars[j + 1].style.height = bars[j].style.height;
        bars[j + 1].childNodes[0].innerText =
        bars[j].childNodes[0].innerText;
    
        j = j - 1;
    
        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 600)
        );
    
        for(var k=i;k>=0;k--){
            bars[k].style.backgroundColor = " #13CE66";
        }
        }
    
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;
    
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 600)
        );
    
        bars[i].style.backgroundColor = "#13CE66";
    }

document.getElementById("button1").disabled = false;
document.getElementById("button1").style.backgroundColor = "#6f459e";
document.getElementById("button3").disabled = false;
}

//Section Sort

async function SectionSort(delay = 400){
    let bars = document.querySelectorAll(".bar");

    for(var i = 0; i < bars.length; i++) {
        var minindex = i;
        
        bars[i].style.backgroundColor = "#f0f773";
        for (var j = i + 1; j < bars.length; j++) {  

        bars[j].style.backgroundColor = "#ff4949";
        
        await new Promise((resolve) => 
            setTimeout( () => {
                resolve();
            },300)
        );
        

        var v1 = parseInt(bars[j].childNodes[0].innerHTML);
        var v2 = parseInt(bars[minindex].childNodes[0].innerHTML);

            if(v1 < v2) {
            if(minindex !== i) {
                bars[minindex].style.backgroundColor = "#6b5b95";
            }
            minindex = j;
            }else {
            bars[j].style.backgroundColor = "#6b5b95";
            }
        }
    

    var temp1 = bars[minindex].style.height;
    var temp2 = bars[minindex].childNodes[0].innerText;
    bars[minindex].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[minindex].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    await new Promise((resolve) => 
        setTimeout( () => {
            resolve();
        },300)
    );
  
    bars[minindex].style.backgroundColor = "#6b5b95";
    bars[i].style.backgroundColor = "#13CE66";
    }
document.getElementById("button1").disabled = false;
document.getElementById("button1").style.backgroundColor = "#6f459e";
document.getElementById("button4").disabled = false;
}

// QuickSort
async function sort(l, r, delay = 900) {
    var bars = document.querySelectorAll(".bar");
    var pivot = Number(bars[r].childNodes[0].innerHTML);
    for (var i = 0; i < 20; i++) {
    }
var i = l - 1;
bars[r].style.backgroundColor = "red";

for (var j = l; j <= r - 1; j++) {

	bars[j].style.backgroundColor = "yellow";

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	var value = Number(bars[j].childNodes[0].innerHTML);

	if (value < pivot) {
	i++;

	var temp1 = bars[i].style.height;
	var temp2 = bars[i].childNodes[0].innerText;
	bars[i].style.height = bars[j].style.height;
	bars[j].style.height = temp1;
	bars[i].childNodes[0].innerText =
	bars[j].childNodes[0].innerText;
	bars[j].childNodes[0].innerText = temp2;
	bars[i].style.backgroundColor = "orange";

	if (i != j)
    bars[j].style.backgroundColor = "pink";

	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, delay)
	);
	} else bars[j].style.backgroundColor = "pink";
}

i++;
var temp1 = bars[i].style.height;
var temp2 = bars[i].childNodes[0].innerText;
bars[i].style.height = bars[r].style.height;
bars[r].style.height = temp1;
bars[i].childNodes[0].innerText =
bars[r].childNodes[0].innerText;
bars[r].childNodes[0].innerText = temp2;
bars[r].style.backgroundColor = "pink";
bars[i].style.backgroundColor = "green";

await new Promise((resolve) =>
	setTimeout(() => {
	resolve();
	}, delay * 3)
);

for (var k = 0; k < 20; k++)
bars[k].style.backgroundColor = "#6b5b95";
return i;
}

async function QuickSort(l, r) {
if (l < r) {	
	var pivot_idx = await sort(l, r);
	await QuickSort(l, pivot_idx - 1);
	await QuickSort(pivot_idx + 1, r);
}
document.getElementById("button1").disabled = false;
document.getElementById("button1").style.backgroundColor = "#6f459e";
}

// To disable the button
function disable()
{
document.getElementById("button1").disabled = true;
document.getElementById("button1").style.backgroundColor = "#888888";
document.getElementById("button1").style.color = "white";

document.getElementById("button2").disabled = true;
document.getElementById("button2").style.backgroundColor = "#888888";
document.getElementById("button2").style.color = "white";

document.getElementById("button3").disabled = true;
document.getElementById("button3").style.backgroundColor = "#888888";
document.getElementById("button3").style.color = "white";

document.getElementById("button4").disabled = true;
document.getElementById("button4").style.backgroundColor = "#888888";
document.getElementById("button4").style.color = "white";

document.getElementById("button5").disabled = true;
document.getElementById("button5").style.backgroundColor = "#888888";
document.getElementById("button5").style.color = "white";
}



