/* Here go the values receives from users of each metric from 1 to 5 */
var answers = [3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3];

var answersCoordinates = [];
var pointRadiusAnswer  = 4.1;
var titleSegmentName = null;
var titleCriteriaValue = null;
var canvas = null;
var ctx = null;
var dimensions = [
  { 
    name: "Market",
    criterias: [        
      {
        segment: "Ecosystem",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Market",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Scale",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Governance",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Competition",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      }
    ],
  },
  {
    name: "Project",
    criterias: [      
      {
        segment: "Revenue",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Value Proposition",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]    
      },
      {
        segment: "Prototype",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      }
    ]
  },
  {
    name: "Inovation",
    criterias: [        
      {
        segment: "Inovation",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Impact",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Business Model",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      }
    ]
  },
  {
    name: "Team",
    criterias: [
      {
        segment: "Experience",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Effort",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      },
      {
        segment: "Entrepreneur",
        value: [
          "Not mapped",
          "Mapped a little",
          "Mapped regularly",
          "Mapped on ecosystem",
          "Mapped worldwide"
        ],
        definition: [
          "Elements not mapped yet", 
          "Some elements are mapped in part", 
          "Elements are mapped for some business actitude", 
          "Elements are mapped for it ecossystem specifically", 
          "Elements are mapped in a global context of business action"
        ]
      }
    ]
  }
];

$(document).ready(function(){
  canvas =  document.getElementById('radar-canvas');
  ctx = canvas.getContext("2d");
  titleSegmentName = document.querySelector('#info-canvas #segment-name');
  titleCriteriaValue = document.querySelector('#info-canvas #criteria-value');
  answersCoordinates = [];
  /* Popular com objetos vazios na quantidade de respostas registradas */
  for(var count = 0; count < answers.length; count++){
    answersCoordinates.push({x: 0, y: 0});
  }
  generateCanvas();
});
  
$(window).resize(function(){
  generateCanvas();
});

function generateCanvas(){
  var blackColor = '#000';
  var whiteColor = '#FFF';
  var grayColor = '#555554';
  var magentaColor = '#cc1c59';
  dispersionColor = magentaColor;
  var sectionContentRadarSize = $("#radar-canvas").parent().width();
  var canvasWidthHeight = verifyIfIsMobile() ? (sectionContentRadarSize) : (sectionContentRadarSize * 70 / 100);
  canvas.width = canvasWidthHeight;
  canvas.height = canvasWidthHeight;
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;

  var distanceBetweenBorderAndCircle = (
    verifyIfIsMobile() ? (canvasWidth * 1.5 / 100) : (canvasWidth * 3 / 100)
  );

  var factorReduceCircles = 0.75;

  var radius = (canvasWidth / 2 - distanceBetweenBorderAndCircle);
  radius *= factorReduceCircles;

  var centerCanvas = (radius / factorReduceCircles + distanceBetweenBorderAndCircle);

  var circleSizes = [
    (radius * 9.4339 / 100),
    (radius * 26.415 / 100),
    (radius * 49.056 / 100),
    (radius * 75.471 / 100),
    radius
  ];
  radius /= factorReduceCircles; 
  
  (function drawCircles(){
    /* From bigger to smaller*/
    var circleColor = {
      4: "#a5a5a5",
      3: "#ccc", 
      2: "#e5e5e5",
      1: "#e5e5e5", 
      0: "#FFF"
    } ;
    var circlesLenght = 4;
    for (; circlesLenght >= 0; circlesLenght--){
      ctx.beginPath();
      ctx.arc(centerCanvas, centerCanvas, circleSizes[circlesLenght], 0, 2 * Math.PI);
      ctx.fillStyle = circleColor[circlesLenght];
      ctx.fill();
      ctx.strokeStyle = whiteColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  })()   

  function writeDimensionName(name, quadrant){
    var isMobile = verifyIfIsMobile();
    ctx.font = (isMobile ? 12.5 : 20)  + "px arial";
    ctx.fillStyle = "#000";
    var positionWhereWrite = {
      0: { x: (isMobile ? 0 : 20), y: (isMobile ? 10 : 35) }, /* Market */
      1: { x: canvasWidth - (isMobile ? 65 : 110), y: (isMobile ? 10 : 35) }, /* Project */
      2: { x: canvasWidth - (isMobile ? 65 : 110), y: canvasHeight - (isMobile ? 10 : 25) }, /* Inovation */
      3: { x: (isMobile ? 0 : 20), y: canvasHeight - (isMobile ? 10 : 25) }, /* Team */
    }      
    ctx.fillText(name.toUpperCase(), positionWhereWrite[quadrant].x, positionWhereWrite[quadrant].y);
  }

  writeDimensionName(dimensions[0].name, 0); /* Market */
  writeDimensionName(dimensions[1].name, 1); /* Project */
  writeDimensionName(dimensions[2].name, 2); /* Inovation */
  writeDimensionName(dimensions[3].name, 3); /* Team */

  function writeCriteriaValue(text) {
    var isMobile = verifyIfIsMobile();
    var fontSize = 9;
    var factor = (isMobile ? 0.75 : 1);
    ctx.font = "bold " + fontSize * factor + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = blackColor;
    text = text.toString().toUpperCase();
    var xCoordinate = 3;
    ctx.fillText(text, xCoordinate, 0);
  }

  function setCoordinateInListOfPoints(ang, pointPosition, distanceBetweenBorderAndPointZero, pointRadiusDistanceX, pointRadiusDistanceY) {
    for (var count = 0; count < circleSizes.length; count++){
      answersCoordinates[pointPosition][count] = {
        x: (circleSizes[count] * Math.cos(765 + ang) + distanceBetweenBorderAndPointZero) - pointRadiusDistanceX,
        y: (circleSizes[count] * Math.sin(765 + ang) + distanceBetweenBorderAndPointZero) - pointRadiusDistanceY,
        answer: (count == answers[pointPosition]-1 ? true : false)
      };
    }      
  }

  function drawPoint(ang, radius, color, pointRadius, answer = false, pointPosition = null, text = null) {
    if (pointPosition !== null) {
      var distanceBetweenBorderAndPointZero = distanceBetweenBorderAndCircle + circleSizes[circleSizes.length - 1] / factorReduceCircles;
      /* Adjust in discrepancy of points position positioned in relation to lines */
      var pointRadiusDistanceX = 0;
      var pointRadiusDistanceY = 0;
      if (pointPosition >= 0 && pointPosition < 4) {
        pointRadiusDistanceX = 1.2;
        pointRadiusDistanceY = -0.3;
      } else if (pointPosition == 4) {
        pointRadiusDistanceX = 1;
        pointRadiusDistanceY = -1;
      } else if (pointPosition >= 5 && pointPosition < 8) {
        pointRadiusDistanceX = 1;
        pointRadiusDistanceY = pointRadius / 2;
      } else if (pointPosition >= 9 && pointPosition < 11) {
        pointRadiusDistanceX = -0.5;
        pointRadiusDistanceY = 1.2;
      } else if (pointPosition == 8) {
        pointRadiusDistanceX = -1.2;
        pointRadiusDistanceY = 0.8;
      } else if (pointPosition >= 11 && pointPosition <= 13) {
        pointRadiusDistanceX = -0.9;
        pointRadiusDistanceY = -1;
      }
      setCoordinateInListOfPoints(ang, pointPosition, distanceBetweenBorderAndPointZero, pointRadiusDistanceX, pointRadiusDistanceY);
    } 
    ctx.rotate(ang);
    ctx.translate(0, -radius);
    ctx.rotate(-ang);         
    ctx.beginPath();
    ctx.arc(Math.cos(ang) + distanceBetweenBorderAndCircle, Math.sin(ang) + distanceBetweenBorderAndCircle, pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = color;      
    ctx.fill();          
    if (text != null) {
      writeCriteriaValue(text);
    }
    ctx.rotate(ang);
    ctx.translate(0, radius);
    ctx.rotate(-ang);      
  }

  function drawRadarBackgroundLine(ang, radius, color,) {
    ctx.beginPath();
    ctx.moveTo(distanceBetweenBorderAndCircle, distanceBetweenBorderAndCircle);
    ctx.lineTo(distanceBetweenBorderAndCircle + radius * Math.cos(ang), distanceBetweenBorderAndCircle + radius * Math.sin(ang));
    ctx.strokeStyle = color;
    ctx.stroke();      
  }
  
  function dispersePointsAndLines(ang, angLines, num){
    /* Line */
    drawRadarBackgroundLine(angLines, radius * factorReduceCircles, whiteColor);
    /* Point with segments names */
    var dimension = getDimension(num - 1);
    var criteria = getCriteria(num - 1);
    drawPoint(ang, radius * factorReduceCircles, grayColor, pointRadiusAnswer, false, (num - 1), dimensions[dimension].criterias[criteria].segment);
    /* Point with segments values */
    for (var count = 1; count < circleSizes.length; count++) {
      drawPoint(ang, circleSizes[count - 1], grayColor, pointRadiusAnswer, false, (num - 1));
    }
    /* Answers */
    drawPoint(ang, circleSizes[answers[num - 1] - 1], dispersionColor, pointRadiusAnswer, true, (num - 1));
  }

  function drawLinesBetweenPoints(){
    var circleSizesLength = circleSizes.length;
    var answerIndex = 0;
    ctx.beginPath();
    /* 5 segments part - Left side of up part of circle */
    /* Market */
    var num = -5;
    for (; num < 0; num++) {
      for (answerIndex = 0; answerIndex < circleSizesLength; answerIndex++) {
        if (answersCoordinates[(num * -1) - 1][answerIndex].answer == true) {
          ctx.lineTo(answersCoordinates[(num * -1) - 1][answerIndex].x, answersCoordinates[(num * -1) - 1][answerIndex].y + 1.9);
        }
      }
    }
    /* Right side of up part of circle */
    /* Project */
    for (num = 6; num < 9; num++) {
      for (answerIndex = 0; answerIndex < circleSizesLength; answerIndex++) {
        if (answersCoordinates[(num) - 1][answerIndex].answer == true) {
          ctx.lineTo(answersCoordinates[(num) - 1][answerIndex].x - 2, answersCoordinates[(num) - 1][answerIndex].y);
        }
      }
    }
    /* Right side of bottom part of circle */
    /*Inovation */
    for (num = -11; num < -8; num++) {
      for (answerIndex = 0; answerIndex < circleSizesLength; answerIndex++) {
        if (answersCoordinates[(num * -1) - 1][answerIndex].answer == true) {
          ctx.lineTo(answersCoordinates[(num * -1) - 1][answerIndex].x + 1.8, answersCoordinates[(num * -1) - 1][answerIndex].y - 1.7);
        }
      }
    }
    /* Left side of bottom part of circle */
    /* Team */
    for (num = -14; num < -11; num++) {
      for (answerIndex = 0; answerIndex < circleSizesLength; answerIndex++) {
        if (num < -10) {
          if (answersCoordinates[(num * -1) - 1][answerIndex].answer == true) {
            ctx.lineTo(answersCoordinates[(num * -1) - 1][answerIndex].x + 2, answersCoordinates[(num * -1) - 1][answerIndex].y + 1.9);
          }
        } else {
          if (answersCoordinates[0][answerIndex].answer == true) {
            ctx.lineTo(answersCoordinates[0][answerIndex].x + 1.9, answersCoordinates[0][answerIndex].y + 1.9);
          }
        }
      }
    } 
    ctx.closePath();
    ctx.fillStyle = magentaColor;
    ctx.globalAlpha = 0.5;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = magentaColor;
    ctx.lineWidth = 3;
    ctx.stroke();
  }    

  ctx.translate(radius, radius);

  var ang = 0;
  var num = 0;

  /* 5 segments part - Left side of up part of circle */
  /* Market */
  for (num = -5; num < 0; num++) {
    ang = num * Math.PI / 12; 
    dispersePointsAndLines(ang, ang + 42.417, (num*(-1)));
  }

  /* Right side of up part of circle */
  /* Project */
  for (num = 6; num < 9; num++) {
    ang = num * Math.PI / 6;
    ang = ang - 40.57;
    dispersePointsAndLines(ang, ang + 42.417, (num));    
  }

  /* Right side of bottom part of circle */
  /* Inovation */
  for (num = -11; num < -8; num++) {
    ang = num * Math.PI / 6;
    ang = ang - 250;
    dispersePointsAndLines(ang, ang + 42.417, (num*(-1)));
  }

  /* Left side of bottom part of circle */
  /* Team */
  for (num = -14; num < -11; num++) {
    ang = num * Math.PI / 6;
    ang = ang + 350;
    dispersePointsAndLines(ang, ang + 42.417, (num*(-1)));
  } 
  
  /* Vertical line */
  ctx.beginPath();
  ctx.moveTo(distanceBetweenBorderAndCircle, -(distanceBetweenBorderAndCircle + radius));
  ctx.lineTo(distanceBetweenBorderAndCircle, (distanceBetweenBorderAndCircle * 2 + radius));
  ctx.strokeStyle = grayColor;
  ctx.stroke();

  /* Horizontal line */
  ctx.beginPath();
  ctx.moveTo(-(radius), distanceBetweenBorderAndCircle);
  ctx.lineTo((radius * 2), distanceBetweenBorderAndCircle);
  ctx.strokeStyle = grayColor;
  ctx.stroke();  

  /* Line between answers points */
  ctx.translate(-circleSizes[circleSizes.length - 1] / factorReduceCircles, -circleSizes[circleSizes.length - 1] / factorReduceCircles);
  drawLinesBetweenPoints();     
}

function verifyIfIsMobile() {
  return window.innerWidth < 768;
}

function getDimension(positionElement){
  var dimension = 0;
  if (positionElement >= 0 && positionElement <= 4) {
    dimension = 0;
  } else if (positionElement > 4  && positionElement < 8) {
    dimension = 1;
  } else if (positionElement >= 8 && positionElement < 11) {
    dimension = 2;
  } else if (positionElement >= 11 && positionElement < 14) {
    dimension = 3;
  }
  return dimension;
}

function getCriteria(positionElement) {
  var criteria = 0;
  var criteriaOfPositionElementInRelationWithItDimension = {
    0: [0, 5, 8, 11], /* The first criteria happens in this input ranges  */
    1: [1, 6, 9, 12],
    2: [2, 7, 10, 13],
    3: [3], /* The fourth criteria happens in this input range */
    4: [4]
  }
  for (var key in criteriaOfPositionElementInRelationWithItDimension){
    if (criteriaOfPositionElementInRelationWithItDimension[key].indexOf(positionElement) != -1){
      criteria = parseInt(key);
      break;
    }
  }    
  return criteria;
}

function drawRectangleAroundTextTooltip(xStart, yStart, xEnd, yEnd){
  ctx.beginPath();
  ctx.fillStyle = "#cc1b59";
  ctx.rect(xStart, yStart, xEnd, yEnd);
  ctx.fill(); 
}

function wrapText(text, x, y, maxWidth, lineHeight, textColor) {
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  var isMobile = verifyIfIsMobile();
  ctx.font = (isMobile ? 7 : 10) + "px arial";
  ctx.fillStyle = textColor; 
  var words = text.split(' ');
  var line = '';
  for (var count = 0; count < words.length; count++) {
    var testLine = line + words[count] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && count > 0) {
      ctx.fillText(line, x, y);
      line = words[count] + ' ';
      y += lineHeight;
    }else{
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function openTooltipPointCanvas(x, y, text, mustHaveRectangle = true){
  var textWidth = ctx.measureText(text).width;
  var textColor = (mustHaveRectangle == true ? "#FFF": "#000");
  drawRectangleAroundTextTooltip((x - 5), (y - 5), (ctx.measureText(text).width + 10), (35 + 10));
  wrapText(text, x + (textWidth / 2), y, (textWidth / 2), 10, textColor);
}

function closeTooltipPointCanvas(){
  generateCanvas();
}

function mouseOutOfCanvasPosition(){
  generateCanvas();
}

function getMouseCanvasPosition(event){
  var pointRadius = pointRadiusAnswer * 1.4;
  var bound = canvas.getBoundingClientRect();
  var mouseX = event.clientX - bound.left - canvas.clientLeft;
  var mouseY = event.clientY - bound.top - canvas.clientTop;

  var mouseXRound = parseFloat(mouseX.toFixed(2));
  var mouseYRound = parseFloat(mouseY.toFixed(2));

  // console.log(mouseXRound + " " + mouseYRound);

  for (var countCoordinate = 0, answersCoordinatesLength = answersCoordinates.length; countCoordinate < answersCoordinatesLength; countCoordinate++){
    for (var pointIndex = 0; pointIndex < 5; pointIndex++){ 
      /* Check if coordinate match with user mouse position */ 
      var coordinate = answersCoordinates[countCoordinate][pointIndex];
      if (!coordinate.x) {
        return;
      }        
      var coordinateXRound = parseFloat(coordinate.x.toFixed(2));
      var coordinateXRoundWithoutPointSize = parseFloat(coordinate.x.toFixed(2)) - pointRadius;
      var coordinateXRoundWithPointSize = parseFloat(coordinate.x.toFixed(2)) + pointRadius;
      var coordinateYRound = parseFloat(coordinate.y.toFixed(2));
      var coordinateYRoundWithoutPointSize = parseFloat(coordinate.y.toFixed(2)) - pointRadius;
      var coordinateYRoundWithPointSize = parseFloat(coordinate.y.toFixed(2)) + pointRadius;
      if (
        ((
          mouseXRound >= coordinateXRound &&  
          mouseXRound <= coordinateXRoundWithPointSize
        ) || 
        (
          mouseXRound >= coordinateXRoundWithoutPointSize &&
          mouseXRound <= coordinateXRoundWithPointSize
        ))
        &&
        ((
          mouseYRound >= coordinateYRound &&
          mouseYRound <= coordinateYRoundWithPointSize
        ) ||
        (
          mouseYRound >= coordinateYRoundWithoutPointSize &&
          mouseYRound <= coordinateYRoundWithPointSize
        ))
      ){          
        var dimension = dimensions[getDimension(countCoordinate)];
        var criteria = getCriteria(countCoordinate);
        closeTooltipPointCanvas();
        openTooltipPointCanvas(coordinateXRound, coordinateYRound, dimension.criterias[criteria].value[pointIndex]);              
      }
    }      
  }
}
/* Gabriel Tessarini */