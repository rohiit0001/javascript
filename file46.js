const Students = [
    { id: 1, name: "rohit", attendance: 90, score: 80 },
    { id: 2, name: "tarun", attendance: 61, score: 70 }
];

function GetStudentInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = Students.find((student) => student.id === id);

            if (found) resolve("Student Info Resolved");
            else reject("Student does not Exist");

        }, 2000);
    });
}

function GetExamInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = Students.find(
                (student) => student.id === id && student.score >= 60
            );

            if (found) resolve("Exam Info Resolved");
            else reject("Score is too low");

        }, 2000);
    });
}

function GetAttendanceInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = Students.find(
                (student) => student.id === id && student.attendance >= 65
            );

            if (found) resolve("Attendance Info Resolved");
            else reject("Attendance is too low");

        }, 2000);
    });
}

async function main() {
    try {
        const StudentId = 2;

        const result = await Promise.all([
            GetStudentInfo(StudentId),
            GetAttendanceInfo(StudentId),
            GetExamInfo(StudentId)
        ]);

        console.log(result);
        console.log("Student has been promoted");

    } catch (err) {
        console.log("Error:", err);
    }
}

main();
