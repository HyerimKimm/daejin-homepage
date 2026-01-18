/**  전화번호 유효성 검사 (대한민국 기준)
 * 조건: 010, 011, 016, 017, 018, 019로 시작
 * 조건: 10-11자리 숫자
 * (만약 입력 시 하이픈-이 있다면 제거한다.)
 */
export default function validatePhone(phone: string): boolean {
  // 하이픈 제거 후 숫자만 추출
  const phoneNumber = phone.replace(/-/g, "");

  // 010, 011, 016, 017, 018, 019로 시작하는 10-11자리 숫자
  const phoneRegex = /^(010|011|016|017|018|019)[0-9]{7,8}$/;

  return phoneRegex.test(phoneNumber);
}
