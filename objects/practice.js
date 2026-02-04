let plane = {
    name: "cartesian plane",
    origin: {
        x: 0,
        y: 0
    },
    points: [
        { x: 2, y: 4 },
        { x: 1, y: 1 },
        { x: -3, y: 2 },
        { x: 0, y: 1 }
    ],
    onAnAxis: function(x, y) {
        return x == 0 || y == 0;
    },
    distance: function(point1, point2) {
        return Math.sqrt((point1.x - point2.x) ** 2 +
                         (point1.y - point2.y) ** 2);
    }
}

plane.title = "My Plane";

//#1
console.log(plane.name);

//#2
console.log(`(${plane.origin.x}, ${plane.origin.y})`);

//#3
for (let i = 0; i < plane.points.length; i++) {
    const point = plane.points[i];
    const x = point.x;
    const y = point.y;

    console.log(`(${x}, ${y})`);
}

//#4
const p1 = { x: 3, y: 2 }
const p2 = { x: 13, y: -4 }

const dist = plane.distance(p1, p2);
console.log(`The distance between the points is ${dist}`);

//you can "grow" objects naturally
const cup = {};

cup.color = "Blue";
cup.drink = () => console.log("You drink the liquid");
cup.ouncesCapacity = 10;
cup.warm = true;

//call the method
cup.drink();

//the for-in loop iterators the properties of an object
for (let prop in cup) {
    console.log(cup[prop]);
}