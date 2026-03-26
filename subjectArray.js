let subjects = ["Maths", "English", "Science", "Histroy", "Civic"];
function subjectLength(){
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].length > 5){
            console.log(subjects[i])
        }
    }
    
}
subjectLength()