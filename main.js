function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    Video= createCapture(VIDEO);
    Video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function draw() {
    image(Video, 0, 0, 320, 240);
    classifier.classify(Video, gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
