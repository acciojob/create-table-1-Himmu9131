function insert_Row() {
    //Write your code here
	const table=document.getElementById("sampleTable");
	const newRow = table.insertRow(0); 
	const firstCell=newRow.insertCell(0);
	const secondCell=newRow.insertCell(1);
	firstCell.textContent='New Cell1';
	secondCell.textContent='New Cell2';
	
  
  
}
