function coll(abhay1,abhay2){

    if (abhay1.x - abhay2.x < abhay2.width/2 + abhay1.width/2
      && abhay2.x - abhay1.x < abhay2.width/2 + abhay1.width/2)
       {
      abhay1.velocityX = abhay1.velocityX * (-1);
      abhay2.velocityX = abhay2.velocityX * (-1);
    }
  
    if (abhay1.y - abhay2.y < abhay2.height/2 + abhay1.height/2
      && abhay2.y - abhay1.y < abhay2.height/2 + abhay1.height/2)
      {
      abhay1.velocityY = abhay1.velocityY * (-1);
      abhay2.velocityY = abhay2.velocityY * (-1);
      }
  
      return 1;
  
  }

  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }