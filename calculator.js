　//htmlのdisplayを取得し、変数に代入
let display = document.getElementById("display");
　//valueの文字の色を白くする
              document.getElementById("display").style.color="white";
  //value 値を受け取る変数
let input;
  //cancelFlagを立てるための変数
let cancelFlagMark = 1;
  //上と同じ
let cancelFlagDot = 0;



　//数字を押した時に引数nを受け取り追加し表示する
function edit(n){
  //変数inputにvalueとして押された数（n）を足したものを代入
    　input = display.value + n.value;
  //足したものを表示
      display.value = input;
  //cancelFlagの値を０にしてリセットする
    　cancelFlagMark = 0;
      } 
      
      
      
  //+-*/を押した時に引数xを受け取り追加し表示する
 function mark(x){
  //cancelFlagMarkが０の時のみ入力できる
      if(cancelFlagMark === 0){
  //1を代入することによって『（）===０』でなくなり連続で出力できない
      cancelFlagMark = 1;
  
      input = display.value + x.value;
 
      display.value = input;
  //cancelFlagの値を０にしてリセットする    
      cancelFlagDot = 0;
      
      }else{
        
      };}
      
      
      
  //.を押した時に引数Dotを受け取り追加し表示する   
  // mark 関数と同じ
 function dot(Dot){
   
      if(cancelFlagDot === 0 ){
        
      cancelFlagDot = 1;
  
      input = display.value + Dot.value;

      display.value = input;
      
      }else{
      
      };}
      
      
      
  //＝を押した時に計算を実行する
function calc(){
  //display.valueに入力された数式の計算結果をreturnでdisplay.valueに返す
  //（returnの後に半角スペースを開けることを注意）
      display.value = new Function("return " + display.value)();
      
      cancelFlagDot = 0;
      }
      
      
      
  //ACボタンを押した時数値をリセットする
function allclear(){	
  // 合計クリア
      input = "";	
  //クリアしたものを表示する
      display.value = input;	
      
      cancelFlagMark = 1;
      cancelFlagDot = 0;
}


 