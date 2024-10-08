class Point {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const Point[] = [
     Point[1](1, 1, 1),    // 0: front top right
     Point[2](-1, 1, 1),   // 1: front top left
     Point[3](-1, -1, 1),  // 2: front bottom left
     Point[4](1, -1, 1),   // 3: front bottom right
     Point[5](1, 1, -1),   // 4: back top right
     Point[6](-1, 1, -1),  // 5: back top left
     Point[7](-1, -1, -1), // 6: back bottom left
     Point[8](1, -1, -1)   // 7: back bottom right
];
const face: Point[][] = [
    [Point[1], Point[2], Point[3], Point[4]], // Front face
    [Point[5], Point[6], Point[7], Point[8]], // Back face
    [Point[1], Point[5], Point[8], Point[4]], // Right face
    [Point[2], Point[6], Point[7], Point[3]], // Left face
    [Point[1], Point[2], Point[6], Point[5]], // Top face
    [Point[4], Point[3], Point[7], Point[8]]  // Bottom face
];
