"use client";

import { validateEmail, validatePhone } from "@/lib/validates";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import { Dropdown } from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import Textarea from "@/components/ui/textarea/Textarea";
import { useToast } from "@/components/ui/toast";

import styles from "./HelpForm.module.scss";

const helpTypes = [
  {
    label: "제품 구매",
    value: "1",
  },
  {
    label: "A/S",
    value: "2",
  },
  {
    label: "기타",
    value: "3",
  },
];

export default function HelpForm() {
  const shotToast = useToast();

  const [helpType, setHelpType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [privacy, setPrivacy] = useState<boolean>(false);

  const handlePhoneChange = (value: string) => {
    // 숫자만 허용하고 최대 15자리로 제한 (E.164 국제 표준)
    const numbersOnly = value.replace(/[^\d]/g, "");
    if (numbersOnly.length <= 15) {
      setPhone(numbersOnly);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!helpType) {
      shotToast("error", "문의 유형을 선택해주세요.");
      return;
    }

    if (!name) {
      shotToast("error", "이름을 입력해주세요.");
      return;
    }

    if (!phone) {
      shotToast("error", "전화번호를 입력해주세요.");
      return;
    }

    if (!validatePhone(phone)) {
      shotToast(
        "error",
        "올바른 전화번호 형식을 입력해주세요. (예: 01012345678)",
      );
      return;
    }

    if (!email) {
      shotToast("error", "이메일을 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      shotToast("error", "올바른 이메일 형식을 입력해주세요.");
      return;
    }

    if (!content) {
      shotToast("error", "문의 내용을 입력해주세요.");
      return;
    }

    if (!privacy) {
      shotToast("error", "개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    // 유효성 검사 통과 시 성공 메시지
    shotToast("success", "문의가 접수되었습니다.");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_item}>
        <label>문의 유형</label>
        <Dropdown
          items={helpTypes}
          selectedItems={helpType ? [{ label: helpType, value: helpType }] : []}
          placeholder="선택해 주세요"
          onChange={(item: { label: string; value: string }) => {
            setHelpType(item.label);
          }}
          style={{ flexGrow: 1 }}
        />
      </div>

      <div className={styles.form_item}>
        <label>이름</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(value: string) => {
            setName(value);
          }}
          placeholder="이름을 입력해 주세요"
        />
      </div>

      <div className={styles.form_item}>
        <label>전화번호</label>
        <Input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          name="phone"
          placeholder="01012345678"
          maxLength={15}
        />
      </div>

      <div className={styles.form_item}>
        <label>이메일</label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(value: string) => {
            setEmail(value);
          }}
          placeholder="이메일을 입력해 주세요"
        />
      </div>

      <div className={styles.form_item}>
        <label>문의 내용</label>
        <Textarea
          name="content"
          placeholder="문의 내용을 입력해 주세요"
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setContent(e.target.value);
          }}
        />
      </div>

      <Checkbox
        name="privacy"
        id="privacy"
        checked={privacy}
        label="개인정보 수집 및 이용에 동의합니다."
        onChange={(checked: boolean) => {
          setPrivacy(checked);
        }}
      />

      <div className={styles.privacy_info}>
        <p>D.atelier는 아래의 목적으로 개인정보를 수집 및 이용하며, 개인정보를 안전하게 취급하는데 최선을 다합니다.</p>
        <ul>
          <li>수집 항목: 이름, 이메일, 연락처</li>
          <li>수집 목적: 문의글 접수 및 상담</li>
          <li>보유 기간: 1년</li>
        </ul>
      </div>

      <Button type="submit" className={styles.submit_button}>
        문의하기
      </Button>
    </form>
  );
}
