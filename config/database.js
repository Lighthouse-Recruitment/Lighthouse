if (process.env.NODE_ENV ==='production'){
	module.exports={mongoURI:'mongodb://ash:123@ds251197.mlab.com:51197/lighthouse-prod'}
}else{
	module.exports= {'mongodb://localhost/lighthouse-dev'}
}
