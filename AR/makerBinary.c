#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef struct {
	unsigned sexo:1;
	unsigned idade:7;
	unsigned renda:10;
	unsigned escolaridade:2;
	unsigned idioma:12;
	unsigned pais:8;
	unsigned localizador:24;
} Pessoa;

int main () {
	Pessoa p;
	
	/*
	FILE *f = fopen("../pessoas.bin","ab");
	int i;
	int j = 0;
	for (i = 0; i < 1000000000; i++) {
		srand(time(NULL));
		
		p.sexo         = rand() % 2;
		p.idade        = rand() % 128;
		p.renda        = rand() % 1024;
		p.escolaridade = rand() % 4;
		p.idioma       = rand() % 4096;
		p.pais         = rand() % 256;
		p.localizador  = rand() % 16777216;
		
		fwrite(&p,sizeof(Pessoa),1,f);
		
		if(i%10000000 == 0) {
			printf("%i\n",i/10000000);
		}
	}
	
	fclose(f);
	*/
	
	///*
	FILE *f = fopen("../pessoas.bin","rb");
	
	//SELECT pais, sexo, count(*) FROM pessoa GROUP BY pais, sexo
	/*
	long int sexPais[2][256];
	int i,j;
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 256; j++) {
			sexPais[i][j] = 0;
		}
	}
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		sexPais[p.sexo][p.pais]++;
	}
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 256; j++) {
			printf("Sexo %i e Pais %i: %li\n",i,j,sexPais[i][j]);
		}
	}
	
	*/
	
	//SELECT pais, sexo, avg(renda) FROM pessoa GROUP BY pais, sexo
	/*
	long int sexPais[2][256];
	float renda[2][256];
	int i,j;
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 256; j++) {
			sexPais[i][j] = 0;
			renda[i][j] = 0;
		}
	}
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		sexPais[p.sexo][p.pais]++;
		renda[p.sexo][p.pais] += p.renda;
	}
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 256; j++) {
			if(sexPais[i][j] == 0) {
				printf("Sexo %i, Pais %i e media da renda: 0.00\n",i,j);
			} else {
				printf("Sexo %i, Pais %i e media da renda: %.2f\n",i,j,(renda[i][j]/sexPais[i][j]));	
			}
			
		}
	}
	*/
	
	//SELECT pais, sexo, avg(idade) FROM pessoa GROUP BY pais, sexo
	/*
	long int sexPais[2][256];
	float idade[2][256];
	int i,j;
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 256; j++) {
			sexPais[i][j] = 0;
			idade[i][j] = 0;
		}
	}
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		sexPais[p.sexo][p.pais]++;
		idade[p.sexo][p.pais] += p.idade;
	}
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 256; j++) {
			if(sexPais[i][j] == 0) {
				printf("Sexo %i, Pais %i e media da idade: 0.00\n",i,j);
			} else {
				printf("Sexo %i, Pais %i e media da idade: %.2f\n",i,j,(idade[i][j]/sexPais[i][j]));	
			}
			
		}
	}
	*/
	
	//SELECT pais, sexo, count(*) FROM pessoa WHERE pais = 15 GROUP BY pais, sexo
	/*
	long int sexPais[2];
	int i;
	
	for (i = 0; i < 2; i++) {
		sexPais[i] = 0;
	}
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		if (p.pais == 15) {
			sexPais[p.sexo]++;
		}
	}
	
	for (i = 0; i < 2; i++) {
		printf("Sexo %i e Pais 15: %li\n",i,sexPais[i]);
	}
	*/
	
	//SELECT pais, sexo, count(*) FROM pessoa WHERE pais = 15 AND sexo = 'f'
	/*
	long int sexPais;
	
	sexPais = 0;
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		if (p.pais == 15 && p.sexo == 0) {
			sexPais++;
		}
	}
	
	printf("Sexo 0 e Pais 15: %li\n",sexPais);
	*/
	
	//SELECT pais, sexo, count(*) FROM pessoa WHERE pais >=0 AND pais <=15 GROUP BY pais, sexo
	/*
	long int sexPais[2][16];
	int i,j;
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 16; j++) {
			sexPais[i][j] = 0;
		}
	}
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		if(p.pais>=0 && p.pais<=15) {
			sexPais[p.sexo][p.pais]++;
		}
	}
	
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 16; j++) {
			printf("Sexo %i e Pais %i: %li\n",i,j,sexPais[i][j]);
		}
	}
	*/
	
	//SELECT pais, sexo, count(*) FROM pessoa WHERE pais >= 100 AND escolaridade = 2 GROUP BY pais, sexo
	/*
	long int sexPais[156];
	int i;
	
	for (i = 0; i < 156; i++) {
		sexPais[i] = 0;
	}
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		if (p.pais >= 100 && p.escolaridade == 2) {
			sexPais[p.pais-100]++;
		}
	}
	
	for (i = 0; i < 156; i++) {
		printf("Escolaridade 2 e Pais %i: %li\n",(i+100),sexPais[i]);
	}
	*/
	
	//SELECT pais, sexo, count(*) FROM pessoa WHERE pais = 1 AND idioma = 1099 GROUP BY pais, sexo
	/*
	long int sexPais;
	
	sexPais = 0;
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		if (p.pais == 1 && p.idioma == 1099) {
			sexPais++;
		}
	}
	
	printf("Idioma 1099 e Pais 1: %li\n",sexPais);
	*/
	
	//SELECT pais, sexo, count(*) FROM pessoa WHERE pais = 15 AND sexo = 'm' AND renda >= 1000 GROUP BY pais, sexo
	/*
	long int sexPais[24];
	int i;
	
	for (i = 0; i < 24; i++) {
		sexPais[i] = 0;
	}
	
	printf("Inicializou\n");
	
	while(fread(&p,sizeof(Pessoa),1,f)){
		if (p.pais == 15 && p.sexo == 1 && p.renda >= 1000) {
			sexPais[p.renda-1000]++;
		}
	}
	
	for (i = 0; i < 24; i++) {
		printf("Sexo 1, Pais 15 e Renda %i: %li\n",(i+1000),sexPais[i]);
	}
	*/
	fclose(f);
	return 0; 
}
