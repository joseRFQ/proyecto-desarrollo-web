---
title: Primera entrada de blog
layout: blog_layout.vto
blogTitle: "Primera entrada y apertura del blog :)"
summary: "Entrada que habla acerca de los orígenes del blog, y las primeras impresiones de las herramientas realizadas"
tags:
  - blog
  - lume
  - deno
  - vento
---

Primero de todo, bienvenidos a un blog que será relativamente corto, en el que expresaré algunas cosillas sobre el mismo, de forma distendida.

Primero de todo y para empezar con el blog como tal, intentaré expresar tanto la apertura de este blog, como el motivo de su existencia.

## 1. Origen: probando Lume para sitios estáticos

Al investigar sobre posibles herramientas para desarrollo web (y necesitando tecnologías para poder realizar páginas estáticas), me he topado con el framework [_Lume_](lume.land).
Este _framework_ o generador de sitios, es uno de los que es nativamente soportado, y creado, específicamente para el entorno de desarrollo de [*Deno*](deno.com), en el cual quería desarrollar un proyecto, de forma simple pero pragmática y útil.

Resumiendo un poco, _Lume_ es un generador estático de sitios web, con un alto rendimiento con el cual se pueden realizar páginas web estáticas de forma simple, y permitiendo varios formatos de ficheros, organización, y que no sacrifica versatilidad con especialización y potencia.

    > Un detalle que me ha gustado, es el hecho de que el creador tiene origen gallego, por lo que siempre es algo maravilloso el ver herramientas de software tan pulidas y conocidas, que a su vez sean de origen peninsular.

## 2. Primeras impresiones

De primeras, me parece una plataforma que permite dar muchisimo juego con el tema de los formatos, temas, y con muchisimas utilidades que pueden venir geniales para realizar proyectos que requieran una fácil y alta iteración, a la vez que se mantiene una interfaz que busca ser más homogénea (que por ejemplo la empleada en la competencia, como es EJs, entre otros).

## 2.1 _Vento_

Antes he mencionado que soporta muchos formatos de ficheros, sea solamente para presentar la información (como pueden ser los ficheros con formato `.md`), u otros más complejos, pero bien conocidos y que son nativos de otros _frameworks_ muy conocidos en la industria (como son los ficheros `.jsx`). Siendo fantástico, creo que es importante destacar que, nativamente, _Lume_ soporta un formato que quizás no es tan conocido como los mencionados anteriormente, pero que tiene una propuesta y ambición interesante: [*Vento*](vento.js.org).

Creo que hablaré más en detalle del framework en otra ocasión, pero básicamente es un formato para crear plantillas o _templates_ de las páginas web que se quieren diseñar.

En mi opinión, destaca no solamente por ser la propuesta realizada por el mismo creador de _Lume_, sino que, en dicho formato de plantillas, busca ser lo más fácil para el usuario de aprender, sin perder funcionalidades (o incluso añadiendo algunas nuevas, como se verá más adelante), a la vez que intenta unificar el lenguaje de las plantillas, usando los mismos delimitadores para insertar valores, o realizar cualquier tipo de operación que permiten las plantillas (incluyendo directivas, _pipes_ o llamadas a funciones asíncronas en JS).

## 3. Conclusiones finales

Resumiendo un poco, este proyecto nace para probar y aprender un generador de páginas estáticas, que sea nativo a `Deno`, el cual ha terminado siendo _Lume_, el cual me está gustando de primeras.
Se tiene que probar un poco más para poder decir algo más de las herramientas, pero es posible que den muchisimo juego, incluso en el rato que lo esté probando y usando para el proyecto.