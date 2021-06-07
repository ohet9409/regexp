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
const str = `
010-1234-5678
hello@gmail.com;
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// 대소문자 따져서 검색
// 생성자 방식
// const regexp = new RegExp('the', 'g')
// 리터럴 방식
const regexp = /the/g
console.log(str.match(regexp))

// 대소문자 안가리고 검색
// 생성자 방식
// const regexp2 = new RegExp('the', 'gi')
// 리터럴 방식
const regexp2 = /the/gi
console.log(str.match(regexp2))