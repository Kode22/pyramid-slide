
drawPyramid(10);


function drawPyramid(height) {


    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
     
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // you can delete this now
        // console.log(rowStr)
        const pyramidLumps = document.getElementById('pyramid')

        var newItem = document.createElement('p');
        pyramidLumps.appendChild(newItem);
        newItem.innerText = rowStr;

    }

}
//     var pyramidSymbol = "#"
//     for (let i = 1; i <= height; i++){
//         var numberSpaces = height - i
//         var spaceString = ""
//         for (let j =1; j <= numberSpaces; j++){
//             spaceString += " "
//         }
//         pyramidSymbol += "#"
//         console.log(spaceString + pyramidSymbol);
//     }


// }

