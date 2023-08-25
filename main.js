

class Rectangle{
	
	constructor(width, height){
		
		this.width = width;
		
		this.height = height;
		
	}
	
	
	get area(){
		
		return this.findArea;
		
	}
	
	get findArea(){
		
		return this.width * this.height;
		
	}
	
}

findRect = new Rectangle(10, 20);

console.log(findRect.area);