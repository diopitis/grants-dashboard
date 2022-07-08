import styles from "./ProjectTags.module.css";
import Link from "next/link";
const ProjectTags = ({ props: { formData, handleChange } }) => {
  return (
    <div className={styles.projectTagsWrapper}>
      <h1>Project Tags</h1>
      <p className={styles.subtitle}>
        Select the Project Tags below. If you have questions about Project Tags,
        click{" "}
        <Link href="/">
          <a>here</a>
        </Link>
        .
      </p>
      <div className={styles.section}>
        <h2>Project Goals</h2>
        <div className={styles.selectionChoices}>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Create New Technology"
              name="projectGoals"
            />
            <label>Create New Technology</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Integrate Between Technologies"
              name="projectGoals"
            />
            <label>Integrate Between Technologies</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Improve Existing Technologies"
              name="projectGoals"
            />
            <label>Improve Existing Technologies</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Strengthen Community"
              name="projectGoals"
            />
            <label>Strengthen Community</label>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Project Audience</h2>
        <div className={styles.selectionChoices}>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Developers"
              name="projectAudience"
            />
            <label>Developers</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Existing End Users"
              name="projectAudience"
            />
            <label>Existing End Users</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Miners & Validators"
              name="projectAudience"
            />
            <label>Miners & Validators</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Potential End Users"
              name="projectAudience"
            />
            <label>Potential End Users</label>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Project Openness</h2>
        <div className={styles.selectionChoicesLast}>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Fully Open Source"
              name="projectOpenness"
            />
            <label>Fully Open Source</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Partially Open Source"
              name="projectOpenness"
            />
            <label>Partially Open Source</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              value="Not Open Source"
              name="projectOpenness"
            />
            <label>Not Open Source</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTags;
