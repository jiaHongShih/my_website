var myClass = {
    CST8116: {
        "code": "CST8116",
        "className": "Introduction to Computer Programming",
        "term": "01",
        "pic": "./img/course/programming.jpg",
        "intro": "Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field. Students develop introductory knowledge of computer programming with emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML Class Diagrams and testing, with the Java programming language used as a means to implement problem solution designs. Through an introduction to the Java programming language students use sequential structures, selection structures, repetition structures, variables, constants, methods, constructors, one-dimensional arrays, object-oriented programming, classes, objects, abstraction, encapsulation, inputs, outputs, coding conventions and documentation. Theory is reinforced with application by means of practical laboratory assessments."
    },
    CST8118: {
        "code": "CST8118",
        "className": "Computer Essentials",
        "term": "01",
        "pic": "./img/course/essential.jpg",
        "intro": "Maintaining a computer, using operating system and productivity software, and expressing related environmental and sustainability concerns, is an important part of working with Information Technology. Students explain computer hardware, and use operating system software to maintain, utilize, and secure a computer. Students practice the use of spreadsheet software to solve problems, use formulas, and visualize data with charts. Students discuss computer hardware and software with regards to financial and environmental sustainability. Theory is reinforced with application by means of practical laboratory assessments, including using virtualization software to install guest operating systems onto a host computer."
    },
    CST8215: {
        "code": "CST8215",
        "className": "Introduction to Database",
        "term": "01",
        "pic": "./img/course/database.jpg",
        "intro": "Databases are used to store data and are a core component of many information technology systems. Students learn the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database. Students design and create databases that are maintainable, secure and adaptable to change in business requirements, using normalization. Students become familiar with the functions of a Database Management System (DBMS) and its components in comparison with legacy systems and alternative information storage mechanisms."
    },
    CST8300: {
        "code": "CST8300",
        "className": "Achieving Success in Changing Environments",
        "term": "01",
        "pic": "./img/course/success.jpg",
        "intro": "Rapid changes in technology have created personal and employment choices that challenge each of us to find our place as contributing citizens in the emerging society. Life in the 21st century presents significant opportunities, but it also creates potential hazards and ethical problems that demand responsible solutions. Students explore the possibilities ahead, assess their own aptitudes and strengths, and apply critical thinking and decision-making tools to help resolve some of the important issues in our complex society with its competing interests."
    },
    ENL1813T: {
        "code": "ENL1813T",
        "className": "Communications I",
        "term": "01",
        "pic": "./img/course/communication.jpg",
        "intro": "Communication remains an essential skill sought by employers, regardless of discipline or field of study. Using a practical, vocation-oriented approach, students focus on meeting the requirements of effective communication. Through a combination of lectures, exercises, and independent learning, students practise writing, speaking, reading, listening, locating and documenting information and using technology to communicate professionally. Students develop and strengthen communication skills that contribute to success in both educational and workplace environments."
    },
    MAT8001C: {
        "code": "MAT8001C",
        "className": "Technical Mathematics for Computer Science",
        "term": "01",
        "pic": "./img/course/math.jpg",
        "intro": "The study of algebraic and transcendental functions is an essential prerequisite to Calculus. Students manipulate algebraic expressions, solve algebraic equations and linear systems and learn the properties of and graph algebraic and transcendental functions. Students investigate computer number systems in addition to Boolean algebra and logic to help solve problems involving computer systems. Students also study the addition and subtraction of vectors using vector components. Delivered in a modular format, this course is equivalent to the completion of all of the following math modules MAT8100 - A, B, C, D, E, F, and L."
    },
    CST2355: {
        "code": "CST2355",
        "className": "Database Systems",
        "term": "02",
        "pic": "./img/course/database.jpg",
        "intro": "Database systems can automate data processing tasks as well as tie into the security of information technology systems. Students acquire practical experience using market-leading object-relational database management systems like Oracle and MySQL. Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. Database concepts covered include advanced SQL, case structures, rollup and cube operations, metadata manipulation, data storage and retrieval, security and transaction control and data warehousing"
    },
    CST8102: {
        "code": "CST8102",
        "className": "Operating System Fundamentals (GNU/Linux)",
        "term": "02",
        "pic": "./img/course/linux.jpg",
        "intro": "Operating systems form the backbone of information technology systems coordinating the interaction between hardware and software. Students explore the basic concepts and components of Operating Systems (OS), and how they function and interact with hardware and software components. Students examine the details of operating system structures, process management, storage management, installation, configuration, and administration both in theory and through practical assignments based on the GNU/Linux operating system. Lab work is designed to implement the theory by developing skills using the powerful GNU/Linux command-line tools and utilities."
    },
    CST8284: {
        "code": "CST8284",
        "className": "Object Oriented Programming (Java)",
        "term": "02",
        "pic": "./img/course/programming.jpg",
        "intro": "Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts. Students explore object-oriented programming methodology using the Java programming language. Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered and reinforced with practical applications. Students explore the basics of data structures and algorithms as well as basic Graphical User Interface (GUI) programming."
    },
    CST8285: {
        "code": "CST8285",
        "className": "Web Programming",
        "term": "02",
        "pic": "./img/course/web.jpg",
        "intro": "The World Wide Web (WWW) has become an integrated part of everyday life. Students develop basic skills of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites."
    },
    ENL2019T: {
        "code": "ENL2019T",
        "className": "Technical Communication for Engineering Technologies",
        "term": "02",
        "pic": "./img/course/communication2.jpg",
        "intro": "The ability to communicate effectively in a technically-oriented interdisciplinary workplace is a foundational skill in an innovation-driven economy. Students are exposed to exercises and assignments designed to foster independent and collaborative critical thinking, research, writing, visual communication and presentation skills related to technical topics."
    },
    GEP1001: {
        "code": "GEP1001",
        "className": "Cooperative Education and Job Readiness",
        "term": "02",
        "pic": "./img/course/coop.jpg",
        "intro": "Students are guided through a series of activities that prepare them to conduct a professional job search and succeed in the workplace. Through a detailed orientation students learn the cooperative education program policies and procedures related to searching and securing a work term opportunity. Students identify their strengths and transferable skills and participate in workshop-style sessions that focus on cover letter and resume development, interview techniques and job search strategies. Students learn how to navigate a web-based resource centre, which is used to post employment and cooperative education job opportunities. Students reflect on workplace success, ethics and responsibilities."
    }
};

