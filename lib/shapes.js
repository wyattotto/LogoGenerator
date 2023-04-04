class shape {
    constructor(LogoName,FontColor,shape,color){
    this.LogoName = LogoName,
    this.FontColor = FontColor,
    this.color = color,
    this.shape = shape
    }
    SVG() {
        return `<svg version="1.1"> 
        ${this.render()}
        </svg>`
    }


    //     constructor(){
    //     this.color=""
    // }  
    // setColor(color){
    //     this.color=(data.color);
    // }
}
class triangle extends shape{
    constructor(LogoName,FontColor,color){
        super(LogoName,FontColor,"triangle",color)
    }
    render(){
        return ` <polygon points="250,60 100,400 400,400" height="100%" width="100%" fill="${this.color}">
        <text font-size"150" text-anchor="middle" fill="${this.FontColor}">${this.LogoName}</text>`
    }
}
class square extends shape{
    constructor(LogoName,FontColor,color){
        super(LogoName,FontColor,"square",color)
    }
    render(){
        return`
        <rect x="50" y="20" rx="20" ry="20" width="150" height="150"fill="${this.color}"/>
        <text font-size"150" text-anchor="middle" fill="${this.FontColor}">${this.LogoName}</text>
      `
    }
}
class circle extends shape {
    constructor(LogoName,FontColor,color){
        super(LogoName,FontColor,"circle",color)
    }
    render(){
      return  `<circle cx="150" cy="150" r="140" stroke="black" stroke-width="3" fill="${this.color}"/>
            <text font-size"150" text-anchor="middle" fill="${this.FontColor}">${this.LogoName}</text>
`
    }
};

const generateLogo = ({LogoName,FontColor,color,shape})=> {
switch (shape) {
    case `square`:
        const NewSquare = new square(LogoName,FontColor,color);
        return NewSquare.SVG();
    case `triangle`:
        const NewTriangle = new triangle(LogoName,FontColor,color);
        return NewTriangle.SVG();
    case `circle`:
        const NewCircle = new circle(LogoName,FontColor,color);
        return NewCircle.SVG();
}
}

module.exports = {circle, square, triangle, generateLogo, shape}