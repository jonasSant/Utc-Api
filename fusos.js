const express = require('express')
const app= express()
//utc de diversos paises
const fusos = [
{
id:1, pais:'Samoa Americana', utc:-11
},
{
id:2, pais:'Niue', utc:-11
},
{
id:3,pais:'Ilhas Cook', utc:-10
},
{
id:4, pais:'Polinésia Francesa', utc:-10
},
{
id:5, pais:'Pitcairn', utc:-8
},
{
id:6, pais:'Belize', utc:-6
},
{
id:7, pais:'Costa Rica', utc:-6
},
{
id:8, pais:'El Salvador', utc:-6
},
{
id:9, pais:'Guatemala', utc:-6
},
{
id:10, pais:'Honduras', utc:-6
},
{
id:11, pais:'México', utc:-6
},
{
id:12, pais:'Nicarágua', utc:-6
},
{
id:13, pais:'Bahamas', utc:-5
},
{
id:14, pais:'Ilhas Cayman', utc:-5
},
{
id:15, pais:'Colômbia', utc:-5
},
{
id:16, pais:'Cuba', utc:-5
},
{
id:17, pais:'Equador', utc: -5
},
{
id:18, pais:'Jamaica', utc: -5
},
{
id:19, pais:'Estados Unidos', utc:-5
},
{
id:20, pais:'Peru', utc:-5
},
{
id:21, pais:'Turks-e-Caicos', utc:-5
},
{
id:22, pais:'Antigua-e-Barbuda', utc:-4
},
{
id:23, pais:'Paises Baixos Caribenhos', utc:-4
},
{
id:24, pais:'Barbados', utc:-4
},
{
id:25, pais:'Bermuda', utc:-4
},
{
id:26, pais:'Bolivia', utc:-4
},
{
id:27, pais:'Ilhas Virgens', utc:-4
},
{
id:28, pais:'Curacao', utc:-4
},
{
id:30, pais:'Dominica', utc:-4
},
{
id:31, pais:'Republica Dominicana', utc:-4
},
{
id:32, pais:'Grenada', utc:-4
},
{
id:33, pais:'Guadeloupe', utc:-4
},
{
id:34, pais:'Guiana', utc:-4
},
{
id:35, pais:'Haiti', utc:-4
},
{
id:36, pais:'Martinica', utc:-4
},
{
id:37, pais:'Montserrat', utc:-4
},
{
id:38, pais:'Aruba', utc:-4
},
{
id:39, pais:'Porto-Rico', utc:-4
},
{
id:40, pais:'São Cristovão e Névis', utc:-4
},
{
id:41, pais:'Anguilla', utc:-4
},
{
id:42, pais:'Venezuela', utc:-4
},
{
id:43, pais:'Argentina', utc:-3
},
{
id:44, pais:'Brasil', utc:-3
},
{
id: 45, pais:'Chile', utc:-3
},
{
id:46, pais:'Portugal', utc:+0
},
{
id: 47, pais:'França', utc:+1
},
{
id: 48, pais:'Espanha', utc:+1
},
{
id:49,  pais:'Alemanha', utc:+1
},
{
id:50, pais: 'Italia', utc:+1
}
]

module.exports = {fusos}