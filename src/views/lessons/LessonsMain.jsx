"use client";
import { useState } from "react";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { lessondTree } from "@/helpers/breadCrumbs";
import { GoPlus } from "react-icons/go";
import LessonCard from "./LessonCard";
import { useGetServices } from "@/api/services/services.hooks";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PrimaryModal from "@/components/PrimaryModal";
import NewServiceForm from "./NewServiceForm";

const LessonsMain = () => {
  const {data: services} = useGetServices();
  const [showNewServiceModal, setShowNewServiceModal] = useState(false);

    return (
        <>
          <div className="flex items-center justify-between">
            <BreadcrumbsComponent breadTree={lessondTree} />

            <PrimaryButton onPress={()=> setShowNewServiceModal(true)} startContent={<GoPlus size={18} />} color="primary">
              Add New Lesson
            </PrimaryButton>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <div className="w-4 h-4 bg-brand rounded"></div>
            <h4 className="font-medium text-base">My Lessons</h4>
          </div>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {services?.data?.map((service, index)=> (
              <LessonCard key={index} data={service} isLogged={true} />
            ))}
          </div>

          {showNewServiceModal && (
            <PrimaryModal
              isOpen={showNewServiceModal}
              onOpenChange={() => setShowNewServiceModal(false)}
              size="lg"
              title="Add New Service"
            >
              <NewServiceForm 
                setShowNewServiceModal={setShowNewServiceModal}
              />
            </PrimaryModal>
          )}
        </>
    );
};

export default LessonsMain;