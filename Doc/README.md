

### Requisitos funcionais

| Código   | Descrição                                                                                                      |     |
| -------- | -------------------------------------------------------------------------------------------------------------- | --- |
| **RF01** | O sistema deve permitir a **entrada de um valor numérico** a ser convertido.                                   |     |
| **RF02** | O sistema deve permitir a **seleção da unidade de origem** e da **unidade de destino**.                        |     |
| **RF03** | O sistema deve **realizar a conversão de medidas** entre diferentes unidades: temperatura, peso e distância.   |     |
| **RF04** | O sistema deve exibir **o valor convertido em tempo real** ou ao acionar um botão.                             |     |
| **RF05** | O sistema deve permitir a **alteração de idioma** (ex: português e inglês).                                    |     |
| **RF06** | O sistema deve permitir a **alternância entre modo claro e escuro**.                                           |     |
| **RF07** | O sistema deve permitir a **navegação entre diferentes categorias de medida** (temperatura, peso e distância). |     |

### Requisitos não funcionais

| Código    | Descrição                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| **RNF01** | O sistema deve ter **interface responsiva**, com portabilidade para todos os tamanhos de tela (mobile, tablet e desktop). |
| **RNF02** | O sistema deve ser desenvolvido utilizando **React com TypeScript**.                                                      |
| **RNF03** | O sistema deve possuir **performance satisfatória**, exibindo os resultados em menos de 1 segundo.                        |
| **RNF04** | O sistema deve ser compatível com os navegadores mais populares (Chrome, Firefox, Edge).                                  |
| **RNF05** | O sistema deve adotar **boas práticas de acessibilidade** e semântica HTML.                                               |

### Estrutura do sistema

**src/**
**├── components/**
**│   ├── DistanceConverter.tsx**
**│   ├── WeightConverter.tsx**
**│   ├── TemperatureConverter.tsx**
**│   └── UnitSelector.tsx**
**├── pages/**
**│   └── Home.tsx**
**├── types/**
**│   └── units.ts**
**├── utils/**
**│   └── conversion.ts**
**├── App.tsx**
**└── main.tsx**


### Senso de conversão
**Distância**

- **Unidades:** km, m, cm, mm, mi (milhas), yd (jardas), ft (pés), in (polegadas)
    
- **Conversão:** baseada em metros como unidade base
    

**Peso**

- **Unidades:** kg, g, mg, lb (libras), oz (onças)
    
- **Conversão:** baseada em gramas como unidade base
    

**Temperatura**

- **Unidades:** °C, °F, K
    
- **Conversão:** fórmulas específicas (não proporcional direto)



 


### CheckList  

* [x] O sistema deve permitir a **entrada de um valor numérico** a ser convertido.
* [x] O sistema deve permitir a **seleção da unidade de origem** e da **unidade de destino**.
* [x] O sistema deve **realizar a conversão de medidas** entre diferentes unidades: temperatura, peso e distância.
* [x] O sistema deve exibir **o valor convertido em tempo real** ou ao acionar um botão.                    
* [x] O sistema deve permitir a **alternância entre modo claro e escuro**.                                          
* [x] O sistema deve permitir a **navegação entre diferentes categorias de medida** (temperatura, peso e distância).
