Used instead of google gauge chart in https://github.com/grasmax/d4

![image](https://github.com/grasmax/g1/assets/26674731/5c31887b-b851-4174-a572-4d0387475609)

How to use it:

Include the js file:
```
<head>
  ...
    <script type="text/javascript" src="https://raw.githubusercontent.com/grasmax/g1/main/tacho.js"></script>
  ...
```

Use canvas tags and configure the tags:
```
<body>
    ...
                <table>
                    <tr>
                        <td valign="top">
                            <canvas id="SOC" width="150" height="150"></canvas>
                        </td>
                        <td valign="top">
                            <canvas id="PVV" width="150" height="150"></canvas>
                        </td>
                        <td valign="top">
                            <canvas id="BAV" width="150" height="150"></canvas>
                        </td>
                    </tr>
                </table>
  ...
  <script>
        var GaugePara = {
            elmtname: "SOC",
            title: "Speicher (%)",
            min: 0,
            max: 100,
            redFrom: 0, redTo: 15,
            yellowFrom: 15, yellowTo: 40,
            greenFrom: 40, greenTo: 100,
            akt: {{ rd.nDbusSoc }}
        };
        vDrawGauge();

        GaugePara = {
            elmtname: "PVV",
            title: "PV (V)",
            min: 0,
            max: 250,
            greenFrom: 0, greenTo: 230,
            yellowFrom: 230, yellowTo: 240,
            redFrom: 240, redTo: 250,
            akt: {{ rd.nDbusAktPvVolt }}
        };
        vDrawGauge();

        GaugePara = {
            elmtname: "BAV",
            title: "Speicher (V)",
            min: 45,
            max: 55,
            yellowFrom: 45, yellowTo: 48,
            greenFrom: 48, greenTo: 52,
            redFrom: 52, redTo: 55,
            akt: {{ rd.nDbusBattVolt }}
        };
        vDrawGauge();
    </script>
</body>
```
