// ./index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 8cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 30cm, 30cm e 30cm: ${Ex.triangleCheck(30, 30, 30)}`);

// para fixar 

console.log(`D: 32, d: 18 => ${Ex.areaLosango(32, 18)}`);
console.log(`D: 200, d: 50 => ${Ex.areaLosango(200, 50)}`);
console.log(`D: 75, d: 25 => ${Ex.areaLosango(75, 25)}`);

console.log(`B: 100,  b: 70, h:50 => ${Ex.areaTrapezio(100, 70, 50)}`);
console.log(`B: 75, b: 50, h:35 => ${Ex.areaTrapezio(200, 50, 35)}`);
console.log(`B: 150,  b: 120, h:80 => ${Ex.areaTrapezio(75, 25, 80)}`);


console.log(`r:35 => ${Ex.areaCirculo(35)}`);
console.log(`r:100 => ${Ex.areaCirculo(100)}`);
console.log(`r:12.5 => ${Ex.areaCirculo(12.5)}`);


