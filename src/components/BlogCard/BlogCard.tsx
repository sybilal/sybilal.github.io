
import styles from "./BlogCard.module.scss";

const BlogCard = ({ blog, isDark }: { blog: any; isDark: boolean }) => {
  const openUrlInNewTab = (url: string, name: string) => {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }

    const win = window.open(url, "_blank");
    win?.focus();
  };

  const containerClass = isDark
    ? `${styles.blog_container} ${styles.dark_mode}`
    : styles.blog_container;
  const cardClass = isDark
    ? `${styles.dark_mode} ${styles.blog_card} ${styles.blog_card_shadow}`
    : styles.blog_card;
  const titleClass = isDark
    ? `${styles.small_dark} ${styles.blog_title}`
    : styles.blog_title;
  const descriptionClass = isDark
    ? `${styles.small_dark} ${styles.small}`
    : styles.small;

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={containerClass}>
        <a className={cardClass} href="#blog">
          <h3 className={titleClass}>{blog.title}</h3>
          <p className={descriptionClass}>{blog.description}</p>
          <div className={styles.go_corner}>
            <div className={styles.go_arrow}>→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
