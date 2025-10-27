"use client";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { useRouter } from "next/navigation";

const BreadcrumbsComponent = ({breadTree = []}) => {

  const {push: navigate} = useRouter();
  const currPage = breadTree?.length > 0 ? breadTree[0].name : "";

  return (
    <>
      <div className="flex flex-col gap-2">

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 pb-2">
          <h3 className={`font-medium capitalize text-2xl ${breadTree.length > 1 && "md:border-r border-brand/30"} pr-3`}>{currPage}</h3>

          <Breadcrumbs>
            {breadTree?.slice(1).map((item, index) => (
              <BreadcrumbItem 
                key={index}
                onPress={() => navigate(item.url)}
                className={index === breadTree.length - 2 ? "font-medium capitalize" : ""}
              >
                {item.name}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbsComponent;  