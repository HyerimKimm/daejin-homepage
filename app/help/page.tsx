import HelpForm from "@/components/domain/help-form/HelpForm";

import styles from "./page.module.scss";

export default async function HelpPage() {
  return (
    <main className={styles.page_wrap}>
      <div className={styles.form_wrap}>
        <h1 className={styles.title}>1:1 문의</h1>
        <HelpForm />
      </div>
    </main>
  );
}
