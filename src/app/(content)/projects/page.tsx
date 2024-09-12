import { Button } from "@/common";
import Header from "@/components/Header";
import classes from "./page.module.css";
import Link from "next/link";

function ProjectPage() {
  return (
    <div className={classes.project}>
      <Header title="Projects" />
      <div className={classes.empty}>
        현재 진행중인 프로젝트가 없어요. <br />
        새로운 프로젝트를 추가해주세요!
      </div>
      <Button fullWidth={true}>
        <Link href="/projects/new">Add Project</Link>
      </Button>
    </div>
  );
}

export default ProjectPage;
