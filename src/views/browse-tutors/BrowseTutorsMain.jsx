"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { browseTutorsBreadTree } from "@/helpers/breadCrumbs";
import { BiFilterAlt } from "react-icons/bi";
import TutorCard from "./TutorCard";
import { Radio, RadioGroup } from "@heroui/react";
import { LuUserRoundSearch } from "react-icons/lu";
import { useGetTutors } from "@/api/tutors/tutors.hooks";

const BrowseTutorsMain = () => {
  const { data: tutors, isPending } = useGetTutors();
  console.log('tutors ==>', tutors);

  return (
    <>
      <div className="flex items-center justify-between">
        <BreadcrumbsComponent breadTree={browseTutorsBreadTree} />
      </div>

      <div className="grid grid-cols-12 gap-5 mt-5">
        <Card className="col-span-3 p-5 h-fit">
          <div className="flex items-center gap-2">
            <BiFilterAlt size={18} className="flex-shrink-0" />
            <span className="text-base">Filters</span>
          </div>

          <div className="mt-5">
            <div>
              <RadioGroup label="Filter by Subject">
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
              </RadioGroup>
            </div>

            <div className="my-10">
              <RadioGroup label="Filter by Ratings">
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
              </RadioGroup>
            </div>

            <div>
              <RadioGroup label="Filter by Gender">
                <Radio value="buenos-aires">Male</Radio>
                <Radio value="sydney">Female</Radio>
              </RadioGroup>
            </div>
          </div>
        </Card>
        <Card className="col-span-9 p-5">
          <div className="flex items-center justify-between">
            <h5>Available Tutors List</h5>
            <div className="relative">
              <LuUserRoundSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                id="email"
                name="email"
                type="email"
                required
                // value={formData.email}
                // onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div className="mt-5">
            {tutors?.data?.map((tutor, index) => (
              <TutorCard key={index} data={tutor} />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default BrowseTutorsMain;