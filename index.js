var wd = require('selenium-webdriver');
var request=require('request');
var assert = require('assert');

var SELENIUM_HOST = 'http://localhost:4444/wd/hub';
var URL = 'http://m.facebook.com/';

var client = new wd.Builder()
   .usingServer(SELENIUM_HOST)
   .withCapabilities({ browserName: 'firefox' })
   .build();

function fillFirstPage ()
{
	client.findElement({ name: 'firstname' }).sendKeys('Mike');
	client.findElement({ name: 'lastname' }).sendKeys('Balandin');
	client.findElement({ name: 'reg_email__' }).sendKeys('+79643231038');
	client.findElement({ css: 'input[type="radio"][value="1"]' }).click();
	client.findElement({ name: 'birthday_day' }).sendKeys('15')
	client.findElement({ name: 'birthday_year' }).sendKeys('1989');	 
	client.findElement({ name: 'reg_passwd__' }).sendKeys('Qq249670');
	
}
   
 
 client.get(URL).then(function() {
	client.findElement({ id: 'signup-button' }).click().then(function() {
		
	 fillFirstPage ();
	 setTimeout(function() {client.findElement({ name: 'submit' }).click()}, 5000);
	 
});







   /* client.getTitle().then(function(title) {
		
        assert.ok(title.indexOf('Регистрация на Facebook') > -1, 'Ничего не нашлось :(');
		
		console.log(client.getTitle());
client.findElement({  name: 'firstname' }).click();
client.findElement({ name: 'firstname' }).sendKeys('Mike');
client.findElement({ value: "Далее" }).click();

    });*/

 //   client.quit();
});


request
  .get('http://sms-activate.ru/stubs/handler_api.php?api_key=dfB68cd11d951dc63525dc3102cf5336&action=getNumber&service=fb&country=0')
  .on('response', function(response) {
	  console.log("бам"); // 200
	  response.on('data', function(chunk){
        console.log(chunk);
    });
	//Список номеров
    response.on('data', function (chunk) {
		console.log('BODY: ' + chunk);
	 });
    console.log(response.headers['content-type']);
	
  })
