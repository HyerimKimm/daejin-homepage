import Three from "@/components/three/Three";

import styles from "./page.module.scss";

export default function ProductDetailPage() {
  return (
    <main className={styles.page_wrap}>
      <article className={styles.article_wrap}>
        <div className={styles.info_wrap}>
          <Three />
        </div>
        <form className={styles.form_wrap}>
          <div>
            <label>수량을 선택하세요</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button type="submit">구매하기</button>
        </form>
      </article>
    </main>
  );
}
