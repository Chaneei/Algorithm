function solution(price) {
    if(price >= 100000 && price<300000){
          return price * 0.95<<0;
    }else if(price < 500000 && price >= 300000){
        return price * 0.9 <<0;
    }else if(price>=500000){
        return price * 0.8<<0;
    }else{
        return price;
    }
}
