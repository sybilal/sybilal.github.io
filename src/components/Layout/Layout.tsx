import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollProgress from '../ScrollProgress';
import styles from './Layout.module.scss';

export default function Layout() {
  const { pathname } = useLocation();

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <ScrollProgress />
      <Navbar />
      <main className={styles.main} key={pathname}>
        <div className={styles.pageTransition}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
