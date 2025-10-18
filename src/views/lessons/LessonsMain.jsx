import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { lessondTree } from "@/helpers/breadCrumbs";

const LessonsMain = () => {
    return (
        <>
          <BreadcrumbsComponent breadTree={lessondTree} />
        </>
    );
};

export default LessonsMain;