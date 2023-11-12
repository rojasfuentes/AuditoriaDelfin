# auditoria-delfin

## Montaje de Proyecto
El siguiente comando realizará la instalación de todos los paquetes de node necesarios para utilizar vue. 

```
npm install
```

## Activar el entorno local (Servidor que despliega las vistas).

El siguiente comando realizará el montaje de nuestras interfaces en un entorno local...
* **EXTREMADAMENTE ÚTIL PARA DEBUGGEAR 
NO SERVIRÁ CON EL SERVIDOR DE LA APP, SOLO ES PARA VER LAS INTERFACES
PARA VER EL SERVIDOR EN ACCIÓN, UTILIZAR EL PROYECTO CONJUNTO: [Alvirelwapo/ProyectoSalas](https://github.com/AlvirElWapo/Proyecto_Salas)** 
```
npm run serve
```

## Compilación de nuestras interfaces
Se toman todas las páginas que hemos generado y se almacenan en /dist según lo hayamos indicado en vue.config.js
* **Lo generado en /dist será utilizado en producción a través del servidor escrito en: [Alvirelwapo/ProyectoSalas](https://github.com/AlvirElWapo/Proyecto_Salas)**
```
npm run build
```


