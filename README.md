A continuación se mencionan las librerias que se utilizaron para el api en python3
Flask:
  pip install Flask
  
Flask-Cors:
  pip install Flask-Cors
  
SimpleJson:
  pip install simplejson
 
 psycopg2:
  pip install psycopg2
  
Para correr el server se ejecuta el comando:
  python3 app.py
  
Para el frontend se utilizo Angular y para correr el server se ejecuta el comando:
  ng serve


¿Como determinas si una cadena de texto es un palíndromo?
(Un palíndromo es una palabra que al leerla al revés dice lo mismo. Ej. “Reconocer”)
R: Primero ponemos en minusculas todas las letras y quitamos los acentos de las letras, despues obtenemos el tamaño total de la palabra entre dos (total/2) y comenzamos a iterarlo comparando las primeras letras
con las ultimas, si son iguales en cada iteracion del ciclo, entonces la palabra es un palindromo, si en una es diferente, no lo es

Dado un arreglo de enteros, ¿Como determinas cual es el segundo más grande de todos esos enteros?
R: Primero, compararia los primeros dos primeros elementos para saber cual es el segundo mas grande,
ya teniendo el orden, se va comparando con cada numero que queda en el arreglo:
Si el numero que sigue (X) en el arreglo es mayor que el mayor, entonces el mayor actual pasaria a ser el segundo mas grande
y el numero X pasaria a ser el mayor.

Si el numero que sigue (X) en el arreglo es menor al mayor actual pero es mayor al segundo mayor actual, entonces
el numero X pasaria a ser el segundo mayor actual.

Asi al finalizar el programa podemos saber cual es el segundo mas grande

¿Como determinas si dos cadenas de texto son anagramas?
(Un anagrama es cuando dos palabras contienen exactamente los mismos caracteres pero en diferente orden. Ej. Acuerdo – Ecuador)
Una vez que se tienen las dos cadenas de texto para comparar, se ordenan las cadenas de texto de tal forma de que al final
se tengan dos listas donde cada una tiene sus letras ordenadas y si alguna lista tiene varias letras iguales ahi mismo se vera reflejado,
despues se van comparando letra por letra, si todas son iguales tenemosm un anagrama, si difiere en alguna, no es un anagrama