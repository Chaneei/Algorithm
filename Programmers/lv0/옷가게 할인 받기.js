function solution(price) {
    let result = 0;
    if(price >= 100000 && price<300000){
        return result = price - price* 0.05;
    }else if(price < 500000 && price >= 300000){
        return result = price - price* 0.1;
    }else if(price>=500000){
        return result = price - price* 0.2;
    }
}
