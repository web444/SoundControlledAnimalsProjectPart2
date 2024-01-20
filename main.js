//https://teachablemachine.withgoogle.com/models/a2NQTkbi5/
function clicker(){

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/a2NQTkbi5/model.json",modelReady);
    
    }
    
    function modelReady(){
    classifier.classify(gotResults);
    }
    
    function gotResults(error,results){
    console.log(error);
    console.log("Nice");
    }