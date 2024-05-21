// In TypeScript, A class is a blueprint for creating objects with predefined properties and methods. It allows you to define the structure and behavior of objects in a more organized and reusable way. 
var Box = /** @class */ (function () {
    function Box() {
    }
    //private: Access modifier indicating that the property content can only be accessed within the class.
    //content: Name of the property.
    //T: Type of the property, defined by the generic type parameter T.
    // Method to set the content
    Box.prototype.setContent = function (content) {
        this.content = content; // Assign the parameter content to the class property content
    };
    //setContent(content: T): Method that accepts a parameter content of type T.
    //: void: Specifies that the method does not return a value.
    //this.content = content: Assigns the value of the parameter content to the class property content.
    // Method to get the content
    Box.prototype.getContent = function () {
        return this.content; // Return the value of the class property content
    };
    return Box;
}());
//getContent(): Method that returns a value of type T.
//: T: Specifies that the method returns a value of type T.
//return this.content: Returns the value of the class property content.
//Example
// creating an instance of a class of type number.
var num_box = new Box();
num_box.setContent(1234567);
console.log(num_box.getContent());
//creating another instance of class of type string.
var str_box = new Box();
str_box.setContent("Generic Class");
console.log(str_box.getContent());
//creating another instance of class of type boolean.
var bool_box = new Box();
bool_box.setContent(true);
console.log(bool_box.getContent());
var student_box = new Box(); //declares a variable named student_box then creates a new instance of the Box class with Student as the type parameter. This means student_box is now a Box that can hold objects of type Student
student_box.setContent({ name: "Huma Mohsin", reg_num: 1234567, course: "GEN-AI" }); // calls the setContent method of the Box class instance student_box and  sets the content of student_box to the student object provided.
console.log(student_box.getContent()); //student_box.getContent() calls the getContent method of the Box class instance student_box, retrieving the content stored inside it.The content is then logged to the console.      //Author-Huma Mohsin
