 'use strict';

 var artists,
 	employees;

 function initData () {
 	employees = [
 		{
 			name: 'Jo Hughes', 
 			job: 'student'
 		}, 
 		{
 			name: 'Fran Hemway', 
 			job: 'Engineer'
 		}, 
 		{
 			name: 'Frank Prosper', 
 			job: 'student'
 		}, 
 		{
 			name: 'Eliza Duschkell', 
 			job: 'artist'
 		}
 	];
 };

 function filterEmplyeeByType (employees, employeeToFilter) {
 	var index,
 		filteredData,
 		totalEmployees;

 	filteredData = [];
 	totalEmployees = employees.length;

 	for (index = 0; index < totalEmployees; index++ ) { 
 		if (employees[index].job === employeeToFilter) {
 			filteredData.push(employees[index]);
 		}
 	}

 	return filteredData;
 };

 function printFilteredEmployees(employees, title) {
 	var index,
 		totalEmployees;

 	totalEmployees = employees.length;

 	document.writeln(title + '<br>');
 	for (index = 0; index < totalEmployees; index++) {
 		document.writeln(employees[index].name + '<br>');
 	}

 	document.writeln('<br><br>');
 };

 function print(employees, employeeType, title) {
 	var filteredData;

 	filteredData = filterEmplyeeByType(employees, employeeType);
 	printFilteredEmployees(filteredData, title);
 };

 initData();
 print(employees, 'student', 'Students:');
 print(employees, 'artist', 'Artists:');
