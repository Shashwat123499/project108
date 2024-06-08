//https://teachablemachine.withgoogle.com/models/yo4rdNNI_/

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yo4rdNNI_/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        document.getElementById("result").innerHTML = "I can Hear - " + results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";

        img1 = document.getElementById("img");

        if(results[0].label == "Dog") {
            img1.src = 'Dog.png';
        }else if (results[0].label == "Cat") {
            img1.src  = 'Cat.png';
        }else if (results[0].label == "Cow") {
            img1.src  = 'Cow.png';
        }else {
            img1.src  = 'Lion.png';
        }
    
    }
}

