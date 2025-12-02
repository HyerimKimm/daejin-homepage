import Dropdown from "@/components/dropdown/Dropdown";
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
          <h1>폐달보드 Pro-M3</h1>

          <div>
            <label>추가 부품</label>
            {/* <select>
              <option value="multi_tab">멀티탭</option>
              <option value="cable_holder">캐이블 홀더</option>
              <option value="gas_spring">가스 스프링</option>
              <option value="slide_catch">슬라이드 빗장</option>
              <option value="cable_mount">캐이블 마운트</option>
              <option value="635_cable_panel_mount">
                6.35mm 캐이블 패널 마운트
              </option>
            </select> */}
            <Dropdown />
          </div>
          <div>
            <label>수량</label>
            <input type="number" min="1" max="100" />
          </div>
          <button type="submit">구매하기</button>
        </form>
      </article>
    </main>
  );
}
