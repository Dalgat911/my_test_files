                            // Методы Функции Выражения. УРОК 1 
// Console 
// console.log () -отоброжание одного свойства обьекта
// console.dir() - отображает все свойства обьекта 
// console.table() - отображает все свойства ообьекта в табичном виде 
// console.log('Dalgat')
                           
                            // Переменныею УРОК 2 
    // PascalCase - типы и классы 
    // DB_PASSWORD - значение известные до запуска приложения и не меняются 
    // camalCase - все остальные переменные 

                            // Обьявление переменных УРОК 3
        // let a - обьявление 
        // a = true - присваение 
        // const a = 10 обьявление и присваивание 
        // var a = 10 обьявление и присваивание 
        // let a 
        // a = 'true' 
        // console.log(a)
                            // Примитивные типы УРОК 4
    // string - строка 
    // boolean - логический (true, false)
    // number  - число (0, -5, 10, 1.25)
    // null - у переменной на данном этапе значение отсутствует (это делаешь сам)
    // undefined - значение переменной не существует (Это делает компьютер )
    // symbol - символ (для создание уникальных значений) (используется редко)
                            // Ссылочный тип УРОК 5
        // object 
        // Пример: 
        // 0x3151 {
        //     a:10,
        //     b:true
        // // } 
        // const objectA = {
        //     a: 10,
        //     b: true,
        //     c: abc        } 
                             //  Создание копии УРОК 6
        //     const copyOfA = objectA
        //     copyOfA.a = 20
        //     const copyOfA = objectA
        //     copyOfA.c = abc

        //     const objectB = {
        //         a: 1,
        //         b: 2,
        //         c: 3,
        //         d: 4
        //     }
        //     const copyOfB = objectB
        //     copyOfB.d = 4 
                                // Динамическая типизация УРОК 7
        // const a = () => { 
        //     console.log ('hello world')
        // }
        // a()
        //     Правила работы с переменными:
        //     1. Все переменные обьявлять перед их использованием 
        //     2. Старатья использовать const везде, где возможно
                                // Обьекты. Создание и удаление УРОК 8
            //     Обьект - это набор свойств "Имя: значение"
            //     Обьект - тип значений
            //     Обьект - тип переменных
            // Структура и синтаксис 
            // const MyCity = {
            //     city: 'New York',
            //     popular: true,
            //     country: 'USA'
            // } 
            // console.log(MyCity.country) 
            //     MyCity.city = 'Las Vegas'
            //     console.log (MyCity.city)
            // Порядок свойств не имеет значение
            // const MyTown = {
            //     city: 'Krepost'
            // }
            // MyTown.popular = true
            // console.log (MyTown)
                                        // Удаление 
                // const MyCity = {
                //     country:'USA',
                //     popular: true, 
                //     city: 'New York'
                // }
                // delete MyCity.country
                // console.log (MyCity)
            const MyCity = {
                city: 'New York'
            }
            MyCity['popular'] = true
            
            console.log (MyCity)