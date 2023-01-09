import React, {useState} from "react"; //1. importar el hook useState
//use state = usar estado;
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
//Color Rojo
   const [color1,setColor1]= useState("");
   
    function encenderRojo() {
        if(color1 === "btn-danger"){
            setColor1("")
        }else {
        setColor1("btn-danger")
		setColor2(" ")
		setColor3(" ")
    }


}
//Color Amarillo
    const [color2,setColor2]= useState("")
function encenderAmarillo() {
    if(color2 === "btn-warning"){
        setColor2("")
		
    }else{
    setColor2("btn-warning")
	setColor1(" ")
		setColor3(" ")
}
}
 //Color Verde
const [color3,setColor3]= useState("")
function encenderVerde() {
    if(color3 === "btn-success"){
        setColor3("")
    }else{
    setColor3("btn-success")
	setColor1(" ")
		setColor2(" ")
}
}
    return (
		<div>
			<div className="bg-dark container" style={{width: 10, height: 150,}}> </div>
	  <div className="text-center d-flex flex-column bg-dark container rounded " style={{width: 80, height: 180,}}>
		
			<div><button className={"btn rounded-circle border-danger my-1 mx-1 mt-2 "+ color1} style={{width: 50, height: 50,}} onClick={encenderRojo}></button> </div>
			<div>
			<button className={"btn rounded-circle border-warning my- mx-1 "+ color2} style={{width: 50, height: 50,}} onClick={encenderAmarillo}></button>
				</div> 
			<div> 
			<button className={"btn rounded-circle border-success my-1 mx-1 "+ color3} style={{width: 50, height: 50,}} onClick={encenderVerde}></button>
			</div>
		

		</div> 
		</div>
    );
};

export default Home;

