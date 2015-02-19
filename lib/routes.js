Router.configure({
	layoutTemplate:'layout',
	loadingTemplate: 'loading',
})

Router.route('/', function () {
  this.render('home')
});

Router.route('/profile', function () {
  this.render('profile')
});

