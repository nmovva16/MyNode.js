var mongo = require('mongodb');
var fs = require('fs');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('NishitaDB', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'NishitaDB' database");
            }

});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    db.collection('Level1QuestionCollections', function(err, collection) {
        collection.findOne({'_id':id}, function(err, item) {
res.send(item);
        });
    });
};

exports.findByName = function(req,res){

var name = req.params.name;
console.log('the name in the request: ' + name);
db.collection('wines',function(err,collection){
collection.findOne({'name':name},function(err,item){
console.log('After responding');
console.log('retrieved wine ' + name);



res.send(item);


});
});

};

exports.displayImage = function(req, res) {

var imageLoc = req.params.image;
    console.log('Retrieving image: ' + imageLoc);
var img = fs.readFileSync('/Users/srinivasavelicheti/Desktop/wincellar/routes/'+imageLoc+'.gif');
res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');


};
