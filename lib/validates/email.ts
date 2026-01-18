/**  이메일 유효성 검사
 * 검사 통과 조건
 * 이메일 주소 앞부분 : 영문 대소문자, 0-9 숫자, ._%+- 특수문자
 * @ 필수
 * 도메인 파트 : 영문 대소문자, 숫자, 점(.), 하이픈(-)
 * 최상위 도메인 (TLD) : .(점) + 영문 대소문자 2자 이상
 */
export default function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
