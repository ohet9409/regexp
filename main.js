console.log(123);

// const regexp1 = new RegExp("^abc")
// // new RegExp(표현식)

// const regexp2 = new RegExp("^abc", "gi")
// // new RegExp(표현식, 플래그)

// const regexp1 = /^abc/;
// // /표현식/

// const regexp2 = /^abc/gi
// 표현식/플래그

// 정규표현식
// const str = `
// 010-1234-5678
// hello@gmail.com;
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `
// 대소문자 따져서 검색
// 생성자 방식
// const regexp = new RegExp('the', 'g')
// 리터럴 방식
// const regexp = /the/g
// console.log(str.match(regexp))

// // 대소문자 안가리고 검색
// // 생성자 방식
// // const regexp2 = new RegExp('the', 'gi')
// // 리터럴 방식
// const regexp2 = /the/gi
// console.log(str.match(regexp2))

// test(): boolean 값으로 반환
// const regexp = /fox/gi
// console.log(regexp.test(str))

// // replace 문자 대체
// console.log(str.replace(regexp, 'AAA'))

// ====================================
// 플래그
// const regexp = /the/
// console.log(str.match(regexp))

// const regexp2 = /the/g
// console.log(str.match(regexp2))

// const regexp3 = /the/gi
// console.log(str.match(regexp3))

// // 백슬래시 기호 이용 (일반적인 문자로 변환)
// // 마침표로 끝나는 부분을 찾아줌
// console.log(str.match(/\.$/gim))

// ============================
// 패턴
let str = `
010-1234-5678
thesecon@gmail.com;
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http
d`

console.log(
  // d로 끝나는 부분을 찾는다.
  str.match(/d$/gm)
)

console.log(
  // t로 시작하는 부분을 찾는다.
  str.match(/^t/gm)
)

console.log(
  // h로 시작하고 p로 끝나는 문자를 찾는다 4자리
  str.match(/h..p/g)
)

console.log(
  // fox 또는 dog라는 값을 반환
  str.match(/fox|dog/g)
)

console.log(
  // s가 없거나 s가 있는 http로 시작하는 문자를 찾는다.
  str.match(/https?/g)
)

// d가 2번 반복되는 곳을 찾는다.
console.log(
  str.match(/d{2}/)
)

// d가 2번 이상 반복되는 곳을 찾는다.
console.log(
  str.match(/d{2,}/)
)

// 2글자 이상 3글자 이하인 단어 검색
// 숫자나 알파벳이 아닌 것을 구분자로 선언
console.log(
  str.match(/\b\w{2,3}\b/g)
)