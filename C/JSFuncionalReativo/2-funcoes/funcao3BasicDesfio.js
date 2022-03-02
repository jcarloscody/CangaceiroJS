function somar(n1) {
    return (n2) => {
        return (operador) => {
            if (operador === "+") {
                return n1 + n2
            } else if (operador === "-") {
                return n1 - n2
            } else if (operador === "/") {
                return n1 / n2
            } else {
                return n1 * n2
            }
        }
    }
}

console.log(somar(1)(2)("*"))


//modo do professor por function expression
function somar2(n1) {
    return (n2) => {
        return (fn) => {
            return fn(n1, n2)
        }
    }
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function soma(n1, n2) {
    return n1 + n2;
}
function mult(n1, n2) {
    return n1 * n2;
}

console.log(somar2(1)(2)(soma))