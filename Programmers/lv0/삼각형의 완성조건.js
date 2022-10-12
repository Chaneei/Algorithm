function solution(sides) {
    const triangle = sides.sort();
    return triangle[2] < triangle[0]+triangle[1] ? 1 : 2
}
