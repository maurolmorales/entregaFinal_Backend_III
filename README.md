# Entrega Final

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
Para testar: <br>
<code>http://localhost:8080/api/pets</code> <br>
<code>http://localhost:8080/api/users</code>