"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { lessondTree } from "@/helpers/breadCrumbs";
import { Button } from "@heroui/react";
import { GoPlus } from "react-icons/go";
import LessonCard from "./LessonCard";

const LessonsMain = () => {
    return (
        <>
          <div className="flex items-center justify-between">
            <BreadcrumbsComponent breadTree={lessondTree} />

            <Button startContent={<GoPlus size={18} />} color="primary">
              Add New Lesson
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <div className="w-4 h-4 bg-brand rounded"></div>
            <h4 className="font-medium text-base">My Lessons</h4>
          </div>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
          </div>
        </>
    );
};

export default LessonsMain;