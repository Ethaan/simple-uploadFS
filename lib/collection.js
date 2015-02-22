 //Global Storage Variable
imageStore = new FS.Store.GridFS("imageStore");

pdfStore = new FS.Store.GridFS("pdf");

   //FSCollection Declatarion
   //All FsCollections go here
PdfFile = new FS.Collection("PdfFile", {
    stores: [pdfStore],
    filter: {
        maxSize: 2097152, //in bytes
        allow: {
            contentTypes: ['application/pdf'],
            extensions: ['pdf']
        },
        onInvalid: function (message) {
            if(Meteor.isClient){
                alert(message);
            } else{
                console.warn(message);
            }
        }
    }
});
ProfilePicture = new FS.Collection("ProfilePicture", {
    stores: [imageStore],
    filter: {
        maxSize: 2097152, //in bytes
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png']
        },
        onInvalid: function (message) {
            if(Meteor.isClient){
                alert(message);
            } else{
                console.warn(message);
            }
        }
    }
});

PngPicture = new FS.Collection("PngPicture", {
  stores: [new FS.Store.GridFS("PngPicture")]
}); 

   //Subscire Methods goes here
if(Meteor.isClient) {
    Meteor.subscribe('PdfFile');
    Meteor.subscribe('ProfilePicture');
    Meteor.subscribe('PngPicture');
}