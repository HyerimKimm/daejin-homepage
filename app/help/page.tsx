import HelpForm from "@/components/domain/help-form/HelpForm";

import styles from "./page.module.scss";

export default async function HelpPage() {
  return (
    <main className={styles.page_wrap}>
      <div className={styles.form_wrap}>
        <h1>고객지원</h1>
        <HelpForm />
      </div>
    </main>
  );
}
