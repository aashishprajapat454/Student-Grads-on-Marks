// assing student marks
let studentMarks = {
	Akash: 96,
	Videsh: 73,
	Virendra: 70,
	Viksa: 77,
	Ankur: 75,
	Sakshi: 80,
	Ekta: 80,
	Aashish: 23,
	Ramlal: 45,
	Akshay: 33
}
// assing Student grads on marks bases
function assingGrade() {
	for (let marks in studentMarks) {
		if (studentMarks[marks] >= 90) {
			console.log(`dear ${marks} and your marks is ${studentMarks[marks]} with A Grade`);
		}
		else if (studentMarks[marks] <= 89 && studentMarks[marks] >= 70) {
			console.log(`dear ${marks} and your marks is ${studentMarks[marks]} with B Grade`);
		}
		else if (studentMarks[marks] <= 69 && studentMarks[marks] >= 50) {
			console.log(`dear ${marks} and your marks is ${studentMarks[marks]} with C Grade`);
		}
		else if (studentMarks[marks] <= 50) {
			console.log(`dear ${marks} and your marks is ${studentMarks[marks]} with D Grade`);
		}
	}

}
// call the funtion
assingGrade();
