import { LoadingSpinner } from "@/components/ui/loading-spinner";

import styles from "./loading.module.scss";

export default function ProductListLoadingPage() {
  return (
    <div className={styles.loading_wrap}>
      <LoadingSpinner size={40} />
    </div>
  );
}
