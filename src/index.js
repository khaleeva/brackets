module.exports = function check(str, bracketsConfig) {
    // Задача состоит в том, чтобы реализовать функцию "check",
    // которая принимает два параметра: "str" и "bracketsConfig".
    // Первый параметр «str» — это строка, содержащая последовательность скобок.
    // Второй параметр «bracketsConfig» представляет собой массив пар открытых и закрытых скобок.
    // Функция должна проверять, правильно ли открываются и закрываются скобки в параметре «str»
    // в соответствии с параметром «bracketsConfig». Если скобки в параметре «str» правильно открыты и закрыты,
    // функция должна вернуть «true», в противном случае она должна вернуть «false».

    let brackets = bracketsConfig.flat().join('')
    let stack = [];

    for (let bracket of str) {
        let index = brackets.indexOf(bracket);
        if (index % 2 === 0) {
            bracket === brackets[index + 1] && stack[stack.length - 1] === index ?
                stack.pop() : stack.push(index)

        } else if (stack.pop() !== index - 1) return false;

    }


    return stack.length === 0;


}
