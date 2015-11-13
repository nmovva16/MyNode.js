//importing mongoDB as a module
var mongo = require('mongodb');
var fs = require('fs');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('NishitaDB', server);

//opening connection 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'NishitaDB' database");
            }

});

//The findById returns JSON by asking the id
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving question: ' + id);
    db.collection('Level1QuestionCollections', function(err, collection) {
        collection.findOne({'_id':id}, function(err, item) {
res.send(item);
        });
    });
};

//findByName searches in mongoDB with name rather the ID. 
//This operation is not used. 
exports.findByName = function(req,res){

var name = req.params.name;
console.log('the name in the request: ' + name);
db.collection('questions',function(err,collection){
collection.findOne({'name':name},function(err,item){
console.log('After responding');
console.log('retrieved question ' + name);



res.send(item);


});
});

};

//displayImage takes a name and returns the gif image
exports.displayImage = function(req, res) {

var imageLoc = req.params.image;
    console.log('Retrieving image: ' + imageLoc);
var img = fs.readFileSync('/Users/srinivasavelicheti/Desktop/question/routes/'+imageLoc+'.gif');
res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');


};
