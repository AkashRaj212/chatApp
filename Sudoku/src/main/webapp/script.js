const solveBtn = document.getElementById('solve-btn');
const clearBtn = document.getElementById('clear-btn');
const inputFields = document.querySelectorAll('.input-field');

// Add event listeners to buttons
solveBtn.addEventListener('click', solveSudoku);
clearBtn.addEventListener('click', clearSudoku);

function changeColor(e){
	if(e.value!=""){
		e.className = "input-field r"
	}else{
		e.className = "input-field"
	}
    
    console.log(e.parentNode.className)

}



function solveSudoku() {
  // Create 2D array to hold input values
  const sudoku = [];
  let count = 0;
  for (let i = 0; i < 9; i++) {
    sudoku[i] = [];
    for (let j = 0; j < 9; j++) {
      const val = inputFields[count].value.trim();
      if (val === '') {
        sudoku[i][j] = 0;
      } else {
        sudoku[i][j] = parseInt(val);
      }
      count++;
    }
  }

  // Call solver function with input values
  const solvedSudoku = solve(sudoku);

  // Update input fields with solved values
  count = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      inputFields[count].value = solvedSudoku[i][j];
      count++;
    }
  }
}

function clearSudoku() {
    
    inputFields.forEach(field => {
    field.value = '';
    field.className = "input-field"  
    });
    }
    
    function solve(sudoku) {
		
		
     console.log("aa")
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
  
      if(this.readyState == 4 && this.status == 200){
      row = this.responseText.split("@");
      solveSudoku=[];
      for(let i=0;i<row.length-1;i++){
		  solveSudoku[i]=[];
		  col=row[i].split(" ");
		  for(let j=0;j<col.length-1;j++){
			  console.log(col[j]);
			   solveSudoku[i][j]=col[j];
		  
	  }
	  }
console.log(solveSudoku);

      } 
  
    }
  
    xhr.open("POST", "http://localhost:8081/Sudoku/Solution", true);
  
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
      xhr.send("board="+sudoku);
    
    return solveSudoku;
    }