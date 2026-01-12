import Link from "next/link";

import HeroBanner from "@/components/domain/hero-banner/HeroBanner";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page_wrap}>
      {/* 히어로 배너 */}
      <HeroBanner />

      {/* 제품 소개 섹션 */}
      <section className={styles.products_section}>
        <h2 className={styles.section_title}>주요 제품</h2>
        <div className={styles.products_grid}>
          <Link href="/1/list" className={styles.product_card}>
            <div className={styles.product_image_wrap}>
              <div className={styles.product_image_placeholder}></div>
            </div>
            <div className={styles.product_info}>
              <h3 className={styles.product_name}>폐달보드</h3>
              <p className={styles.product_description}>
                음악가를 위한 정밀 설계의 프리미엄 폐달보드
              </p>
            </div>
          </Link>

          <Link href="/2/list" className={styles.product_card}>
            <div className={styles.product_image_wrap}>
              <div className={styles.product_image_placeholder}></div>
            </div>
            <div className={styles.product_info}>
              <h3 className={styles.product_name}>책상</h3>
              <p className={styles.product_description}>
                실용성과 디자인을 겸비한 커스텀 책상
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className={styles.features_section}>
        <h2 className={styles.section_title}>왜 D.Atelier인가요?</h2>
        <div className={styles.features_grid}>
          <div className={styles.feature_item}>
            <div className={styles.feature_icon}></div>
            <h3 className={styles.feature_title}>전문가 설계</h3>
            <p className={styles.feature_description}>
              기구 설계 전문가가 직접 설계하여
              <br />
              최적의 구조와 기능을 제공합니다
            </p>
          </div>

          <div className={styles.feature_item}>
            <div className={styles.feature_icon}></div>
            <h3 className={styles.feature_title}>프리미엄 품질</h3>
            <p className={styles.feature_description}>
              고품질 소재와 정밀한 제작 공정으로
              <br />
              오래 사용할 수 있는 제품을 만듭니다
            </p>
          </div>

          <div className={styles.feature_item}>
            <div className={styles.feature_icon}></div>
            <h3 className={styles.feature_title}>맞춤형 솔루션</h3>
            <p className={styles.feature_description}>
              다양한 옵션을 통해
              <br />
              당신만의 특별한 제품을 완성할 수 있습니다
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
