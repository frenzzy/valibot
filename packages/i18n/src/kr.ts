import { Language } from './types';

// prettier-ignore
const language: Language = {
  code: 'kr',
  schema: (issue) =>
    `유효하지 않은 타입: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
  specific: {
    bic: (issue) => `유효하지 않은 사업자 식별코드(BIC): ${issue.received} 을(를) 받았습니다.`,
    bytes: (issue) =>
      `유효하지 않은 바이트: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    creditCard: (issue) => `유효하지 않은 신용카드: ${issue.received} 을(를) 받았습니다.`,
    cuid2: (issue) => `유효하지 않은 Cuid2: ${issue.received} 을(를) 받았습니다.`,
    custom: (issue) => `유효하지 않은 입력: ${issue.received} 을(를) 받았습니다.`,
    customAsync: (issue) => `유효하지 않은 입력: ${issue.received} 을(를) 받았습니다.`,
    decimal: (issue) => `유효하지 않은 십진수: ${issue.received} 을(를) 받았습니다.`,
    email: (issue) => `유효하지 않은 이메일: ${issue.received} 을(를) 받았습니다.`,
    emoji: (issue) => `유효하지 않은 이모지: ${issue.received} 을(를) 받았습니다.`,
    endsWith: (issue) =>
      `유효하지 않은 끝: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    equal: (issue) =>
      `유효하지 않은 값: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    excludes: (issue) =>
      `유효하지 않은 컨텐츠: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    finite: (issue) => `유효하지 않은 유한 숫자: ${issue.received} 을(를) 받았습니다.`,
    hash: (issue) => `유효하지 않은 해쉬: ${issue.received} 을(를) 받았습니다.`,
    hexColor: (issue) => `유효하지 않은 hex 색상: ${issue.received} 을(를) 받았습니다.`,
    hexadecimal: (issue) =>
      `유효하지 않은 16진수: ${issue.received} 을(를) 받았습니다.`,
    imei: (issue) => `유효하지 않은 IMEI: ${issue.received} 을(를) 받았습니다.`,
    includes: (issue) =>
      `유효하지 않은 컨텐츠: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    integer: (issue) => `유효하지 않은 정수: ${issue.received} 을(를) 받았습니다.`,
    ip: (issue) => `유효하지 않은 IP: ${issue.received} 을(를) 받았습니다.`,
    ipv4: (issue) => `유효하지 않은 IPv4: ${issue.received} 을(를) 받았습니다.`,
    ipv6: (issue) => `유효하지 않은 IPv6: ${issue.received} 을(를) 받았습니다.`,
    isoDate: (issue) => `유효하지 않은 날짜: ${issue.received} 을(를) 받았습니다.`,
    isoDateTime: (issue) =>
      `유효하지 않은 날짜-시각: ${issue.received} 을(를) 받았습니다.`,
    isoTime: (issue) => `유효하지 않은 시각: ${issue.received} 을(를) 받았습니다.`,
    isoTimeSecond: (issue) =>
      `유효하지 않은 시각-초: ${issue.received} 을(를) 받았습니다.`,
    isoTimestamp: (issue) =>
      `유효하지 않은 타임스탬프: ${issue.received} 을(를) 받았습니다.`,
    isoWeek: (issue) => `유효하지 않은 요일: ${issue.received} 을(를) 받았습니다.`,
    length: (issue) =>
      `유효하지 않은 길이: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    mac: (issue) => `유효하지 않은 MAC: ${issue.received} 을(를) 받았습니다.`,
    mac48: (issue) => `유효하지 않은 48-bit MAC: ${issue.received} 을(를) 받았습니다.`,
    mac64: (issue) => `유효하지 않은 64-bit MAC: ${issue.received} 을(를) 받았습니다.`,
    maxBytes: (issue) =>
      `유효하지 않은 바이트: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    maxLength: (issue) =>
      `유효하지 않은 길이: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    maxSize: (issue) =>
      `유효하지 않은 크기: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    maxValue: (issue) =>
      `유효하지 않은 값: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    mimeType: (issue) =>
      `유효하지 않은 MIME 타입: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    minBytes: (issue) =>
      `유효하지 않은 바이트: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    minLength: (issue) =>
      `유효하지 않은 길이: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    minSize: (issue) =>
      `유효하지 않은 크기: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    minValue: (issue) =>
      `유효하지 않은 값: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    multipleOf: (issue) =>
      `유효하지 않은 배수: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    notBytes: (issue) =>
      `유효하지 않은 바이트: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    notLength: (issue) =>
      `유효하지 않은 길이: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    notSize: (issue) =>
      `유효하지 않은 크기: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    notValue: (issue) =>
      `유효하지 않은 값: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    octal: (issue) => `유효하지 않은 8진수: ${issue.received} 을(를) 받았습니다.`,
    regex: (issue) =>
      `유효하지 않은 형식: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    safeInteger: (issue) =>
      `유효하지 않은 안전한 정수: ${issue.received} 을(를) 받았습니다.`,
    size: (issue) =>
      `유효하지 않은 크기: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    startsWith: (issue) =>
      `유효하지 않은 시작: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
    ulid: (issue) => `유효하지 않은 ULID: ${issue.received} 을(를) 받았습니다.`,
    url: (issue) => `유효하지 않은 URL: ${issue.received} 을(를) 받았습니다.`,
    uuid: (issue) => `유효하지 않은 UUID: ${issue.received} 을(를) 받았습니다.`,
    value: (issue) =>
      `유효하지 않은 값: ${issue.expected} 을(를) 예상했으나 ${issue.received} 을(를) 받았습니다.`,
  },
};

export default language;
