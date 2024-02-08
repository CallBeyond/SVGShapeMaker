class Shape{
    constructor(color){
        
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(text,textColor,color){
        super(color);
        this.text = text;
        this.textColor = textColor;

    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    } 

}
class Triangle extends Shape {
    constructor(text,textColor,color){
        super(color);
        this.text = text;
        this.textColor = textColor;

    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><polygon points="150, 18 244, 182 56, 182"   fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
class Square extends Shape {
    constructor(text,textColor,color){
        super(color);
        this.text = text;
        this.textColor = textColor;

    }
    render(){
        return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg" ><rect x="0" y="0" width="180px" height="180" fill="${this.color}" /><text x="90" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

}
module.exports={Circle,Square,Triangle}


