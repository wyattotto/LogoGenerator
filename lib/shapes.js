class shape {
    constructor(LogoName,FontColor,shape,color){
    this.LogoName = LogoName,
    this.FontColor = FontColor,
    this.color = color,
    this.shape = shape
    }
    SVG() {
        return `<svg version="1.1 width="500"  hight="500">
        ${this.render()}
        </svg>`
    }


        constructor(){
        this.color=""
    }  
    setColor(color){
        this.color=(data.color);
    }
}
class triangle extends shape{
    constructor(LogoName,FontColor,shape,color){
        super(LogoName,FontColor,shape,color)
    }
    render(){
        return `<svg polygon points="250,60 100,400 400,400" height="100%" width="100%" fill="${data.color}">
        <text font-size"150" text-anchor="middle" fill="${data.FontColor}">${data.LogoName}</text>`
    }
}
class square extends shape{
    constructor(LogoName,FontColor,shape,color){
        super(LogoName,FontColor,shape,color)
    }
    render(){
        return`<svg width="400" height="180">
        <rect x="50" y="20" rx="20" ry="20" width="150" height="150"fill="${data.color}"/>
        <text font-size"150" text-anchor="middle" fill="${data.FontColor}">${data.LogoName}</text>
      </svg>`
    }
}
class circle extends shape {
    constructor(LogoName,FontColor,shape,color){
        super(LogoName,FontColor,shape,color)
    }
    render(){
      return  `<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${data.color}" />
  <text font-size"150" text-anchor="middle" fill="${data.FontColor}">${data.LogoName}</text>
</svg>`
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

module.exports = {circle, square, triangle, generateLogo}