"use client";

import styles from "./HeroBanner.module.scss";

export default function HeroBanner() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>
          기구 설계 전문가가 직접 설계하는
          <br />
          프리미엄 제품
        </h1>
        <p className={styles.hero_description}>
          정밀한 설계와 고품질 제작으로 완성되는
          <br />
          당신만을 위한 맞춤형 솔루션을 만나보세요
        </p>
      </div>
      <div className={styles.hero_image}>
        {/* 이미지 placeholder - 나중에 이미지 추가 */}
        <div className={styles.image_placeholder}></div>
      </div>
    </section>
  );
}
