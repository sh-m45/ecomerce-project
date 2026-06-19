import LoginModal from "@/components/modals/LoginModal";
import styles from "./login.module.css";
export default function login() {
  return (
    // <div className={styles.loginPage}>
      <LoginModal isOpen={true} />
      
    // </div>
  );
}
