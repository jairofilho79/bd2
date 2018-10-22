
var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bd2_censo'
});



	new Promise((resolve,reject) => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		resolve(values);
	})
	.then((values) => {
		connection.connect();
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}			
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}		
		  	});
	})
	.then(() => {
		let values = [];
			for(let i=0;i<100000;i++) {
				let latitude = Math.floor(Math.random()*180)-90;
				let longitude = Math.floor(Math.random()*360)-180;
				let localizador = `(${latitude},${longitude})`;
				values.push([Math.random()>=0.5 ? 'm':'f',Math.floor(Math.random()*127),Math.floor(Math.random()*1023),Math.floor(Math.random()*3),Math.floor(Math.random()*4095),Math.floor(Math.random()*255),localizador]);
			}
		return values;
	})
	.then((values) => {
		connection.query("INSERT INTO pessoa (sexo,idade,renda,escolaridade,idioma,pais,localizador) VALUES ?",[values],
		 	function (error, results, fields) {
		 		if(error) {
		 			throw error;
		 		}
				console.log(connection.close());			
		  	});
	})