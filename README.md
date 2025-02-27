# Entrega Final
## Mocking
Se agregó la ruta <code>app.use('/api/mocks', mockingRouter) </code> en la carpeta <code>/routes</code>.

Dentro se configuraron las rutas para generar Pets y Users mediante fakerjs con parámetros numéricos opcionales. Si se omite se settea por defaul. </br> 
<code>router.get('/mockingpets/:cant?', mocksController.getMockingPets );
router.get('/mockingusers/:cant?', mocksController.getMockingUsers );</code>

Se desarrollo un endpoint para llamar las funciones <b>getMockingPets</b> y <b>getMockingUsers</b> y que el resultado del pedido se guarde en la BD. </br>
<code>router.post('/generatedata/:cantPets?/:cantUser?', mocksController.postSaveDataDB );</code> 
</br>
</br>
</br>

Las rutas se pueden ejecutar en: <br>
<code>http://localhost:8080/api/mocks/mockingpets/{cantidad}</code> <br>
<code>http://localhost:8080/api/mocks/mockingusers/{cantidad}</code> <br>
<code>http://localhost:8080/api/mocks/generatedata/{cantidadPets}/{cantidadUsers}</code>
</br>
</br>
</br>
Para testear: <br>
<code>http://localhost:8080/api/pets</code> <br>
<code>http://localhost:8080/api/users</code>
</br>
</br>
</br>
## Docs
 Se agregó Swagger para la documentación de los endpoints.
 <br> <br>
Swagger: </br>
<code>http://localhost:8080/apidocs/</code>
</br>
</br>
</br>
## Testing 
Se agregó la arpeta Test en la que se encuentran los archivos: 
<ul>
  <li>supertest.adoptions.test.js </li>
  <li>supertest.users.test.js</li>
  <li>supertest.pets.test.js</li>
</ul>
</br>
Los cuales se pueden ejecutar con:
</br>
<code> npm run supertestAdoption </code>
</br>
<code> npm run supertestUsers </code>
</br>
<code> npm run supertestPets </code>
</br>



