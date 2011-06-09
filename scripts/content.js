function hideAccepted(){
  jQuery("div.accepted").hide();
}

function showAccepted(){
  jQuery("div.accepted").show();
}

function hideOwned(){
  jQuery("a.storyOwnerInitials").each(function(){
      jQuery(this).parents(".storyItem").hide();
  })
}

function showOwned(){
  jQuery("a.storyOwnerInitials").each(function(){
      jQuery(this).parents(".storyItem").show();
  })
}

function hidePending(button_name){
  jQuery("a." + button_name).each(function(){
      jQuery(this).parents(".storyItem").hide();
  });
}

function showPending(button_name){
  jQuery("a." + button_name).each(function(){
      jQuery(this).parents(".storyItem").show();
  });
}

function hideAllStories(){
  jQuery("div.storyItem").hide();
}

function showOnly(name){
  hideAllStories();
  showPending(name);
}

function onlyAccepted(){
  hideAllStories();
  showAccepted();
}

function onlyOwned(){
  hideAllStories();
  showOwned();
}

