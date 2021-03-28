let textoDeEntrada = '4322';
let llave = '1242';
let textoEncriptado = '1411';

const encrypt = (str, key = llave) => {
  return str && key ? rc4(str, key) : null;
}

const decrypt = (str, key = llave) => {
  return str && key ? rc4(str, key) : null;
}

const rc4 = (str, key) => {

  console.log(`Texto de entrada: ${str}`);
  console.log(`Llave: ${key}`);

  console.log(`%cAlgoritmo KSA`, `font-size: 14px;`);

  let s = [], j = 0, x, result = '';
  for (let i = 0; i < 8; i++) {
    s[i] = i;
  }
  console.log('Se genera la matriz que se utilizara de 8 decimales');
  console.log(`S = ${s}`);

  console.log('Se realiza la permutacion inicial con S, \ndonde i, j = 0');
  for (let i = 0; i < 8; i++) {
    console.log(`%cIteracion: ${i + 1}, donde i = ${i}`, "font-weight: bold;");
    console.log(`j = (j + S[i] + llave[i mod(largo de la llave)]) mod 8`);
    console.log(`j = (${j} + ${s[i]} + key[${i} % ${key.length}]) % 8`);
    j = (j + s[i] + +key[i % key.length]) % 8;
    console.log(`j = ${j}`);
    console.log(`Swap de S[i], S[j]`)
    console.log(`Sabiendo que S = ${[s]}`);
    console.log(`S[${i}] = ${s[i]} \nS[${j}] = ${s[j]}`)
    x = s[i];
    s[i] = s[j];
    s[j] = x;
    console.log(`%cS = ${s}`, 'color:yellow;');
  }

  console.log(s);

  i = 0;
  j = 0;

  console.log(`%cAlgoritmo PRGA`, `font-size: 14px;`);
  console.log('Donde i, j = 0');
  console.log('Hacer por cada caracter del texto que se esta encriptando/desencriptando');
  for (let y = 0; y < str.length; y++) {
    console.log(`%cIteracion para el caracter ${y}`, 'font-weight:bold;')
    console.log(`i = (i + 1) mod 8`);
    console.log(`i = (${i} + 1) mod 8`);
    i = (i + 1) % 8;
    console.log(`i = ${i}`);
    console.log(`j = (j + S[i]) mod 8`);
    console.log(`j = (${j} + ${s[i]}) mod 8`);
    j = (j + s[i]) % 8;
    console.log(`j = ${j}`);
    console.log(`Swap de S[i], S[j]`)
    console.log(`Sabiendo que S = ${[s]}`);
    console.log(`S[${i}] = ${s[i]} \nS[${j}] = ${s[j]}`)
    x = s[i];
    s[i] = s[j];
    s[j] = x;
    console.log(`%cS = ${s}`, 'color:yellow;');
    console.log(`k = S[(S[i] + S[j]) mod 8]`);
    console.log(`k = ${s}[(${s[i]} + ${s[j]}) mod 8]`);
    let k = s[(s[i] + s[j]) % 8];
    console.log(`k = ${k}`);
    console.log(`resultado = str[y] XOR k`);
    console.log(`resultado = ${str[y]} XOR ${k}`);
    result += (str[y] ^ k);
    console.log(`resultado = ${result}`);
  }
  return result;
}

console.log(`Encriptado: ${encrypt(textoDeEntrada)} \nDesencriptado: ${decrypt(textoEncriptado)}`);