function filterForClass() {
    var selectElement = document.getElementById("level-filter");
    var selectedValue = selectElement.value;
    var filteredCourses;
    switch (selectedValue) {
        case "level-all":
            filteredCourses = Object.keys(originalMyClass).filter((key) => {
                return originalMyClass[key].term == "01" || originalMyClass[key].term == "02";
            }).reduce((obj, key) => {
                obj[key] = originalMyClass[key];
                return obj;
            }, {});
            break;
        case "level-1":
            filteredCourses = Object.keys(originalMyClass).filter((key) => {
                return originalMyClass[key].term == "01";
            }).reduce((obj, key) => {
                obj[key] = originalMyClass[key];
                return obj;
            }, {});
            break;
        case "level-2":
            filteredCourses = Object.keys(originalMyClass).filter((key) => {
                return originalMyClass[key].term == "02";
            }).reduce((obj, key) => {
                obj[key] = originalMyClass[key];
                return obj;
            }, {});
            break;
    }
    myClass = filteredCourses;
    printClass();
}



function sortClass() {
    // var selectElement = document.getElementById("sort-order");
    //     var sortOrder = selectElement.value;
    //     if (sortOrder === "low-to-high") {
    //         myClass.sort(function(a, b) {
    //             return a.term.localeCompare(b.term);
    //         });
    //     } else if (sortOrder === "high-to-low") {
    //         myClass.sort(function(a, b) {
    //             return b.term.localeCompare(a.term);
    //         });
    //     }
    //     printClass();
    var selectElement = document.getElementById("sort-order");
    var sortOrder = selectElement.value;
    var arrayOfObjects = [];
    for (var key in myClass) {
        if (myClass.hasOwnProperty(key)) {
            arrayOfObjects.push(myClass[key]);
        }
    }
    if (sortOrder === "low-to-high") {
        arrayOfObjects.sort(function (a, b) {
            return a.term.localeCompare(b.term);
        });
    } else if (sortOrder === "high-to-low") {
        arrayOfObjects.sort(function (a, b) {
            return b.term.localeCompare(a.term);
        });
    }
    myClass = arrayOfObjects;
    printClass();
}


var searchInput = document.getElementById('searchBar');
var searchButton = document.getElementById('searchButton');
function searchClass() {
    var searchText = searchInput.value.trim();
    searchCourses(searchText);
}

function searchCourses(keyword) {

    var searchResults = Object.keys(originalMyClass).filter(function (key) {
        return originalMyClass[key].className.toLowerCase().includes(keyword.toLowerCase()) ||
        originalMyClass[key].intro.toLowerCase().includes(keyword.toLowerCase()) ||
        originalMyClass[key].code.toLowerCase().includes(keyword.toLowerCase())
    }).reduce((obj, key) => {
        obj[key] = originalMyClass[key];
        return obj;
    }, {});

    myClass = searchResults;
    printClass();
}



function printClass() {
    var coursesContainer = document.getElementById('coursesDiv');
    var sibling = coursesContainer.nextElementSibling;
    while (sibling) {
        coursesContainer.parentNode.removeChild(sibling);
        sibling = coursesContainer.nextElementSibling;
    }
    var count = 0;
    for (var key in myClass) {
        var course = myClass[key];
        var inputElement = document.createElement('div');
        inputElement.id = `container${count}`;
        inputElement.className = "courses-container";
        inputElement.innerHTML = `
            <span>${course.term}</span>
            <span>${course.code}</span>
            <span>${course.className}</span>
            <span><img src="${course.pic}" alt="it is a picture of ${course.code} textbook"></span>
            <span>${course.intro}</span>`;
        if (count === 0) {
            var firstEle = document.getElementById('coursesDiv');
            firstEle.insertAdjacentElement("afterend", inputElement);
        } else {
            var lastEle = document.getElementById(`container${count - 1}`);
            lastEle.insertAdjacentElement("afterend", inputElement);
        }
        count++;
    }
}

printClass();
var originalMyClass;
window.onload = function () {
    originalMyClass = myClass;
};