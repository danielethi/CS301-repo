var foo = 0;
switch (foo) {
 case -1:
 console.log('negative 1');
 break;
 case 0:
 console.log(0);
 case 1:
 console.log(1);
 break;
 case 2:
 console.log(2);
 break;
 default:
 console.log('default');
}//the output is 0,1
//================================================

var foo = '0';
switch (foo) {
 case -1:
 console.log('negative 1');
 break;
 case 0:
 console.log(0);
 case 1:
 console.log(1);
 break;
 case 2:
 console.log(2);
 break;
 default:
 console.log('default');
}  // output is default
