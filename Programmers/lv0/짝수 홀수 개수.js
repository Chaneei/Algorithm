function solution(num_list) {
    let a = num_list.filter((item)=> item % 2 === 0);
    let b = num_list.filter((item)=> item % 2 === 1);
    return [a.length, b.length]
}
