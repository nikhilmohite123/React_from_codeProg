const memo={};

export function finonaciNumber(n){
    if(n in memo){
    return memo[n];
    }
    if(n<=1){
        return n;
    }

    memo[n]=finonaciNumber(n-1)+finonaciNumber(n-2);
    return memo[n];
}
