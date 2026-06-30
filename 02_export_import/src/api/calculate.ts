// 이름을 지정한 내보내기 실행 해보겟다. 

export const PI: number = 3.14 // PI 이름으로 내보내기 

export const getArea = (radius: number) => PI * Math.pow(radius, 2); // getArea 이름으로 내보내기

// 여러개를 하나로 모아서 내보내기 
interface FeatureType{
    add: (a: number, b: number) => number;
    sub: (a: number, b: number) => number;
    mul: (a: number, b: number) => number;
    div: (a: number, b: number) => number;
}

export const feature: FeatureType = {
    add: (a ,b) => a+b,
    sub: (a ,b) => a-b,
    mul: (a ,b) => a*b,
    div: (a ,b) => a/b
}