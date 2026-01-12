"use client";

import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer_wrap}>
      <div className={styles.footer_content}>
        <div className={styles.footer_top}>
          <div className={styles.footer_info}>
            <h3 className={styles.company_name}>D.Atelier</h3>
            <div className={styles.company_details}>
              <p>
                <span>대표자</span>홍길동
              </p>
              <p>
                <span>사업자등록번호</span>123-45-67890
              </p>
              <p>
                <span>주소</span>서울특별시 강남구 테헤란로 123
              </p>
            </div>
          </div>

          <div className={styles.footer_links}>
            <div className={styles.link_group}>
              <h4 className={styles.link_title}>고객지원</h4>
              <Link href="/help" className={styles.link_item}>
                문의하기
              </Link>
            </div>
            <div className={styles.link_group}>
              <h4 className={styles.link_title}>법적 고지</h4>
              <Link href="/terms" className={styles.link_item}>
                이용약관
              </Link>
              <Link href="/privacy" className={styles.link_item}>
                개인정보처리방침
              </Link>
            </div>
          </div>

          <div className={styles.footer_contact}>
            <h4 className={styles.contact_title}>연락처</h4>
            <p className={styles.contact_item}>
              <span>전화</span>
              <a href="tel:02-1234-5678">02-1234-5678</a>
            </p>
            <p className={styles.contact_item}>
              <span>이메일</span>
              <a href="mailto:contact@datelier.com">contact@datelier.com</a>
            </p>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} D.Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
