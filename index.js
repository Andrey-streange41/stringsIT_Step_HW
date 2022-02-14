// 1. Написать функцию, которая преобразует названия css- стилей с дефисом в название 
// в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, textalign в textAlign.
function styleConverter(styleName)
{
    let arr = [...styleName];
    while(arr.indexOf('-') !== -1)
        arr.splice(arr.indexOf('-'),2,String(arr[arr.indexOf('-')+1]).toUpperCase())
   return arr;
}
console.log(styleConverter("He-llo-wo-rld"));
// 2. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.
function getAbbr(multi)
{
    let abbr = [];
    let pos = 0;
    for(let i = 0; i < multi.length;i++)
    {
        if(i===0)
            abbr[pos++] = multi[0];
        if(multi[i] === ' ' ||multi[i] === '-' )
        {
            abbr[pos++] = multi[i+1];
        }
    }
    return abbr.join('').toUpperCase();
}
console.log(getAbbr("cascading style sheets"));
console.log(getAbbr("объектно-ориентированное программирование"));
// 3. Написать функцию, которая получает url и выводит подробную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.
function getInfo(url)
{
   let arr =[...url];
   let protocol =  arr.slice(0,arr.indexOf(":")).join('');
   let domen = arr.slice(arr.indexOf('/')+2, arr.indexOf('/',arr.indexOf('/')+2)).join('');
   let src = '.'+arr.slice(arr.indexOf('/', arr.indexOf('.')+1)).join('');
   console.log(`Protocol: ${protocol}; Domen: ${domen}; Source: ${src};`);
}
getInfo('https://itstep.org/ua/about');
// 4. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
function splitStr(str)
{
    return  str.split("/");
}
console.log(splitStr("10/08/2020"));
// 5. Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, 
// в тексте которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо %индекс 
// необходимо вывести значение соответствующего входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.
function printf(template, ...params)
{
    let arr = [...template];
    for(let i = 0; i < template.length; i++)
    {
        if(arr[i] === '%' && !isNaN(arr[i]))
        {
             let pos = arr.at(i+1)-1;
             arr[i] = params[pos];
             arr[i+1]='';
        }
    }
    return arr.join('');
}

console.log(printf("Today is %1 %2.%3.%4 cpp", "Monday", 10, 8, 2020));