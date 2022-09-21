# Autoglyphs para Eth Santiago

Este repositorio contiene el código de una simplificación del subgrafo de autoglyps con fines educativos para EthSantiago.

[Más información de autoglyphs](https://www.larvalabs.com/autoglyphs)

**IMPORTANTE:**

 Vamos a comenzar con algo ya hecho, mínimo pero es algo hecho y funcional. Si buscan información cómo empezar un subgrafo desde 0, pueden consular [acá la documentación oficial](https://thegraph.com/docs/es/cookbook/quick-start/) y en castellano!!!! 

### Requerimientos: 

- The Graph CLI es un paquete npm y necesitarás yarn instalado para usarlo. (con npm debería funcionar también)

- Por otra parte para poder desplegar tu propio subgrafo es importante tener una cuenta en [github](https://github.com/) y tener el cliente de git instalado en la computadora. 

- Poder ejecutar comandos en la consola. (y tener permisos ;-) )

## Empecemos:

1.- Clonamos este repositorio `git clone git@github.com:GabrielCamba/ethSantiago.git`

2.- Ejecutamos `yarn` para instalar las dependencias

3.- Ejecutamos `yarn codegen` para generar lo necesario para comenzar

4.- Ejecutamos `yarn build` para construir el proyecto

**Si todo fue bien en este punto tenemos todo lo necesario para poder trabajar con el proyecto**

## To deploy:

1.- Crear un subgrafo en el hosted service

2.- Cambiar el archivo package.json: donde dice deploy y reemplazar gabrielCamba/autoglyphs por tu subgrafo creado.

3.- Hacer la autenticación en consola: `graph auth --product hosted-service <YOUR HASH HERE>`

4.- Ejecutar `yarn deploy`.
