# My Store - ReactJs

My Store es una tienda online desarrollada íntegramente en ReactJs y creada como proyecto final del curso brindado por CoderHouse.

<img src="./public/assets/readme/MyStore.gif" />

## FUNCIONALIDADES

```sh
El carrito cuenta con los botones necesarios para modificar la compra:

Con "Delete 1" se elimina 1 unidad del producto tanto en el item cart como en el widget
y el precio total, mientras que con "Delete All" se eliminan todas las unidades de dicho
producto e impacta en todos los indicadores antes mencionados.
```

<img src="./public/assets/readme/buttons.gif" width="500"/>

```sh
Si el usuario quisiera dejar el contador el 0 la siguiente alerta aparece inmediatamente.
```

<img src="./public/assets/readme/minimo.png" width="500"/>

```sh
Cuando la solicitud del usuario supera el stock del producto se notificará con un alerta.
```

<img src="./public/assets/readme/maximo.png" width="500"/>

## CARACTERÍSTICAS GENERALES

- Se consume una base de datos alojada en Firebase y conformada con información proveniente de FakeStore API.
- Los componentes se encuentran jerarquizados en función a la responsabilidad individual que se les asignó.
- El contexto recibe y envía información para la gestión del carrito, ya sea en su cantidad o en el precio a través de estados individuales.
- Los productos se encuentran agrupados en un catálogo general y luego divididos en categorías.
- La comunicación con el usuario se lleva a cabo a través de mensajes estilados con Sweet Alert 2.
- Se utiliza un componente counter para gestionar las cantidades de productos que se agregarán al carro.
- El stock de productos es chequeado previo a la compra y por el momento no se actualiza en tiempo real.
- Al finalizar la compra se genera un nro de orden el cual carga en la base de datos la información de la compra y notifica al cliente mediante alerta.

## HERRAMIENTAS

- `React Js` ✔️
- `React Router DOM` ✔️
- `CSS 3` ✔️
- `Sweet Alert 2` ✔️
- `Firebase` ✔️
- `Fake Store API` ✔️

## FUTUROS CAMBIOS / AGREGADOS

> Habilitar chat para consultas por parte de los clientes que se alojará en DB

> Login con Auth de firebase

> Carrito alojado en LocalStorage

> Trabajar con stock en tiempo real

> Hacer responsive la app

> Levantar el proyecto en netlify

> Traducción de README
