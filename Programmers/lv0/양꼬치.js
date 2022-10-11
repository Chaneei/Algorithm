function solution(n, k) {
    let drink = Math.floor(n / 10);
    let result;
    if(drink >= 0){
    result = (n * 12000 + k * 2000) - drink * 2000 ;
    }
    return result;
}
