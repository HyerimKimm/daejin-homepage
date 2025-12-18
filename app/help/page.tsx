import HelpForm from "@/components/domain/help-form/HelpForm";

import styles from "./page.module.scss";

export default async function HelpPage() {
  /* Todo. 로딩화면 테스트용 코드, 추후 삭제*/
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main className={styles.page_wrap}>
      <div className={styles.form_wrap}>
        <h1>고객지원</h1>
        <HelpForm />
      </div>
    </main>
  );
}
