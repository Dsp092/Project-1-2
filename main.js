dog=0
cat=0
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rYzXnEZIN/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}



function gotResults(error, results)
{
if (error) 
{
    console.error(error);
}
 else
{
console.log (results);
random_number_r=Math.floor(Math.random()*255)+1;
random_number_g=Math.floor(Math.random()*255)+1;
random_number_b=Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML="i can hear -"+results[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy -"+(results[0].confidence*100).toFixed(2)+"%";
img=document.getElementById('animal_1')
img1=document.getElementById('animal_2')
img2=document.getElementById('ear_3')
if (results[0].label=="Barking")
{
    img.src='bark.gif';
    img1.src='meow.gif';
    img2.src='listen.gif';
    
}
else if (results[0].label=="Meowing")
{
    img.src='bark.gif';
    img1.src='meow.gif';
    img2.src='listen.gif';
    
}

else
{
    img.src='bark.gif';
    img1.src='meow.gif';
    img2.src='listen.gif';
    
}
}
}