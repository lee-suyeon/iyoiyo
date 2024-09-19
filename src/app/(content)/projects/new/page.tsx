import ImagePicker from "@/common/ImagePicker";
import Header from "@/components/Header";

function NewProjectPage() {
  return (
    <div>
      <Header title="Add Project" />
      <form className="w-full">
        <ImagePicker
          id="project-image"
          placeholder="프로젝트 이미지를 추가해주세요."
        />
      </form>
    </div>
  );
}

export default NewProjectPage;
