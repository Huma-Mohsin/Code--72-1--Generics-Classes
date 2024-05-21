// In TypeScript, A class is a blueprint for creating objects with predefined properties and methods. It allows you to define the structure and behavior of objects in a more organized and reusable way. 

class Box<T> { // Here Class is a Keyword to declare a class. while Box is a name of class and <T> represents any type , so <T> can be replaced by string,boolean,number etc. 
  

        // Private property declaration with a generic type
        private content!: T;
        //private: Access modifier indicating that the property content can only be accessed within the class.
        //content: Name of the property.
        //T: Type of the property, defined by the generic type parameter T.

        // Method to set the content
        setContent(content: T): void {
            this.content = content;  // Assign the parameter content to the class property content
        }
        //setContent(content: T): Method that accepts a parameter content of type T.
//: void: Specifies that the method does not return a value.
//this.content = content: Assigns the value of the parameter content to the class property content.
    
        // Method to get the content
        getContent(): T {
            return this.content;  // Return the value of the class property content
        }
    }
    //getContent(): Method that returns a value of type T.
//: T: Specifies that the method returns a value of type T.
//return this.content: Returns the value of the class property content.

//Example
// creating an instance of a class of type number.
const num_box= new Box<number>();
num_box.setContent(1234567);
console.log(num_box.getContent());

//creating another instance of class of type string.
const str_box=new Box<string>();
str_box.setContent("Generic Class");
console.log(str_box.getContent());

//creating another instance of class of type boolean.
const bool_box=new Box<boolean>();
bool_box.setContent(true);
console.log(bool_box.getContent());

//or we can use a class like this:-
interface student{
    name:string;
    reg_num:number;
    course:string;
}//This interface ensures that any object marked as a Student must have these three properties, each with the specified data types. It helps in type checking and ensuring consistency when working with objects representing student.

let student_box= new Box<student>();//declares a variable named student_box then creates a new instance of the Box class with Student as the type parameter. This means student_box is now a Box that can hold objects of type Student

student_box.setContent({name:"Huma Mohsin",reg_num:1234567,course:"GEN-AI"});// calls the setContent method of the Box class instance student_box and  sets the content of student_box to the student object provided.

console.log(student_box.getContent());//student_box.getContent() calls the getContent method of the Box class instance student_box, retrieving the content stored inside it.The content is then logged to the console.      //Author-Huma Mohsin