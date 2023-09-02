/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }

  if (num % 3 === 0) {
    return 'Fizz';
  }

  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (!Number.isFinite(n) || n < 1) {
    throw new Error('n must be an integer greater than 1');
  }

  return new Array(n)
    .fill(1)
    .map((num, index) => num + index)
    .reduce((mult, num) => mult * num, 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
    throw new Error('Arguments must be numbers');
  }

  return new Array(n2 - n1 + 1)
    .fill(n1)
    .map((num, index) => num + index)
    .reduce((sum, num) => sum + num, 0);
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b > c) {
    if (a + c > b) {
      if (b + c > a) {
        return true;
      }
    }
  }

  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  return rect1.top + rect1.height >= rect2.top
  && rect2.top + rect2.height >= rect1.top
  && rect1.left + rect1.width >= rect2.left
  && rect2.left + rect2.width >= rect1.left;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return Math.hypot(point.x - circle.center.x, point.y - circle.center.y) < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const stringWithoutSpaces = str.replace(/\s/gi, '');
  const arrOfQuantityOfLetterRepetitions = stringWithoutSpaces
    .split('')
    .filter((letter, index, array) => array.filter((elem) => elem === letter).length === 1);

  return arrOfQuantityOfLetterRepetitions[0] || null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const minRangeValue = Math.min(a, b);
  const maxRangeValue = Math.max(a, b);

  switch (true) {
    case (isStartIncluded && isEndIncluded):
      return `[${minRangeValue}, ${maxRangeValue}]`;
    case (!isStartIncluded && isEndIncluded):
      return `(${minRangeValue}, ${maxRangeValue}]`;
    case (isStartIncluded && !isEndIncluded):
      return `[${minRangeValue}, ${maxRangeValue})`;
    case (!isStartIncluded && !isEndIncluded):
      return `(${minRangeValue}, ${maxRangeValue})`;
    default:
      return 'Unexpected result. Something went wrong(((';
  }
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(String(num)
    .split('')
    .reverse()
    .join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  if (!Number.isFinite(ccn)) {
    throw new Error('ccn must be an integer number!');
  }

  const ccnSumOfItsDigits = String(ccn)
    .split('')
    .reverse()
    .map((elem, index) => {
      let result = elem;

      if (index % 2 === 1) {
        result = Number(result) * 2;

        if (result > 9) {
          return String(result)
            .split('')
            .reduce((sum, num) => sum + +num, 0);
        }
        return +result;
      }
      return +elem;
    })
    .reverse()
    .reduce((sum, num) => sum + num, 0);

  return ccnSumOfItsDigits % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let result = num;

  if (Math.abs(result) < 10) {
    return result;
  }

  result = String(result)
    .split('')
    .reduce((sum, stringNum) => sum + +stringNum, 0);

  return getDigitalRoot(result);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  if (typeof str !== 'string') {
    throw new Error('Not a string was given');
  }

  // TODO ask about ESLint-disable-line!
  if (str.replace(/[\[\](){}<>]/gi, '').length !== 0) { // eslint-disable-line
    throw new Error('Unexpected character present. Avaliable charcters are: [],(),{},<>');
  }

  if (!str.length) {
    return true;
  }

  const stack = [];

  function fillStack(stackOfElements = [], strElement) {
    return stackOfElements.push(strElement);
  }

  function isCurrentBracketClose(strElement) {
    const closeBracketDictionary = [
      ']', ')', '}', '>',
    ];

    let resultOfcheck = false;

    if (closeBracketDictionary.includes(strElement)) {
      resultOfcheck = true;
    }

    return resultOfcheck;
  }

  function isStackTopMatchCurrentCloseBracket(stackOfElements = [], strElement) {
    const pareBracketDictionary = {
      ']': '[',
      ')': '(',
      '}': '{',
      '>': '<',
    };

    let resultOfcheck = false;

    if (stackOfElements.at(-1) === pareBracketDictionary[strElement]) {
      resultOfcheck = true;
    }

    return resultOfcheck;
  }

  function popStackTop(stackOfElements = []) {
    stackOfElements.pop();
  }

  if (isCurrentBracketClose(str[0])) {
    return !isCurrentBracketClose(str[0]);
  }

  for (let i = 0; i < str.length; i += 1) {
    if (stack.length) {
      if (isStackTopMatchCurrentCloseBracket(stack, str[i])) {
        popStackTop(stack, str[i]);
      } else if (isCurrentBracketClose(str[i])) {
        return !isCurrentBracketClose(str[i]);
      } else {
        fillStack(stack, str[i]);
      }
    } else {
      fillStack(stack, str[i]);
    }
  }

  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  if (!Number.isFinite(num) || !Number.isFinite(n)) {
    throw new Error('num and n must be integer numbers!');
  }

  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  if (!pathes.every((path) => path.startsWith('/'))) {
    return '';
  }

  const minPathLength = Math.min(...pathes.map((pathPart) => pathPart.length));
  const commonPath = [];

  for (let i = 0; i < minPathLength; i += 1) {
    const stack = [];

    pathes.forEach((pathPart) => stack.push(pathPart[i]));

    if (Array.from(new Set(stack)).length === 1) {
      // [a, a, a] => (magic below) => [a]
      commonPath.push(...Array.from(new Set(stack)));
    } else if (commonPath.length) {
      if (commonPath.filter((pathPart) => pathPart === '/').length === 1) {
        return commonPath.join('').match(/\//gi).join('');
      }

      if (commonPath.filter((pathPart) => pathPart === '/').length > 1) {
        return commonPath.join('').match(/(\/)(\w+\/)+/gi).join('');
      }
    } else {
      return '';
    }
  }
  return 'empty result';
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  if (m1[0].length !== m2.length) {
    throw new Error('matrix m1 row length must be equal to matrix m2 column length');
  }

  function createTemplateMatrixOfMultOfMatrixes(matrix1, matrix2) {
    const resultMatrix = [];

    // never! NEVER!!! USE FILL FOR FILLING ARRAY WITH NEW ARRAY!!! It'll cause trouble,
    // that all inner arrays, that were filled are simply THE ONE ARRAY!!! (one reference to it);
    // https://stackoverflow.com/questions/50310615/value-changes-in-all-rows-of-matrix
    for (let i = 0; i < matrix1.length; i += 1) {
      resultMatrix.push(new Array(matrix2[0].length).fill(0));
    }

    return resultMatrix;
  }

  const resMatrix = createTemplateMatrixOfMultOfMatrixes(m1, m2);

  for (let i = 0; i < m1.length; i += 1) {
    for (let j = 0; j < m2[0].length; j += 1) {
      resMatrix[i][j] = m1[i].reduce((sum, elem, index) => sum + elem * m2[index][j], 0);
    }
  }

  return resMatrix;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  // TODO fix bug with matrix rows length (in few cases it's less then column length)
  // TODO  in the tests!!!
  // if (position.every((matrixRow) => matrixRow.length === position.length)
  //  && position.length === Math.max(...position.map((matrixRow) => matrixRow.length))) {
  //   throw new Error('matrix row quantity must be equal to matrix column quantity');
  // }

  function getMatrixLength(matrix) {
    const matrixColumnLength = matrix.length;
    const matrixRowLength = Math.max(...matrix.map((matrixRow) => matrixRow.length));

    return Math.max(matrixColumnLength, matrixRowLength);
  }

  const matrixLength = getMatrixLength(position);

  function checkMatrixRows(matrix) {
    for (let i = 0; i < matrixLength; i += 1) {
      if (matrix[i].length === matrixLength) {
        if (matrix[i].every((elem) => elem === 'X')) {
          return 'X';
        }

        if (matrix[i].every((elem) => elem === '0')) {
          return '0';
        }
      }
    }

    return undefined;
  }

  function checkMatrixColumns(matrix) {
    for (let i = 0; i < matrixLength; i += 1) {
      const stack = [];

      for (let j = 0; j < matrixLength; j += 1) {
        stack.push(matrix[j][i]);
      }

      if (stack.length === matrixLength) {
        if (stack.every((elem) => elem === 'X')) {
          return 'X';
        }

        if (stack.every((elem) => elem === '0')) {
          return '0';
        }
      }
    }

    return undefined;
  }

  function checkMatrixMainDiag(matrix) {
    const stack = [];

    for (let i = 0, j = 0; i < matrixLength, j < matrixLength; i += 1, j += 1) { // eslint-disable-line
      stack.push(matrix[i][j]);
    }

    if (stack.length === matrixLength) {
      if (stack.every((elem) => elem === 'X')) {
        return 'X';
      }

      if (stack.every((elem) => elem === '0')) {
        return '0';
      }
    }

    return undefined;
  }

  function checkMatrixMinorDiag(matrix) {
    const stack = [];

    for (let i = matrixLength - 1, j = 0; i >= 0, j < matrixLength; i -= 1, j += 1) { // eslint-disable-line
      stack.push(matrix[i][j]);
    }

    if (stack.length === matrixLength) {
      if (stack.every((elem) => elem === 'X')) {
        return 'X';
      }

      if (stack.every((elem) => elem === '0')) {
        return '0';
      }
    }

    return undefined;
  }

  return checkMatrixRows(position)
    || checkMatrixColumns(position)
    || checkMatrixMainDiag(position)
    || checkMatrixMinorDiag(position)
    || undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
