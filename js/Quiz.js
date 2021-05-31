class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    Contestant.getPlayerInfo()
    //write code to change the background color here
    background("lightblue")
    //write code to show a heading for showing the result of Quiz
    textSize(20)
    fill("blue")
    text("Results of QUIZ!!", 400, 30)
    
    //call getContestantInfo( ) here
      if(allContestants !== undefined){
        fill("blue")
        textSize(20)
        text("** contestant who has answered correct is highlighted green!** ", 200, 250)

        var y = 280
        for(var plr in allContestants){
          var correctANS = "2"
          
          if (correctANS === allContestants[plr].answer ){
            fill("green")
          }
          else{
             fill("red")
          }
          text(allContestants[plr].name + ":" + allContestants[plr].answer, 300, y)
          y = y+50
        }
      }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
