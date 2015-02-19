//Allow/Deny methods
ProfilePicture.allow({
	insert:function(){
		return true;
	},
	download:function(){return true;},
	remove:function(){return true;},
	update:function(){return true;},

})

PngPicture.allow({
	insert:function(){
		return true;
	},
	download:function(){return true;},
	remove:function(){return true;},
	update:function(){return true;},

})

PdfFile.allow({
	insert:function(){
		return true;
	},
	download:function(){return true;},
	remove:function(){return true;},
	update:function(){return true;},

})

//Publish methods
Meteor.publish('ProfilePicture',function(){
     return ProfilePicture.find();
})

Meteor.publish('PngPicture',function(){
     return PngPicture.find();
})

Meteor.publish('PdfFile',function(){
     return PdfFile.find();
})

  