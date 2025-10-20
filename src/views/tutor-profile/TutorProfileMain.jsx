"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { tutorProfileBreadTree } from "@/helpers/breadCrumbs";
import { BiPaperPlane, BiSolidEdit } from "react-icons/bi";
import avatar from "@/assets/images/placeholder.png";
import Image from "next/image";
import { LuContactRound, LuMap } from "react-icons/lu";
import { MdOutlineCall, MdOutlinePinDrop } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Input } from "@heroui/react";

const TutorProfileMain = () => {
  const data = {};

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <BreadcrumbsComponent breadTree={tutorProfileBreadTree} />

        <PrimaryButton startContent={<BiSolidEdit size={18} />} color="primary">
          Edit Profile
        </PrimaryButton>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-3">
          <Card className="p-5">
            <div className="w-32 h-32 relative overflow-hidden rounded-md">
              <Image
                src={avatar}
                alt="Tutor Avatar"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-500">Mathematics Tutor</p>
              {data?.title && <p className="text-gray-500">Tutor Title</p>}
            </div>
          </Card>

          <Card className="mt-5 p-5">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <LuContactRound size={18} />
              Contact Information
            </h4>

            <div>
              <p className="flex items-center gap-2 my-1">
                <BiPaperPlane size={18} className="flex-shrink-0" />
                <span className="line-clamp-1">james_higgins@example.com</span>
              </p>

              <p className="flex items-center gap-2 my-1">
                <MdOutlineCall size={18} className="flex-shrink-0" />
                <span>07842 485 204</span>
              </p>

              {data?.phone && (
                <p className="flex items-center gap-2 my-1">
                  <MdOutlineCall size={18} className="flex-shrink-0" />
                  <span>07842 485 204</span>
                </p>
              )}

              <p className="flex items-center gap-2 my-1">
                <MdOutlinePinDrop size={18} className="flex-shrink-0" />
                <span>Royal Lane, London </span>
              </p>

              <p className="flex items-center gap-2 my-1">
                <LuMap size={18} className="flex-shrink-0" />
                <span>United Kingdom (GB)</span>
              </p>
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Card className={"p-5"}>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <GiSkills size={18} />
              Skills
            </h4>

            <div className="flex items-center gap-2 my-2">
              <Input className="flex-1" />
              <PrimaryButton>Add To List</PrimaryButton>
            </div>

            <div className="bg-slate-100 border-slate-200 rounded-md p-5">
              skills list
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <Card>

          </Card>
        </div>
      </div>
    </>
  );
};

export default TutorProfileMain;