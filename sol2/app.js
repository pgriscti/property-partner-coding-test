'use strict';

var artistsFiltered,
	artistsWorker,
	employees, 
	studentsFiltered,
	studentsWorker;

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

function print(data, title) {
	var index,
		totalData;

	totalData = data.length;

	document.writeln(title + '<br>');
	for (index = 0; index < totalData; index++) {
		document.writeln(data[index].name + '<br>');
	}

	document.writeln('<br><br>');
};


function processData (data, func) {
	var index,
		filteredData,
		totalElements;

	filteredData = [];
	totalElements = data.length;

	for (index = 0; index < totalElements; index++) {
		if (func(data[index])) {
			filteredData.push(data[index]);
		}
	}

	return filteredData;
}

artistsWorker = function (employee) {
	return employee.job === 'artist';
};

studentsWorker = function (employee) {
	return employee.job === 'student';
};


initData();

studentsFiltered = processData(employees, studentsWorker);
artistsFiltered = processData(employees, artistsWorker);

print(studentsFiltered, 'Students:');
print(artistsFiltered, 'Artists:');
