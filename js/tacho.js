       
// Nutzt html/canvas (https://www.w3schools.com/tags/ref_canvas.asp) für eine Messgeräte/Tacho/Gauge-Anzeige
// inspiriert durch Thomas Rose und seinen Kurs https://www.linkedin.com/learning/webtechniken-lernen-4-javascript

//var grasmax_gauge = {
	
function vCalcRadiation(min, max, akt) {
    try {
        if (akt < min) {
            akt = min;
        }
        var nGrad = (((akt-min) * 180) / (max - min)) - 180;
        return nGrad * Math.PI / 180;
    }
    catch (err) {
        document.getElementById('scripterr').innerHTML = 'Exception in vCalcRadiation(): '.concat( err);
    }
}


function vDrawGauge(){
    try {

        elmt = GaugePara.elmtname;
        title = GaugePara.title;
        min = GaugePara.min;
        max = GaugePara.max;
        akt = GaugePara.akt;


        var canvas = document.getElementById(elmt);
        var context = canvas.getContext('2d');
        var radius = (canvas.width / 2) - 1;

        var OffsetY = 0;
        var OffsetYTitle = 20;
        var OffsetYWert = 35;
        var OffsetYMinMax = 5;
        var MarginXMinMax = 7;

        context.translate(canvas.width / 2, canvas.height / 2);

        var nRotation = vCalcRadiation(min, max, akt);

        context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width , canvas.height );


        //green
        context.beginPath();
        context.lineWidth = 10;
        context.strokeStyle = "rgba(16,150,24,0.5)" ;
        //context.arc(0, OffsetY, radius - 10, Math.PI, Math.PI + Math.PI / 4);
        var nRotationFrom = vCalcRadiation(min, max, GaugePara.greenFrom);
        var nRotationTo = vCalcRadiation(min, max, GaugePara.greenTo);
        context.arc(0, OffsetY, radius - 10, nRotationFrom, nRotationTo);
        context.stroke();

        //gelb
        context.beginPath();
        context.lineWidth = 10;
        context.strokeStyle = "orange";//"rgba(255,153,0.5)";
        var nRotationFrom = vCalcRadiation(min, max, GaugePara.yellowFrom);
        var nRotationTo = vCalcRadiation(min, max, GaugePara.yellowTo);
        context.arc(0, OffsetY, radius - 10, nRotationFrom, nRotationTo);
        context.stroke();

        //rot
        context.beginPath();
        context.lineWidth = 10;
        context.strokeStyle = "rgba(220,57,18,0.8)";
        context.fillStyle = "lightblue";
        var nRotationFrom = vCalcRadiation(min, max, GaugePara.redFrom);
        var nRotationTo = vCalcRadiation(min, max, GaugePara.redTo);
        context.arc(0, OffsetY, radius - 10, nRotationFrom, nRotationTo);
        context.stroke();


        // Zeiger
        context.beginPath();
        context.lineWidth = 3;
        context.strokeStyle = "rgba(70,132,238)";
        context.rotate(nRotation);
        context.moveTo(-20, -OffsetY);
        context.lineTo(canvas.width / 2 - 5, -OffsetY);
        context.stroke();
        context.rotate(-nRotation);

        //Zeigerpunkt
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = 'black';
        context.fillStyle = "rgba(70,132,238)";
        context.arc(0, OffsetY, 10, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        //Textfarbe
        context.fillStyle = "rgba(70,132,238)";

        //Titel
        context.beginPath()
        context.font = "16px Calibri";
        context.textAlign = "center";
        context.textBaseline = "top";
        context.fillText(title, 0, OffsetYTitle);

        //Wert
        context.beginPath()
        context.font = "20px Calibri";
        context.textAlign = "center";
        context.textBaseline = "top";
        context.fillText(akt, 0, OffsetYWert);

        //Von
        context.beginPath()
        context.font = "10px Calibri";
        context.textAlign = "left";
        context.textBaseline = "top";
        context.fillText(min, -canvas.width / 2 + MarginXMinMax, OffsetYMinMax);

        //bis
        context.beginPath()
        context.font = "10px Calibri";
        context.textAlign = "right";
        context.textBaseline = "top";
        context.fillText(max, canvas.width / 2 - MarginXMinMax, OffsetYMinMax);


    }
    catch (err) {
        document.getElementById('scripterr').innerHTML = 'Exception in vDrawGauge(): '.concat(err);
    }
}

//};