"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import { Dropdown } from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import Textarea from "@/components/ui/textarea/Textarea";

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
  const [helpType, setHelpType] = useState<string>("");
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  return (
    <form className={styles.form}>
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
        <Input type="text" name="name" placeholder="이름을 입력해 주세요" />
      </div>

      <div className={styles.form_item}>
        <label>전화번호</label>
        <Input
          type="text"
          name="phone"
          placeholder="전화번호를 입력해 주세요"
        />
      </div>

      <div className={styles.form_item}>
        <label>이메일</label>
        <Input type="email" name="email" placeholder="이메일을 입력해 주세요" />
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
        label="개인정보 수집 및 이용 동의"
        onChange={(checked: boolean) => {
          setPrivacy(checked);
        }}
      />

      <Button type="submit">문의하기</Button>
    </form>
  );
}
