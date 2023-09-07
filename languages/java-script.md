## JavaScript

<details>
<summary>
  
## В чем разница var, let и const?
</summary>

- [ ] Переменная объявленная через `var` имеет функциональную область видимости, а `let` и `const` - блочную
- [ ] Все объявленные переменные и функции всплывают. Процесс всплытия происходит при чтении скрипта браузером
- [ ] Переменная считается инициализированной, если к ней можно обращаться из других частей кода
- [ ] Переменная объявленная через `var` инициализируется со значением `undefined` в начале функциональной области видимости
- [ ] Всплытие `let` и `const` создает TDZ - временную мертвую зону, в которой обращение к переменной создает ошибку `ReferenceError: Cannot access 'variable' before initialization`
- [ ] Если TDZ переменной отсутствует, обращение к переменной создает ошибку `ReferenceError: 'variable' is not defined`
- [ ] В переменные объявленные через `const` нельзя присвоить новое значение
</details>

<details>
<summary>
  
## Отличия глобальной, функциональной и блочной области видимости?
</summary>

- [ ] Глобальная область существует в единсвенном экземпляре. В ней объявлены глобальные переменные, в которым можно получить доступ через `window`
- [ ] Функциональная область видимости создается объявлением через ключевое слово `function`. Всплытие переменных объявленных через `var` ограничено функциональной областью видимости.
- [ ] Стрелочные функции имеют блочную область видимости
- [ ] `class` - синтаксический сахар над обычной функцией, следовательно имеет функциональную область видимости
</details>

<details>
<summary>
  
## Что такое глубокая и поверхностная копиия объекта?
</summary>

- [ ] Поверхностная копия создает новую область памяти. Содержимое копируемого объекта переносится в эту область памяти по ссылке. Таким образом новая ссылка создается только для контейнера содержимого
- [ ] Глубокая копия создает новую ссылку не только для самого объекта, но и для его вложенного содержимого
- [ ] Плохой способ создать глубокую копию `JSON.parse(JSON.stringify(object))`
- [ ] Хороший способ - использовать библиотечную функцию `lodash.clonedeep` или написать рекурсивную функцию для копирования
- [ ] Очень хороший способ - использовать web API `structuredClone(object)`
</details>

<details>
<summary>
  
## Напишите функцию для глубокого копирования объектов
</summary>

Сразу говори, что лучше использовать web API [`scructuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)


```javascript
const copyArray = (array) => {
    return array.map(data => deepCopy(data));
}

const copyObject = (object) => {
    const newObject = {};
    for (let key in object) {
        newObject[key] = deepCopy(object[key]);
    }
    return newObject;
}

const deepCopy = (data) => {
    switch (typeof data) {
        case 'number':
        case 'string':
        case 'boolean':
        case 'undefined':
        case 'bigint': {
            return data;
        }
        case 'object': {
            if (Array.isArray(data)) {
                return copyArray(data);
            }
            if (data instanceof Set) {
                return new Set(deepCopy([...data]));
            }
            return copyObject(data);
        }
        case 'function': {
            return data.bind({});
        }
        case 'symbol': {
            return Symbol(data.description);
        }
        default: {
            break;
        }
    }
};
```
</details>

<details>
<summary>
  
## question?
</summary>

- [ ] answer
</details>
