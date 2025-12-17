import styles from "@/app/loading.module.scss";

import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function ProductDetailLoadingPage() {
  return (
    <div className={styles.loading_wrap}>
      <LoadingSpinner size={40} />
    </div>
  );
}
