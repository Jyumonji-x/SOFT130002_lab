/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/
function testTime(){
    return function(){
        let a =1;
        console.log(a);//开始时便输出1
        let time;
        let advance = false;//advance判断是否是提前结束的
        if(Math.floor((60-new Date().getSeconds())/5) < 10) advance=true;
        time=Math.min(10,Math.floor((60-new Date().getSeconds())/5));//确定要循环的次数
        for(let i=0;i<time;i++){
            setTimeout(function(){a*=2;console.log(a)},5000*(i+1),);//先执行完指令之后，根据timeout的时间表现变化次数
        }
        if(advance) {
            setTimeout(function(){console.log('到达一分钟提前结束')},5000*time);
        }
    }();
}

console.log("第1个:testTime();");
testTime();//测试
/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let telFitter=/^[0-9]{11}$/;
    let mailFitter=/^[\w]+(\.[\w]+)*@[\w]+(\.[\w]+)+$/;
    let telFit=telFitter.test(telephone);
    let mailFit=mailFitter.test(mail);
    if(telFit&&mailFit){
        console.log("Both the telephone and the mail are right.");
    }
    else if(telFit&&!mailFit){
        console.log("The telephone is right and the mail is wrong!");
    }
    else if(!telFit&&mailFit){
        console.log("The telephone is wrong and the mail is right!");
    }
    else{
        console.log("Both the telephone and the mail are wrong!");
    }
}
console.log("第2个(testMail('18001851517','19302010015@fudan.edu.cn');):");
testMail('18001851517','19302010015@fudan.edu.cn');

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    // let result = [];
    // for(let i =0;i<str.length;i++){
    //     let slicedStr = str.slice(i,str.length-1);
    //     let res = /([\w]+)\s\1/ig.exec(slicedStr);//仅返回第一个匹配到的值
    //     if(res!==null){
    //         result.push(res);
    //     }
    // }
    // return result;
    let result = [];
    while(/^[\w]+\s/.exec(str)!==null){
        let res=/^([\w]+)\s\1/i.exec(str);
        if (res!==null){
            result.push(res[0]);
        }
        str = str.replace(/^[\w]+\s/,'');
    }
    return result;
}
console.log("第3个(console.log(testRedundancy('aa aa aa b b b going up up'));):");
console.log(testRedundancy('aa aa aa b b b going up up'));

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/

function testKeyBoard(wantInput, actualInput) {
    let result = new Set;//Set中不会存入重复的值
    wantInput=wantInput.toLowerCase();
    actualInput=actualInput.toLowerCase();
    let i = 0;
    let j = 0;
    while(i<actualInput.length){
        if(wantInput[j]===actualInput[i]){
            i++;
            j++;
        }
        else{
            result.add(wantInput[j].toUpperCase());
            j++;//如果不一样，则扫描wantInput的内容，并判断是否与此位actual相同
        }
    }
    return result;
}
console.log("第4个(testKeyBoard(\"7_This_is_a_test\",\"_hs_s_a_es\")):");
console.log(testKeyBoard("7_This_is_a_test","_hs_s_a_es"));
/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let arr =str.split(" ");
    let reverse=[];
    for(let i =arr.length-1;i>=0;i--){
        if(arr[i]!==""){
            reverse.push(arr[i]);
        }
    }
    return reverse.join(" ");//用空格符分割开并输出
}
console.log("第5个(testSpecialReverse(\"  the   sky    is     blue   \")):");
console.log(testSpecialReverse("  the   sky    is     blue   "));
/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let numsMap = new Map();
    let result =[];
    for (let i = 1; i <= nums.length; i++) {//从i=1开始，是因为i=0时似乎无法在get时查找到
        if(numsMap.has(nums[i-1])){
            numsMap.get(nums[i-1]).push(i);
        }
        else{
            numsMap.set(nums[i-1],[i]);//数字存入numsMap
        }
        if (numsMap.has(target-nums[i-1])) {//判断是否有符合条件的数值对

            for(let j=0;j<numsMap.get(target-nums[i-1]).length;j++){
                let res = [];
                res.push(i-1);
                res.push(numsMap.get(target-nums[i-1])[j]-1);
                result.push(res);
            }

        }
    }
    return result;
}
console.log("第6个(twoSum([1,1,3,3,2,2,4,4],5)):");
console.log(twoSum([1,1,3,3,2,2,4,4],5));

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let strMap = new Map;
    let result = 0;
    let a = 0;
    for(let i =0;i<str.length;i++){
        if(strMap.get(str[i])){
            result = Math.max(result,a);
            a = 1;
            strMap = new Map;
            strMap.set(str[i],true);
        }
        else {
            strMap.set(str[i],true);
            a++;
        }
    }
    result = Math.max(result,a);
    return result;
}
console.log("第7个(lengthOfLongestSubstring(\"abbbce\")):");
console.log(lengthOfLongestSubstring("abbbce"));
/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function(){
        console.log("Hi,i am a developing country.")
    }
}
function PoorCountry(){
    this.saySad = function(){
        console.log("I am a sad poor country.")
    }
}
PoorCountry.prototype = new Country();
function DevelopedCountry(){
    this.sayHappy = function() {
        console.log("I am a Happy developed country.");
    }
}
DevelopedCountry.prototype = Object.create(Country);

console.log("第8个:继承类");
let developingCountry = new DevelopingCountry();
developingCountry.sayHi();
let poorCountry = new PoorCountry();
poorCountry.saySad();
let developedCountry = new DevelopedCountry();
developedCountry.sayHappy();