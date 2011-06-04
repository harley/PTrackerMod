function hideDelivered(){
  jQuery("a.accept").each(function(){
      jQuery(this).parents(".storyItem").hide();
  });
}

function showDelivered(){
  jQuery("a.accept").each(function(){
      jQuery(this).parents(".storyItem").show();
  });
}

function hideAccepted(){
  console.log("hideAccepted");
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
