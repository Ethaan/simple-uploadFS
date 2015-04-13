    //*******************************************************************************************************
    //*******************************************************************************************************
       //Profile Events Declarations Go here
    Template.profile.events({
    'change #imageInput': FS.EventHandlers.insertFiles(PngPicture, {
      metadata: function (fileObj) {
        return {
          owner: Meteor.userId()
        };
      },
      after: function (error, fileObj) {
        console.log("Congratulations You just upload a new image =D", fileObj.name);
      }
    }),
    	'change #profileImage':function(){
    		var file = $('#profileImage').get(0).files[0],
    		    fsFile = new FS.File(file);
                fsFile.metadata = {
                	ownerId:Meteor.userId(),
                }
    		    ProfilePicture.insert(fsFile,function(err,result){
    		    	if(!err){
    		    		console.log("Congratulations You just upload a new image =D")
    		    	}
    		    })
    	},
    	'change #inputPdf':function(){
    		var file = $('#inputPdf').get(0).files[0],
    		    fsFile = new FS.File(file);
                fsFile.metadata = {
                	ownerId:Meteor.userId(),
                }
    		    PdfFile.insert(fsFile,function(err,result){
    		    	if(!err){
    		    		console.log("Congratulations You just upload a new PDF File =D")
    		    	}
    		    })
    	},
    	'change #inputPng':function(){
    		var file = $('#inputPng').get(0).files[0],
    		    fsFile = new FS.File(file);
                fsFile.metadata = {
                	ownerId:Meteor.userId(),
                }
    		    PngPicture.insert(fsFile,function(err,result){
    		    	if(!err){
    		    		console.log("Congratulations You just upload a new image File =D")
    		    	}
    		    })
    	},
    	'click #deleteImageUser':function(){
    		var message = confirm('Are you sure you want to delete this file?');
             if(message === true){
                PngPicture.remove({_id:this._id})
            } else {
               console.log("Seems like you dont want to delete any file");
            }
    	},
    	'click #deletePdfUser':function(){
    	   var message = confirm('Are you sure you want to delete this file?');
             if(message=== true){
                PdfFile.remove({_id:this._id})
            } else {
               console.log("Seems like you dont want to delete any file.");
            }
    	},
    	'click #showModalUpload':function(){
    		Modal.show('uploadFile')
    	},
    	'click #showModalFilter':function(){
    		Modal.show('filterFile')
    	},
    	'click #showModalDownload':function(){
    		Modal.show('downloadFile')
    	},
      'click #showModalProgress':function(){
        Modal.show('progressFile')
      },
      'click #showModalUploadCfs':function(){
        Modal.show('eventFile')
      }
    })
//*******************************************************************************************************
//*******************************************************************************************************
      //Profile Helpers Declarations go Here.

      //here if there is already a file with the users name, 
      //the input to upload photo gets hide and we show another
      Template.profile.helpers({
        profilePicture:function(){
            return ProfilePicture.find({'metadata.ownerId':Meteor.userId()});
        },
      	showInputProfile:function(){
           var finde = ProfilePicture.find({'metadata.ownerId':Meteor.userId()}).count() 
           if(finde >= 1){
           	return true;
           }else{
           	return false;
           }
      	},
      	showImagesUploadByUser:function(){
      		return PngPicture.find({'metadata.ownerId':Meteor.userId()});
      	},
        showPDFUploadByUser:function(){
        	return PdfFile.find({'metadata.ownerId':Meteor.userId()});
        }
  });
//*******************************************************************************************************
//*******************************************************************************************************

 //Rendered Function to show/hide footer
    Template.profie.onRendered(function(){
      $(window).scroll(function() {
        if ($(this).scrollTop()) {
          $("#footer").hide();
        }else{
          $("#footer").show();
        }
      });
    })
